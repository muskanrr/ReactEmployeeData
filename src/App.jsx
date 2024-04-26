import { useState } from 'react'
import Title from './component/title.jsx'
import MediaCard from './component/employeecard.jsx'
import Container from '@mui/material/Container';
import data from "./data/data.js/";
import Switch from '@mui/material/Switch';

import './App.css'


function App() { 
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [ShowInactive, setShowInactive] = useState(false);

  const filteredData= ShowInactive ? data.filter((employee )=> employee.onLeave ) : data;

  const handleToggle = (event) => {
    setShowInactive(event.target.checked);
    console.log(event.target.checked); 
   }

  console.log(ShowInactive) 
  return (
    <Container maxWidth="lg">

    <Switch {...label} checked={ShowInactive}  onClick={handleToggle}/>
    <MediaCard employee={filteredData}/>
    </Container>
    
  )
}

export default App
