import React from 'react';
import './titlestyle.css';

const Title = (props ) => {
    return(
        <h1> Name: { props.firstName } {props.lastName} </h1>
    );
}

export default Title;