import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'

class Inputs extends Component {
   state = {
      eventName: '',
      eventDescription: '',
      eventStartDateTime: '',
      eventEndDateTime: '',
      location: '',
      clubSoc: '',
   }
   handleEventName = (text) => {
      this.setState({eventName: text })
   }
   handleEventDescription = (text) => {
      this.setState({eventDescription: text })
   }
   handleLocation = (text) => {
      this.setState({location: text})
   }
   handleStartDateTime = (text) => {
      text = text.split(' ');
      text = `${text[0]}T${text[1]}:00`;
      this.setState({eventDateTime: text})
   }
   handleEndDateTime = (text) => {
      text = text.split(' ');
      text = `${text[0]}T${text[1]}:00`;
      this.setState
   }
   handleClubSoc = (text) => {
      var calID = {
    FotoSoc: "4afhe3v6jqi6f9ohj658d5s8r4@group.calendar.google.com",
    Tennis: "5ieg9f866hkuq7t2jvanst1808@group.calendar.google.com",

  };
    text = `${calID[text]}`
    this.setState({clubSoc: text})
      
   }
    addEvent(eventName, eventDescription, eventStartDateTime, eventEndDateTime, location, clubSoc,) {
    try{
    const response = fetch(`https://www.googleapis.com/calendar/v3/calendars/${clubSoc}/events?&key=AIzaSyCWWE4pVnW42iCQGSW0ElYEeF1IuVD5OpM`,
      {method: "POST",
       headers:new Headers({
        "accept": "application/json",
        "content-type" : "application/json"}),
       body: JSON.stringify({
         start : {
          "dateTime": eventStartDateTime,
          "timeZone": "etc/GMT"
         },
         "end": {
          "dateTime": eventEndDateTime,
          "timeZone": "etc/GMT"
         },
         "summary": eventName,
         "description": eventDescription,
         "location": location

       })}
      )}
    catch (e) {
    console.log('Request failed', error);
  };
 // const posts = response.json()
  //console.log(posts)
   }
   render() {
      return (

         <ScrollView style = {styles.container}>
          
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Event Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEventName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Event Description"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEventDescription}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Start Time: YYYY-MM-DD 15:00"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleStartDateTime}/>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "End Time: YYYY-MM-DD 17:00"
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
              placeholder = "Club/Society"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleClubSoc}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.addEvent(this.state.eventName , this.state.eventDescription, this.state.eventStartDateTime, this.state.eventEndDateTime, this.state.location, this.state.clubSoc)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </ScrollView>
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
      backgroundColor: '#696969',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
     mint: {
    flex: 1,
    //color: '#fff',
    fontSize: 25,
    //fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    textAlignVertical: 'bottom',
  },
   
  buttin: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    color: '#696969',
  },
})