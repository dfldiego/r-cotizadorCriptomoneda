import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda;

/**
 * Un HOOK es una funcion.
 * state -->tiene su propio state.
 * Seleccionar --> Tiene su propio cuerpo
 * setState --> una funcion que modifica el state
 * const [state, setState] = useState(''); ---> muestra el state, funcion que modifica el state
 *
 * const Seleccionar = () => () ----> funcion que muestra en pantalla
 */