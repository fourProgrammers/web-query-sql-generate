import React from 'react';

export default (props) => {

    return (
        <div>
            <div className="CardTitle">
                { props.title }
            </div>
            <div className="CardForm">
                { props.children }
            </div>
            <div className="CardResult">
                { props.result }
            </div>
        </div>
    );
};