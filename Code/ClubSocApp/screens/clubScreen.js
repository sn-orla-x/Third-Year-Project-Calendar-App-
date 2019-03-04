import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, Button,  AppRegistry, Alert  } from 'react-native';
import firebase from 'firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DashboardScreen from './dashboardScreen';
import LoadingScreen from './loadingScreen';
import ClubScreen from './clubScreen';
import SocScreen from './socScreen';

export default class App extends Component {

  state = {
    loading: true,
    error: false,
    posts: [],
    events: [],
  }

  componentWillMount = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/5ieg9f866hkuq7t2jvanst1808@group.calendar.google.com/events?&key=AIzaSyCWWE4pVnW42iCQGSW0ElYEeF1IuVD5OpM',
        {'method': 'GET'})
      const posts = await response.json()
            console.log(posts.items[1].summary, posts.items[1].description)
      const events = posts.items;
      console.log(events)

      this.setState({loading: false, posts, events})
    } catch (e) {
      this.setState({loading: false, error: true})
      console.log(e)
    }
  }
  renderPost = ({start, location, summary, description}, i) => {
    return (
      <View
        key={location}
        style={styles.post}
      >
        <View style={styles.postNumber}>
          <Text>
            {start.dateTime} in {location}
          </Text>
        </View>
        <View style={styles.postContent}>
          <Text>
            {summary}
          </Text>
          <Text style={styles.postBody}>
            {description}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const {posts, loading, error, events} = this.state;
    const {navigate} = this.props.navigation;
    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load posts!
          </Text>
        </View>
      )
    }
    return (
    <ScrollView style = {styles.container}>
      <View style={{flex:1}}>
        <View style={{height: 75, backgroundColor: '#aad0d1'}}>
            <View style = {styles.buttin}>

            <Button 
            title="Sign out" 
            onPress={() => firebase.auth().signOut()}  
            color = "#fff"
            />
            <Button
            onPress={() => navigate('DashboardScreen')}
            title="DCU C&S"
            color="#fff"
            />
            <View style={styles.butt}>
            <Button
             onPress={() => navigate('ClubScreen')}
              title="Clubs"
              color="#fff"
            /> 
            <Button
             onPress={() => navigate('SocScreen')}
              title="Socs"
              color="#fff"
            /> 
            </View>
            </View>
          </View>
        </View>


        {events.map(this.renderPost)}
      </ScrollView>
    )
  }
  }



const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#fff',
  },
})
