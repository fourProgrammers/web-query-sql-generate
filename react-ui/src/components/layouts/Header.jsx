import React from 'react';


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
                        <a className="CardItem" href="/db/create">Create</a>
                        <a className="CardItem" href="/db/drop">Drop</a>
                    </div>
                </div>

                <div className="HeaderCard TB">
                <div className="CardTitle">
                        Table operations
                    </div>
                    <div className="CardItens">
                        
                        <a className="CardItem" href="/tb/create">Create</a>
                        <a className="CardItem" href="/tb/drop">Drop</a>
                        <a className="CardItem" href="/tb/insert">Insert</a>
                        <a className="CardItem" href="/tb/update">Update</a>
                        <a className="CardItem" href="/tb/alter">Alter</a>
                    </div>
                </div>
                
                <div className="HeaderCard SL">
                <div className="CardTitle">
                        Select operations
                    </div>
                    <div className="CardItens">
                        <a className="CardItem" href="/sl/simple">Simple</a>
                        <a className="CardItem" href="/sl/props">With props</a>
                    </div>
                </div>
            </div>
        </div>
    )
}