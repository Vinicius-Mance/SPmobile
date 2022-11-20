import React from 'react';
import styled from "styled-components/native";
import { View, Text } from 'react-native';

export default function Movies(props) {
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
  return (
      <MovieList>
          {props.movies.map(movie => {
              return (
                  <Movie key={movie.id}>
                      <Text>{movie.title}</Text>
                  </Movie>
              )
          })}
      </MovieList>
  )
}

const MovieList = styled.View`
    width: 100%;
    background-color: red;
`;

const Movie = styled.View`

`;