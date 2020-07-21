import React from 'react';
import { StyleSheet, Text, View } from 'react-native';  
import Header from '../Component/Header';

class Review extends React.Component{
  render(){
    return (
        <View style={styles.container}>
          <Text style={{top:'50%'}}>Search</Text>
        </View>
    );
  }
}

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});