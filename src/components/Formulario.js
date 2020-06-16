import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper';

const Formulario = ({ setResumen, setSpinner }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    //Leer datos

    const obtenerInformacion = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const cotizarSeguro = e => {
        e.preventDefault();

        if (datos.marca.trim() === '' || datos.year.trim() === '' || datos.plan.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        let resultado = 2000;

        //Diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);
        console.log(diferencia);
        //3% por cada año

        resultado -= ((diferencia * 3) * resultado) / 100;

        //americano 15%        
        //asiatico 5%
        //europeo 30%
        resultado = resultado * calcularMarca(datos.marca);

        resultado = parseFloat(resultado * obtenerPlan(datos.plan)).toFixed(2);
        console.log(resultado);
        setSpinner(true);

        setTimeout(() => {
            setSpinner(false);
            setResumen({
                cotizacion: resultado,
                datos
            })
        }, 3000);
    }

    return (
        <form
            onSubmit={cotizarSeguro}
        >
            {error && <Error>Todos los campos son obligatorios</Error>}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={datos.marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={datos.year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label
                    name="plan"
                    value={datos.plan}
                >Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={datos.plan === "basico"}
                    onChange={obtenerInformacion}
                /> Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={datos.plan === "completo"}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>

            <Button type="submit">Cotizar</Button>
        </form>
    );
}

export default Formulario;

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%auto;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`

const InputRadio = styled.input`
    margin: 0 1rem;
`

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;
    }
`
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`