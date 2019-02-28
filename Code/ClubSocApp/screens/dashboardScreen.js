import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AppRegistry, Alert, ScrollView } from 'react-native';
import firebase from 'firebase';
var listClubEvents = require('/backend/listClubEvents');
var listSocietyEvents = require('/backend/listSocietyEvents')


class DashboardScreen extends Component {
  render() {
    let ClubEvent = listClubEvents.listClubEvents();
    let SocietyEvent = listSocietyEvents.listSocietyEvents();
    return (
      <View style={{felx:1}}>
        <View style = {{height: 75, backgroundColor: '#aad0d1'}}>
          <View style = {styles.buttin}>
            <Button
            title="DCU C&S" 
            onPress={this.props.navigation.navigate('DashboardScreen')}
            color="#fff"
            />
            <Button
            title="Socs"
            onPress = {this.props.navigation.navigate('SocScreen')}
            color="#fff"
            />
            <Button
            title="Clubs"
            onPress = {this.props.navigation.navigate('ClubScreen')}
            color ="#fff"
            />
            <Button 
            title="Sign out" 
            onPress={() => firebase.auth().signOut()}
            color = "#fff"
            />
          </View>
        </View>
      </View>
      <View style = {{flex:2}}>
        <ScrollView>
          <Text> 
            Upcoming Club Events: 
           <this.ClubEvent />
          </Text>
          <Text>
            Upcoming Society Events:
            <this.SocietyEvent />
          </Text>
        </ScrollView>
        
      </View>
    );
  }
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
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
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    color: '#fff',
  },
   
  butt: {
    flex: 1,
    //margin: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'left',
    textAlignVertical: 'bottom',
    color: '#fff',
  },
   
   addy: {
    flex: 2,
    backgroundColor: '#696969',   
    //margin: 0,
    //flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: '#000',
  }
});