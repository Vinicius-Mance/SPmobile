import React, {useEffect, useState} from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import { APIkey } from '../config/key'
import NavBar from '../components/NavBar'
 
const HomeView = styled.ScrollView`
    background: #000;
    padding: 5% 1%;
`;

const PageTitle = styled.Text`
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin: 5% 0;
`;

const Container = styled.View`
    flex: 1;
`;
const MovieList = styled.View`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const Movie = styled.View`
    width: 40%;
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
    width: 100%;
    height: 300px;
`;

export default function Home({navigation}) {

    const imagePath = 'https://image.tmdb.org/t/p/w500/'
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
            })
    }, [])

  return (
    <Container>
        <HomeView>
            <PageTitle>Filmes em destaque</PageTitle>
              <MovieList>
                  {movies.map(movie => {
                      return (
                        <Movie key={movie.id}>
                          <About onPress={() => navigation.navigate('Info',
                          {itemId: movie.id},)}>
                                <MoviePoster source={{ uri: imagePath + movie.poster_path }} />
                                <MovieTitle>{movie.title}</MovieTitle>
                          </About>
                        </Movie>
                      )
                  })}
              </MovieList>
        </HomeView>
        <NavBar/>
    </Container>
  )
}
