import React, { useState } from 'react';

import CardForm from '../../layouts/CardForm';

export default (props) => {
    const [dbName, setDbName] = useState('aqui');
    const [result, setResult] = useState('');
    

    const alterDbName = (e) => {
        setDbName(e.target.value);
    };

    function subResult() {
        
        setResult('CREATE DATABASE '+dbName+';');
    };

    return (
        <CardForm title="Database Create" result={result}>
            <input type="text" onChange={alterDbName} value={dbName}/>
            <button onClick={subResult}>Submeta</button>
        </CardForm>
    );
};