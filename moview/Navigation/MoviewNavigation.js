import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Icon} from "native-base";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screen/Home';
import SearchScreen from '../Screen/Search';
import ReviewScreen from '../Screen/Review';
import EventScreen from '../Screen/Event';
import ProfileScreen from '../Screen/Profile';

const Tab = createMaterialTopTabNavigator();


class MoviewNavigation extends React.Component{
  render(){
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarPosition='bottom' tabBarOptions={{activeTintColor:'white',  labelStyle: { fontSize: 11, }, tabStyle: { height: 80 }, style: { backgroundColor: 'black', },}}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Review" component={ReviewScreen} />
                <Tab.Screen name="Event" component={EventScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

export default MoviewNavigation;