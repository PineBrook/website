function doPost(e) {                                                             
  try {                                                                          
    var data = JSON.parse(e.postData.contents);                                  
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();          
                                                                                  
    // Checks if the sheet is empty to dynamically add the headers
    if (sheet.getLastRow() === 0) {                                              
      sheet.appendRow([
        "ID", 
        "Date",            
        "Time (GMT+5:30)", 
        "First Name", 
        "Last Name", 
        "Company Name",    // New Column
        "Location",        // New Column
        "Email", 
        "Phone Extension", 
        "Phone Number"
      ]);      
    }                                                                            
                                                                                  
    // Calculates the next sequential ID
    var nextId = sheet.getLastRow(); 

    // Generate Date and Time formatted in GMT +5:30 (Milliseconds stripped)
    var now = new Date();
    var dateString = Utilities.formatDate(now, "GMT+5:30", "yyyy-MM-dd");
    var timeString = Utilities.formatDate(now, "GMT+5:30", "HH:mm:ss");

    sheet.appendRow([ 
      nextId,
      dateString, 
      timeString, 
      data.firstname || "",
      data.lastname || "",                                                           
      data.company || "",  // New Field
      data.location || "", // New Field
      data.email || "",  
      data.phoneExtension || "",                                                        
      data.phoneNumber || ""                                                           
    ]);                                                                                                                                         
    return ContentService.createTextOutput(JSON.stringify({ success: true }))    
      .setMimeType(ContentService.MimeType.JSON);                                
  } catch (error) {                                                              
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))                                                        
      .setMimeType(ContentService.MimeType.JSON);                                
  }                                                                              
}
