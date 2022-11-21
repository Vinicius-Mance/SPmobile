import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import NavBar from '../components/NavBar'
import { useForm, Controller } from 'react-hook-form'
import { api } from '../service/axios'

const SPLogo = require('../assets/logo.png')

export default function User({navigation}) {

    const {control, handleSubmit, formState: {errors} } = useForm({})

    async function handleSignIn(formData){
       
        try {
            const { data } = await api.post("auth/login", formData);
            console.log(data)
            navigation.navigate('Home')

        } catch (error) {
            console.log(error)
            alert("Erro ao fazer login")
        }
 
    }

    
    return (
        <Container>
            <PageTitle>Minha conta</PageTitle>
            <UserView>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputField
                            placeholder='pessoa@fiap.com'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputField
                            placeholder='*******'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            secureTextEntry={true}
                        />)}
                />

                <Enviar onPress={handleSubmit(handleSignIn)}>Enviar</Enviar>
            </UserView>
            <NavBar/>
        </Container>
    )
}

const InputField = styled.TextInput`
    color: #000;
    background-color: #fff;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    width: 80%;
    margin: 20px auto;
`;

const UserView = styled.ScrollView`
    width: 100%;
    height: 100%;
`;

const PageTitle = styled.Text`
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin: 5% 0;
`;

const Container = styled.View`
    background: #000;
    flex: 1;
`;

const Enviar = styled.Text`
    color: #000;
    background-color: #BD2A2E;
    font-size: 30px;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    width: 80%;
    margin: 10px auto;
`;