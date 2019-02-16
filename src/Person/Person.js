import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h1>{props.name}</h1>
            <p onClick={props.click}>{props.age}</p>
            <div>{props.children}</div>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
};


// (props) => valores inputados no html do component
// props.children => conteúdo inputado dentro do componente igual ng-content

export default person;