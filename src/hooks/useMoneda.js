import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    // State de nuestro custom hook
    const [state, setState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
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