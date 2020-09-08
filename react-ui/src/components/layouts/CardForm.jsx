import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './CardForm.css'

export default (props) => {

    return (
        <div className="Card">
            <div className="CardTitle">
                ~ { props.title } ~
            </div>
            <div className="CardForm">
                { props.children }
            </div>
            <div className="CardResult">
                <div className="ResultTitle">
                    Sql Code output
                </div>
                <div className="ResultContent">    
                <ArrowForwardIosIcon />{ props.result }
                </div>
            </div>
        </div>
    );
};