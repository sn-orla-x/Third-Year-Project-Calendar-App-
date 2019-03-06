import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import firebase from 'firebase'

class Inputs extends Component {
   state = {
      summary: '',
      description: '',
      startDateTime: '',
      endDateTime: '',
      location: '',
      clubSoc: ''
   }



   handleSummary = (text) => {
      this.setState({ summary: text })
   }
   handleDescription = (text) => {
      this.setState({ description: text })
   }
   handleStartDateTime = (text) => {
      text = text.split(' ');
      text = `${text[0]}T${text[1]}:00.00`
      this.setState({ startDateTime: text })
   }
   handleEndDateTime = (text) => {
      text = text.split(' ');
      text = `${text[0]}T${text[1]}:00.00`
      this.setState({ endDateTime: text })
   }
   handleLocation = (text) => {
      this.setState({ location: text })
   }
   handleClubSoc = (text) => {
      var calID = {
       FotoSoc: "4afhe3v6jqi6f9ohj658d5s8r4@group.calendar.google.com",
       Tennis: "5ieg9f866hkuq7t2jvanst1808@group.calendar.google.com",
     };

      this.setState({ clubSoc: calID[text] })
   }
   addEvent = (summary, description, startDateTime, endDteTime, location, clubSoc) => {
     // console.log(token)
      var bearer = "Bearer " + "ya29.GlvEBmrtjhPsiLxk9OfIT9d5dFpAzxd09aDjaaIwzjY4SAt4Z-lmIDdk0gFLNqjh-tHkBKmnRpxy_svJUZETJgrY10KcXhiqiYVY7aynhvUQ9UPna6L_aJgBCFNz";
      var headers = {
         "Content-Type" : "application/json",
         "Access-Control-Origin": "*",
         "Authorization": bearer
      }

      var data = {
  "end": {
    "dateTime": "2019-03-06T17:00:00.0",
    "timeZone": "GMT"
  },
  "start": {
    "dateTime": "2019-03-06T14:00:00.00",
    "timeZone": "GMT"
  },
  "description": "fun times",
  "summary": "Coffee Afternoon",
  "location": "GLA.CA124"
}
   var url = `https://www.googleapis.com/calendar/v3/calendars/${clubSoc}/events`

      fetch(url, {
         method: "POST",
         headers: headers,
         body: JSON.stringify(data)
      })
      .then(function(response){
         return response.json()
      })
      .then(function(data){
         console.log(data)
      })
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Event Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleSummary}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Event Description"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDescription}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Start Time Eg YYYY-MM-DD 14:00"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleStartDateTime}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "End Time Eg YYYY-MM-DD 16:00"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEndDateTime}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Location"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleLocation}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Club or Society"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleClubSoc}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.addEvent(this.state.summary, this.state.description, this.state.startDateTime, this.state.endDateTime, this.state.location, this.state.clubSoc)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})