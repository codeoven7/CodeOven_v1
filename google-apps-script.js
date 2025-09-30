/**
 * Google Apps Script for CodeOven Contact Form
 * This script receives form submissions and saves them to Google Sheets
 */

// Configuration
const SHEET_NAME = 'CodeOven Leads'; // Name of the sheet tab
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your actual spreadsheet ID

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          success: false, 
          message: 'Missing required fields' 
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Save to Google Sheets
    const result = saveToSheet(data);
    
    if (result.success) {
      // Optional: Send email notification to yourself
      sendNotificationEmail(data);
      
      return ContentService
        .createTextOutput(JSON.stringify({ 
          success: true, 
          message: 'Form submitted successfully' 
        }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        });
    } else {
      throw new Error('Failed to save to sheet');
    }
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Internal server error' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle OPTIONS requests for CORS preflight
 */
function doOptions() {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

/**
 * Save form data to Google Sheets
 */
function saveToSheet(data) {
  try {
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp', 
        'Name', 
        'Email', 
        'Phone', 
        'Message', 
        'Source', 
        'Status'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
    }
    
    // Prepare the row data
    const rowData = [
      new Date(data.timestamp || new Date()), // Timestamp
      data.name || '',                        // Name
      data.email || '',                       // Email
      data.phone || '',                       // Phone
      data.message || '',                     // Message
      data.source || 'Website',               // Source
      'New'                                   // Status
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 7);
    
    return { success: true };
    
  } catch (error) {
    console.error('Error saving to sheet:', error);
    return { success: false, error: error.toString() };
  }
}

/**
 * Send email notification when a new lead is received
 * Optional: Remove this function if you don't want email notifications
 */
function sendNotificationEmail(data) {
  try {
    const emailAddress = 'codeoven7@gmail.com'; // Replace with your email
    const subject = 'New Lead from CodeOven Website';
    const body = `
New lead received from CodeOven website:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}

Submitted on: ${new Date(data.timestamp).toLocaleString()}

--
This is an automated message from CodeOven Contact Form.
    `;
    
    MailApp.sendEmail(emailAddress, subject, body);
    
  } catch (error) {
    console.error('Error sending notification email:', error);
    // Don't throw error here - email failure shouldn't stop form submission
  }
}

/**
 * Test function - you can run this to test your setup
 */
function testFormSubmission() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    message: 'This is a test message from Google Apps Script',
    timestamp: new Date().toISOString(),
    source: 'Test'
  };
  
  const result = saveToSheet(testData);
  console.log('Test result:', result);
}