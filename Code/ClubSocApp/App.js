import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Button, Alert } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('tippy tap tip')
  }
  render() {
    return (
      //<View style={styles.container}>
        //<View style = {{flex: 1, backgroundColor: '#aaf0d1'}} />
      <View style={{flex:1}}>
        <View style={{height: 75, backgroundColor: '#aad0d1'}}>
          <Text style = {styles.mint}></Text>
            <View style = {styles.buttin}>
            <Button
            onPress={this._onPressButton}
            title="DCU C&S"
            color="#fff"
            />
            <View style={styles.butt}>
            <Button
             onPress={this._onPressButton}
              title="Clubs"
              color="#fff"
            /> 
            <Button
             onPress={this._onPressButton}
              title="Socs"
              color="#fff"
            /> 
            </View>
          </View>
        </View>
        <View style={{flex: 2, backgroundColor: '#696969'}} />
       <View style ={styles.addy}>
            <Button
             onPress={this._onPressButton}
              title="Add an event"
              color="#000"
            /> 
              </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mint: {
    flex: 1,
    color: '#fff',
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
    flex: 1,
    //margin: 0,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    color: '#000',
  }
});
