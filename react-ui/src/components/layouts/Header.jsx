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
                        <a className="CardItem" href="#bdCreate">Create</a>
                        <a className="CardItem" href="#bdDrop">Drop</a>
                    </div>
                </div>
                <div className="HeaderCard TB">
                <div className="CardTitle">
                        Table operations
                    </div>
                    <div className="CardItens">
                        <a className="CardItem" href="#bdCreate">Create</a>
                        <a className="CardItem" href="#bdDrop">Drop</a>
                        <a className="CardItem" href="#bdDrop">Insert</a>
                        <a className="CardItem" href="#bdDrop">Update</a>
                        <a className="CardItem" href="#bdDrop">Alter</a>
                    </div>
                </div>
                <div className="HeaderCard SL">
                <div className="CardTitle">
                        Select operations
                    </div>
                    <div className="CardItens">
                        <a className="CardItem" href="#bdCreate">Simple</a>
                        <a className="CardItem" href="#bdDrop">With props</a>
                    </div>
                </div>
            </div>
        </div>
    )
}