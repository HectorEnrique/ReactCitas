import { useEffect } from 'react';
import { Paciente } from './Paciente';

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0) {
      console.log('Se agrego un nuevo paciente');
    }
  }, [pacientes]);
  
  return (
		<div className="h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2>Listado de Pacientes</h2>
          <p className="text-lg my-7 text-center">
            Administra tus{" "}
            <span className="text-indigo-700 font-bold ">Pacientes y Citas</span>
          </p>
          {
            pacientes.map( paciente => (
              <Paciente
                key = { paciente.id }
                paciente = { paciente }
                setPaciente= { setPaciente }
                eliminarPaciente = { eliminarPaciente }
              />
            ))
          }
        </>
      ) : (
        <>
          <h2>No hay Pacientes</h2>
          <p className="text-lg my-7 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-700 font-bold">Apareceran en este lugar 😀</span>
          </p>
        </>
      )}
		</div>
	);
};

export { ListadoPacientes };
