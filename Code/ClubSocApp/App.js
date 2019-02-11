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
          <Text style = {styles.mint}>DCU C&S</Text>
          <View style={styles.butt}>
            <Button
             onPress={this._onPressButton}
              title="Press Me"
              color="#aad0d1"
            /> 
            <Button
             onPress={this._onPressButton}
              title="Press Me"
              color="#aad0d1"
            /> 
          </View>
        </View>
        <View style={{flex: 2, backgroundColor: '#696969'}} />
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
  butt: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'left',
    textAlignVertical: 'bottom',
    flex: 1,
    color: '#fff',



  }




});
