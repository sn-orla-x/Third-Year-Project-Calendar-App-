const fs = require('fs');
const readline = require('readline');
const readlines = require('readline-sync');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.event'];
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

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

function listEvents(auth) {
  var calendar = google.calendar('v3');
  var socCalendarID = getSociety();
  var event = makeEvent();
  addEvents(auth, calendar, event,socCalendarID); // Add events
  //removeEvents(auth, calendar); // Remove events
}


// Refer to the Node.js quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/node
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.


function makeEvent() {


  var eventName = readlines.question('What is your event?: ');
  var eventSummary = readlines.question('Provide a breif summary of your event:');
  var location = readlines.question('What room does your event take place in?: ')
  var eventDate = readlines.question('What date does your event take place on?: ');
  var startTime = readlines.question('What time does your event start at?: ');
  var endTime = readlines.question('What time does your event end at?: ');


  console.log(eventName +" " + eventSummary +" "+ location+" "+ eventDate +" "+ startTime +" "+ endTime);
  var eventStart = formatTimes(eventDate, startTime);
  var eventEnd = formatTimes(eventDate, endTime);
  console.log(eventStart);
  console.log(eventEnd);



  var event = {
    'summary': eventName,
    'location': location,
    'description': eventSummary,
    'start': {
      'dateTime': eventStart,
      'timeZone': 'GMT',
    },
    'end': {
      'dateTime': eventEnd,
      'timeZone': 'GMT',
    },
    'reminders': {
      'useDefault': false,
      'overrides': [
      {'method': 'popup', 'minutes': 10}]
    },
  };
  return event;
  
  };

function getSociety(){
  var calID = {
    FotoSoc: "4afhe3v6jqi6f9ohj658d5s8r4@group.calendar.google.com",
    Tennis: "5ieg9f866hkuq7t2jvanst1808@group.calendar.google.com",
  };
  var society = readlines.question("What society are you adding an event to?: ");
  console.log(calID[society]);
  return calID[society]
}

function addEvents(auth, calendar, event, socCalendarID){
  calendar.events.insert({
    auth: auth,
    calendarId: socCalendarID,
    resource: event,
  }, function(err, res) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }
    console.log(res);
  });
}

function removeEvents(auth, calendar){
  calendar.events.delete({
    auth: auth,
    calendarId: 'primary',
    eventId: "#####",
  }, function(err) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }
    console.log("Removed");
  });
}
function formatTimes(date, time) {
  return date+'T'+time+':00';
};

module.exports.makeEvent = makeEvent;
module.exports.getSociety = getSociety;
module.exports.formatTimes = formatTimes;