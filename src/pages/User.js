import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import Movies from '../components/Movies'
import { APIkey } from '../config/key'

import NavBar from '../components/NavBar'

const SPLogo = require('../assets/logo.png')

const UserView = styled.ScrollView`
    background: #000;
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

export default function User() {

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
            <UserView>
                <PageTitle>User</PageTitle>
            </UserView>
            <NavBar />
        </Container>
    )
}
