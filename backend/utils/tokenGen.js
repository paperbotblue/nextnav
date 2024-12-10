const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const path = require('path');

// Path to the credentials file
const CREDENTIALS = path.join(__dirname, './../secrets/credentials.json');

// Combined scopes for Sheets, Gmail, and Drive APIs
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets', // Access Google Sheets
  'https://www.googleapis.com/auth/gmail.compose', // Send emails via Gmail
  'https://www.googleapis.com/auth/drive.file', // Access and manage files in Drive
];

// Path to store the token
const TOKEN_PATH = path.join(__dirname, './../secrets/token.json');

// Read the credentials file
fs.readFile(CREDENTIALS, (err, content) => {
  if (err) {
    console.error('Error loading client secret file:', err);
    return;
  }
  authorize(JSON.parse(content)); // Call the authorize function
});

// Function to authorize the client
function authorize(credentials) {
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);


      return getAccessToken(oAuth2Client); // Generate a new token if not found

}

// Function to generate and store a new access token
function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES, // Use all combined scopes
  });
  console.log('Authorize this app by visiting this URL:', authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        console.error('Error retrieving access token', err);
        return;
      }
      oAuth2Client.setCredentials(token);

      // Save the token for future use
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) {
          console.error('Error saving token:', err);
          return;
        }
        console.log('Token stored to', TOKEN_PATH);
      });
    });
  });
}
