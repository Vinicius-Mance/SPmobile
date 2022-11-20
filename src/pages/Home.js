import React, {useEffect, useState} from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import Movies from '../components/Movies'
import { APIkey } from '../config/key'

import NavBar from '../components/NavBar'

const SPLogo = require ('../assets/logo.png') 
 
const Container = styled.ScrollView`
    background: #000;
`;

const PageTitle = styled.Text`
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin: 5% 0;
`;

export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
            })
    }, [])

  return (
    <Container>
            <PageTitle>Filmes em destaque</PageTitle>
          <Movies movies={movies}></Movies>
          <NavBar/>
    </Container>
  )
}
