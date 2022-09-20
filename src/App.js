// 01 - Crie um projeto em React 
// 02 - Crie uma pasta components 
// 03 - Todos os components do projeto deve estar dentro da pasta components 
// 04- Crie um style.js para cada component 
// 05 - Consuma o link da API com useEffect - http://hp-api.herokuapp.com/api/characters.


import React from 'react'
import Home from './Components/Home'
import { GlobalStyle } from './Global/GlobalStyle'

export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Home/>
    </>
  )
}