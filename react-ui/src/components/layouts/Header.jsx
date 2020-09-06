import React from 'react';

import { Link } from 'react-router-dom';
 

import './Header.css';

export default (props) => {

    return (
        <div className="Header">
            <h2>SQL Query Generator</h2>
            
            <div className="HeaderMenu">
                <div className="HeaderCard DB">
                    <div className="CardTitle">
                        Database operations
                    </div>
                    <div className="CardItens">
                        <Link className="CardItem" to="/db/create">Create</Link>
                        <Link className="CardItem" to="/db/drop">Drop</Link>
                    </div>
                </div>

                <div className="HeaderCard TB">
                <div className="CardTitle">
                        Table operations
                    </div>
                    <div className="CardItens">
                        
                        <Link className="CardItem" to="/tb/create">Create</Link>
                        <Link className="CardItem" to="/tb/drop">Drop</Link>
                        <Link className="CardItem" to="/tb/insert">Insert</Link>
                        <Link className="CardItem" to="/tb/update">Update</Link>
                        <Link className="CardItem" to="/tb/alter">Alter</Link>
                    </div>
                </div>
                
                <div className="HeaderCard SL">
                <div className="CardTitle">
                        Select operations
                    </div>
                    <div className="CardItens">
                        <Link className="CardItem" to="/sl/simple">Simple</Link>
                        <Link className="CardItem" to="/sl/props">With props</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}