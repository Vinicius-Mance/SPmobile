import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { APIkey } from '../config/key'

const InfoView = styled.View`
    width: 80%;
    height: 100%;
    margin: 10% auto;
`;

const MoviePoster = styled.Image`
    width: 100%;
    height: 60%;
`;

const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background: #000;
`;

const TextInfo = styled.Text`
    color: #fff;
`;

const Title = styled.Text`
    font-size: 20px;
    color: #fff;
    text-align: center;
    margin: 10px;
`;

const Date = styled.Text`
    font-size: 15px;
    color: #fff;
    text-align: center;
    margin: 10px;
`;

const Voltar = styled.Text`
    font-size: 30px;
    background-color: #f00;
    color: #000;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
`;

export default function Info({navigation}) {

    const route = useRoute();
    const id = route.params.itemId

    const [movie, setMovie] = useState([])

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                const { title, poster_path, release_date, overview } = data
                const movie = {
                    id,
                    title,
                    image: `${imagePath}${poster_path}`,
                    sinopse: overview,
                    releaseDate: release_date
                }
                setMovie(movie)
            })
    }, [id])

    return (
        <Container>
            <InfoView>
                <MoviePoster source={{uri : movie.image}}/>
                <Title>{movie.title}</Title>
                <TextInfo>Sinopse: {movie.sinopse}</TextInfo>
                <Date>Release date: {movie.releaseDate}</Date>
                <Voltar onPress={() => navigation.goBack()}>
                    Voltar
                </Voltar>
            </InfoView>
        </Container>
    )
}
