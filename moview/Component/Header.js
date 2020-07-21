import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class Header extends React.Component{
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.LogoContainer}>
            <View style={styles.LogoImage} >
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}><Image style={{ width: "100%", height: "100%"}} source = { require('../assets/Images/Logo.png')}></Image></TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
    container: {   
      flex:1,       
      width:'100%',
      height:'13%',
      justifyContent:'flex-end',
      alignItems:'center',
    },
    LogoContainer: {
      width: '80%',
      height: '60%',
      alignItems:'center',
      justifyContent:'flex-end',
      borderBottomColor: '#4b4b4b',
      borderBottomWidth: 1.5,
    },
    LogoImage:{
      width: '45%',
      height: '60%',
      marginBottom: 10
      
    },
  });