// =============================================
// PASTE THIS CODE IN Google Apps Script Editor
// Extensions → Apps Script → Paste → Save → Deploy
// =============================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add row with all result data
    sheet.appendRow([
      new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}),
      data.name,
      "Set " + data.setNumber,
      data.totalCorrect,
      data.totalQuestions,
      data.percentage + "%",
      data.warnings,
      data.timeTaken,
      data.sectionA || "-",
      data.sectionB || "-",
      data.sectionC || "-",
      data.sectionD || "-",
      data.sectionE || "-"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Sheet backend is running!")
    .setMimeType(ContentService.MimeType.TEXT);
}
