function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "ID",
        "Date",
        "Time (IST)",
        "First Name",
        "Last Name",
        "Email",
        "Phone Extension",
        "Phone Number",
        "Company Name",
        "Location"
      ]);
    }

    var nextId = sheet.getLastRow();
    var now = new Date();
    var dateString = Utilities.formatDate(now, "GMT+5:30", "yyyy-MM-dd");
    var timeString = Utilities.formatDate(now, "GMT+5:30", "HH:mm:ss");

    sheet.appendRow([
      nextId,
      dateString,
      timeString,
      data.firstname || "",
      data.lastname || "",
      data.email || "",
      data.phoneExtension || "",
      data.phoneNumber || "",
      data.companyName || "",
      data.location || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
