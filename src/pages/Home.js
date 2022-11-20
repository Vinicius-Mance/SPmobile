import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import Movies from '../components/Movies'
import { APIkey } from '../config/key'

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
    <View>
        <Text>${APIkey}</Text>
          <Movies movies={movies}></Movies>
    </View>
  )
}
