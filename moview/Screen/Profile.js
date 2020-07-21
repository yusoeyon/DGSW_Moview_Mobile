import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';  
import Header from '../Component/Header';

class Profile extends React.Component{
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.LogoImageContainer}><Image style={{ width: 180, height: 80}} source = { require('../assets/Images/Logo.png')}/></View>
          <View style={styles.ButtonContainer}>
            <View style={{flexDirection: "row", justifyContent:'center'}} >
              <TouchableOpacity style={styles.SigUp_Button} onPress={()=>this.props.navigation.navigate("SignUp")}><Text style={{fontSize: 18}}>Sign Up</Text></TouchableOpacity>
              <TouchableOpacity style={styles.Login_Button} onPress={()=>this.props.navigation.navigate("LogIn")}><Text style={{fontSize: 18}}>Log In</Text></TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  LogoImageContainer:{
    flex:1,
    marginTop: '45%',
  },
  ButtonContainer:{
    flex:4,
  },
  SigUp_Button:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '35%',
    
  },
  Login_Button:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '35%',
  }
});