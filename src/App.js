import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';



function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [spinner, setSpinner] = useState(false);

  return (
    <Contenedor>
      <Header
        titulo="Contizador de Autos"
      />
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setSpinner={setSpinner}
        />
        {spinner
          ? <Spinner />
          : (<>
            <Resumen
              datos={resumen.datos}
            />
            <Resultado
              cotizacion={resumen.cotizacion}
            />
          </>)
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

