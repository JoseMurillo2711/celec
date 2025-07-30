import './App.css'

import Grid from '@mui/material/Grid2' 
import HydrologyTable from './components/HydrologyTable'
import Student from './components/Student'
import { useEffect, useState } from 'react'

// PENDIENTE: Cree la interfaz
import DataHour from './interface/DataHour'

function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json"
  
  const [data, setData] = useState<DataHour[]>([])


   useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json: DataHour[]) => {
        setData(json)
      })
      .catch((err) => {
        console.error('Error cargando datos de hidrología:', err)
      })
  }, [])

  


  return (
    <Grid container spacing={5}>

        <Grid size={{ xs: 12 }}>

          <Student
          apellidos="Murillo Torres"
          nombres="José Ricardo"
          paralelo="1"
        />

        </Grid>
        
        {/* HydrologyTable */}
        <Grid size={{ xs: 12 }}>

           <HydrologyTable data={data}/>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
