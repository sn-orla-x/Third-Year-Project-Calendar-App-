import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, ScrollView, Button } from 'react-native'
import firebase from 'firebase'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DashboardScreen from './dashboardScreen';
import LoadingScreen from './loadingScreen';
import ClubScreen from './clubScreen';
import SocScreen from './socScreen';

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
   addEvent = (summary, description, startDateTime, endDateTime, location, clubSoc) => {
     // console.log(token)
      var bearer = "Bearer " + global.accessToken;
      var headers = {
         "Content-Type" : "application/json",
         "Access-Control-Origin": "*",
         "Authorization": bearer
      }

      var data = {
  "end": {
    "dateTime": endDateTime,
    "timeZone": "GMT"
  },
  "start": {
    "dateTime": startDateTime,
    "timeZone": "GMT"
  },
  "description": description,
  "summary": summary,
  "location": location
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
    Alert.alert("Event Added!")
   }

   render() {
        const {navigate} = this.props.navigation;
      return (
      <ScrollView style = {styles.container}>
          <View style={{flex:1}}>
            <View style={{height: 75, backgroundColor: '#aad0d1'}}>
            <View style = {styles.buttin}>

            <Button 
            title="Sign out" 
            onPress={() => firebase.auth().signOut()}  
            color = "#696969"
            />
            <Button
            onPress={() => navigate('DashboardScreen')}
            title="DCU C&S"
            color="#696969"
            />

            <Button
             onPress={() => navigate('ClubScreen')}
              title="Clubs"
              color="#696969"
            /> 
            <Button
             onPress={() => navigate('SocScreen')}
              title="Socs"
              color="#696969"
            /> 

            </View>
          </View>
        </View>
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
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
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