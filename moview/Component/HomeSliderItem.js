import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';  

class HomeSliderItem extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.movie_Title_Container}> 
          <Text style={styles.movie_Title}>{this.props.movie_Title}</Text>
        </View>
        <View style={styles.backdrop_path_Container}>
          <Image style={styles.backdrop_Image} source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.backdrop_path}`}}></Image>
        </View>
      </View>
    );
  }
}

export default HomeSliderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movie_Title_Container:{
    flex:0.8,
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  movie_Title: {
    fontSize: 15,
  },
  backdrop_path_Container:{
    flex: 3.2,
    width:'80%',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  backdrop_Image: {
    width:'90%',
    height: '85%',
    borderRadius: 25,
    },
});