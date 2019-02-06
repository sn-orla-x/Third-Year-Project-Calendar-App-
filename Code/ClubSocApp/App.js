import React from 'react';
import { StyleSheet, Text, AppRegistry, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      //<View style={styles.container}>
        //<View style = {{flex: 1, backgroundColor: '#aaf0d1'}} />
      <View style={{flex:1}}>
        <View style={{height: 75, backgroundColor: '#aad0d1'}}>
          <Text style={styles.mint}>"Hi there!"</Text>
        </View>
        <View style={{flex: 2, backgroundColor: '#696969'}} />
        <View style={{flex: 3, backgroundColor: '#696969'}} />
      </View>
        //<Text style={styles.mint}>Open up App.js to start working on your app!</Text>
      //</View>
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

    color: '#696969',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    textAlignVertical: 'center'
  },

});
