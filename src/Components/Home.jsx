import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from '../Styles/HomeStyle'

export default function Home(){
  
  let api = 'https://hp-api.herokuapp.com/api/characters'

  const [personagem, setPersonagem] = useState([])

  useEffect(() => {
    axios.get(api).then(response => {
      setPersonagem(response.data.slice(0,25))
    })
  }, [api])

  return(
    <S.Container>
      <h1>Principais personagens do Harry Potter</h1>
      <S.List>{personagem.map(item => (
        <li>{item.name}
        <img src={item.image} alt={item.name}/>
        </li>
      ))}</S.List>
    </S.Container>
  )
}