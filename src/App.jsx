import { useState, useEffect } from 'react';
import { Header, Formulario, ListadoPacientes } from "./components/";

function App() {

  const APP = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(APP);
  const [paciente, setPaciente] = useState({});

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [ pacientes ])

  const eliminarPaciente = id => {
    console.log('Eliminando paciente', id);
    const PACIENTES = pacientes.filter( pacienteDelet => pacienteDelet.id !== id);
    setPacientes(PACIENTES)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes 
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente = { eliminarPaciente }
          />
      </div>

    </div>
  )
}

export default App;
