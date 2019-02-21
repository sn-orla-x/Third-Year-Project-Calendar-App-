const fs = require('fs');
const readline = require('readline');
const readlines = require('readline-sync')
const {google} = require('googleapis');

//most of this code was taken from the google calendar api quickstart for nodejs, then modified
//this can be found here: https://developers.google.com/calendar/quickstart/nodejs


// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Calendar API.
  authorize(JSON.parse(content), listEvents);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function listEvents(auth) {
  deleteEvent(); // deleteEvent
}

function deleteEvent(auth) {
    const calendar = google.calendar({version: 'v3', auth})
    var calendarID = getSociety();
    var eventID = readlines.question("What event do you want to delete?: ");

    calendar.events.delete ({
            auth: auth,
            calendarId: calendarID,
            eventId: eventID,
        }, function(err, res) {
            if(err){
                console.log('Error: ' + err);
                return;
            }
            console.log(res);
        });
    }



function getSociety(){
  var calID = {
    FotoSoc: "4afhe3v6jqi6f9ohj658d5s8r4@group.calendar.google.com",
    Tennis: "5ieg9f866hkuq7t2jvanst1808@group.calendar.google.com",
  };
  var society = readlines.question("What society are you deleting an event from?: ");
  console.log(calID[society]);
  return calID[society]
}

