import React from 'react';
import { StyleSheet, Text, View } from 'react-native';  
import Slick from 'react-native-slick';
import Header from '../Component/Header';
import defaultAPI from '../lib/api/defaultAPI';
import {TMDB_API_KEY} from '../config/config.json';
import HomeSliderItem from '../Component/HomeSliderItem';

class Home extends React.Component{
  state={
    results: null,
  }
  componentDidMount(){

    defaultAPI.get(`movie/now_playing?api_key=${TMDB_API_KEY}&language=ko&page=1&region=KR`)
    .then((response) => {
      this.setState({
        results : response.data.results 
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render(){
    return (
        <View style={styles.container}>
          <View style={styles.HeaderContainer}><Header navigation = {this.props.navigation}/></View>
          <View style={styles.SliderContainer}>
            {
              this.state.results === null ? <Text>Loading</Text> : 
              <>
                <Slick style={styles.wrapper} showsButtons={true} activeDotColor='#4b4b4b' autoplay={true} autoplayTimeout='2'>
                {
                  this.state.results.slice(0,5).map((moviewLists, index) => (
                    <HomeSliderItem
                      key = {index}
                      id = {moviewLists.id}
                      backdrop_path = {moviewLists.backdrop_path}
                      movie_Title = {moviewLists.title}
                    />
                  ))
                }
                </Slick>
              </>
            }
          </View>
          <View style={{flex:3.5, flexDirection:'row'}}>
          <View style={styles.EventContainer}>
            <View>
              <Text style={{textAlign:'right', right:'10%'}}>Event</Text>
            </View>
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{ borderRadius: 20, borderColor: '#d3d3d3', width: '95%', height:'80%', borderWidth:1}}>
            </View>
            </View>
          </View>
          <View style={styles.ReviewContainer}>
            <Text style={{alignItems:'flex-end', marginBottom: 10, marginTop: 10}}>Review</Text>
            <View style={{ borderRadius: 20, borderColor: '#d3d3d3', width: '95%', height:'80%', justifyContent:'center', alignItems:'center', borderWidth:1}}>
            </View>
          </View>
          </View>
        </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    HeaderContainer:{
      flex:1.2,
    }, 
    SliderContainer: {
      flex: 2.8,
    },
    EventContainer:{
      flex: 2,
    },
    ReviewContainer:{
      flex: 2,
      justifyContent:'center',
      alignItems:'center'
    },
  });