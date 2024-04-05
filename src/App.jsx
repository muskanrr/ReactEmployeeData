import { useState } from 'react'
import Title from './component/title.jsx'
import MediaCard from './component/employeecard.jsx'
import Container from '@mui/material/Container';
import data from "./data/data.js/";

import './App.css'


function App() {

  return (
    <Container fixed>
    
    <MediaCard/>
    <MediaCard/>
    <MediaCard/>
    <MediaCard/>

    </Container>
    
  )
}

export default App
