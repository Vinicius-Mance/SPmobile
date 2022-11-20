import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'

const SPLogo = require('../assets/logo.png')

const Logo = styled.Image`
    width: 65px;
    height: 65px;
    margin: 5px 10px;
`;

const Navbar = styled.View`
    width: 100%;
    height: 70px;
    background: #f00;
    z-index: 999;
    justify-content: flex-end;
    flex: 1;
`;


export default function NavBar() {
  return (
      <Navbar>
          <Logo source={SPLogo}></Logo>
      </Navbar>
  )
}
