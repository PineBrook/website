import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Google Apps Script Web App Template for Google Sheets:
 * 
 * ```javascript
 * function doPost(e) {
 *   try {
 *     var data = JSON.parse(e.postData.contents);
 *     
 *     // Open spreadsheet by ID or use active
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     
 *     // Add headers if sheet is empty
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow(["Timestamp", "Full Name", "Email", "Phone Number"]);
 *     }
 *     
 *     // Append the new inquiry row
 *     sheet.appendRow([
 *       new Date().toISOString(),
 *       data.name || "",
 *       data.email || "",
 *       data.phone || ""
 *     ]);
 *     
 *     return ContentService.createTextOutput(JSON.stringify({ success: true }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (error) {
 *     return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * ```
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(451).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone } = req.body;

  // Validate request body
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Name, email, and phone are required." });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  // Local development fallback / Mock if webhook is not configured
  if (!webhookUrl) {
    console.log("Mocking Google Sheets Submission (GOOGLE_SHEETS_WEBHOOK_URL not configured):");
    console.log(`- Timestamp: ${new Date().toISOString()}`);
    console.log(`- Name: ${name}`);
    console.log(`- Email: ${email}`);
    console.log(`- Phone: ${phone}`);
    
    // Simulate slight delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return res.status(200).json({
      success: true,
      message: "Success (Mocked local save - set GOOGLE_SHEETS_WEBHOOK_URL to connect to real Google Sheet)",
      data: { name, email, phone },
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });

    if (!response.ok) {
      throw new Error(`Google Script returned status ${response.status}`);
    }

    const result = await response.json();
    if (result.success === false) {
      throw new Error(result.error || "Google Script execution failed");
    }

    return res.status(200).json({ success: true, message: "Inquiry saved to Google Sheets" });
  } catch (error: any) {
    console.error("Error submitting to Google Sheets:", error);
    return res.status(500).json({
      message: "Failed to save inquiry to database.",
      error: error.message || error.toString(),
    });
  }
}
