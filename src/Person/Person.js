import React from 'react';

const person = (props) => {
    return (
        <div className="teste">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <div>{props.children}</div>
        </div>
    );
};


// (props) => valores inputados no html do component
// props.children => conteúdo inputado dentro do componente igual ng-content

export default person;