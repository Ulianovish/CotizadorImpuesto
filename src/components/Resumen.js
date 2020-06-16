import React from 'react';
import styled from '@emotion/styled'
import { primeraMayuscula } from '../helper';
const Resumen = ({ datos }) => {
    if (datos.marca === '' || datos.year === '' || datos.plan === '') return null;
    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primeraMayuscula(datos.marca)}</li>
                <li>Plan: {primeraMayuscula(datos.plan)}</li>
                <li>Year: {datos.year}</li>
            </ul>
        </ContenedorResumen>
    );
}

export default Resumen;

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`