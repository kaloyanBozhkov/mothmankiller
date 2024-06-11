// this is setup in the google sheet AppScript editor
function onEdit(e) {
  const range = e.range;
  const editedColumn = range.getColumn();
  const editedRow = range.getRow();
  const editedValue = range.getValue();
  const applyChangesColumn = 9; // Assuming "Apply changes" is the 9th column

  // Check if the edited cell is in column 9 and row 2 and the value is true
  if (
    editedColumn == applyChangesColumn &&
    editedRow == 2 &&
    editedValue == true
  ) {
    sendJSON(() => {
      // Toggle the checkbox off for column 9, row 2
      const sheet = range.getSheet();
      sheet.getRange(2, 9).setValue(false);
    });
  }
}

function sendJSON(onSent) {
  const url = "https://a8c1-84-43-213-15.ngrok-free.app/api/sheets/sync-events";
  const SECRET = "secret";
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getDataRange();
  const values = range.getValues();

  // Function to convert string to camelCase
  function toCamelCase(str) {
    return str
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, '');
  }
  
  // Get headers (first row) and convert them to camelCase
  const headers = values[0].map(header => header ? toCamelCase(header) : null);
  
  // Get the rest of the data
  const data = values.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, index) => {
      if (headers[index] && cell !== "") {
        obj[headers[index]] = cell;
      }
    });
    return obj;
  }).filter(row => Object.keys(row).length > 0); // Remove empty rows

  const payload = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      events: data,
      secret: SECRET,
    })
  };

  UrlFetchApp.fetch(url, payload);
  onSent();