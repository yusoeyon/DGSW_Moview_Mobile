import React from 'react';
import { StyleSheet, Text, View } from 'react-native';  
import Header from '../Component/Header';

class Event extends React.Component{
  render(){
    return (
        <View style={styles.container}>
          <Text style={{top:'50%'}}>Event</Text>
        </View>
    );
  }
}

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});