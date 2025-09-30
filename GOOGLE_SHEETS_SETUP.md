# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your CodeOven contact form.

## Overview
When users submit the contact form, their information will automatically be saved to a Google Sheet for lead tracking.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Create" → "Blank spreadsheet"
3. Rename it to "CodeOven Leads" (or any name you prefer)
4. **Copy the Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```
   The ID is the long string between `/d/` and `/edit`

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code in `Code.gs`
4. Copy and paste the entire content from `google-apps-script.js` (included in this repo)
5. **Important**: Update these values in the script:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_ACTUAL_SPREADSHEET_ID_HERE';
   const emailAddress = 'your-email@example.com'; // For notifications
   ```

## Step 3: Deploy as Web App

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Click the gear icon ⚙️ next to "Type" and select "Web app"
3. Configure the deployment:
   - **Description**: "CodeOven Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Configure Your Website

1. Create a `.env` file in your project root:
   ```bash
   # In your project directory
   copy .env.example .env
   ```

2. Edit the `.env` file and add your Web App URL:
   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
   ```

## Step 5: Test the Integration

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Fill out and submit the contact form
3. Check your Google Sheet - you should see a new row with the form data
4. Check your email for a notification (if configured)

## Step 6: Grant Permissions

The first time the script runs, Google will ask for permissions:

1. Click "Review Permissions"
2. Choose your Google account
3. Click "Advanced" → "Go to [Project Name] (unsafe)"
4. Click "Allow"

This is normal and safe - you're granting permission to your own script.

## Troubleshooting

### Form not submitting?
- Check the browser console for errors
- Verify the Web App URL in your `.env` file
- Make sure the Google Apps Script is deployed as a web app

### No data in Google Sheets?
- Check if the spreadsheet ID is correct
- Run the `testFormSubmission()` function in Google Apps Script
- Check the Apps Script execution logs

### Permissions issues?
- Make sure the script is set to execute as "Me"
- Verify "Anyone" has access to the web app
- Re-authorize permissions if needed

## What You'll Get

Your Google Sheet will have these columns:
- **Timestamp**: When the form was submitted
- **Name**: User's name
- **Email**: User's email address  
- **Phone**: User's phone number
- **Message**: User's message
- **Source**: Where the lead came from (CodeOven Website)
- **Status**: Lead status (starts as "New")

## Optional Enhancements

### Email Notifications
- The script can send you an email when new leads arrive
- Update the email address in the `sendNotificationEmail()` function

### Lead Status Tracking
- Use the "Status" column to track lead progress
- Options: New, Contacted, Qualified, Converted, etc.

### Data Validation
- The script validates required fields
- You can add more validation rules as needed

## Security Notes

- The Web App URL should be kept private (don't share it publicly)
- The script only accepts POST requests with valid JSON data
- Form data is validated before being saved to sheets

## Support

If you encounter any issues:
1. Check the Google Apps Script logs
2. Test with the `testFormSubmission()` function
3. Verify all URLs and IDs are correct
4. Make sure permissions are granted

---

**Next Steps**: After setup is complete, deploy your website and start collecting leads!