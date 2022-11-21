import React from 'react';
import styled from "styled-components/native";
import { View, Text, Image } from 'react-native';

export default function Movies(props,navigation) {
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
  return (
      <MovieList>
          {props.movies.map(movie => {
              return (
                <About onPress={() => navigation.navigate('User')}>
                  <Movie key={movie.id}>
                      <MoviePoster source={{uri : imagePath + movie.poster_path}} />
                      <MovieTitle>{movie.title}</MovieTitle>
                  </Movie>
                </About>
              )
          })}
      </MovieList>
  )
}

const MovieList = styled.View`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const Movie = styled.View`
    width: 100%;
    height: 300px;
`;

const MoviePoster = styled.Image`
    width: 100%;
    height: 85%;
`;

const MovieTitle = styled.Text`
    text-align: center;
    color: #fff;
    padding: 5px;
`;

const About = styled.TouchableOpacity`
    width: 40%;
    height: 300px;
`;