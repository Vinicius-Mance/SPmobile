import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

const SPLogo = require('../assets/logo.png')

export default function NavBar({navigation}) {
    const nav = useNavigation()  
  return (
      <Navbar>
          <Logo source={SPLogo}></Logo>
          <Option onPress={() => nav.navigate('Home')}>
            Destaques
          </Option>
          <Option onPress={() => nav.navigate('User')}>
            Minha Conta
          </Option>
      </Navbar>
  )
}


const Logo = styled.Image`
    width: 65px;
    height: 65px;
    margin: 5px 10px;
`;

const Navbar = styled.View`
    width: 100%;
    height: 70px;
    background: #000;
    z-index: 999;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
`;

const Option = styled.Text`
    color: #fff;
    height: auto;
`;