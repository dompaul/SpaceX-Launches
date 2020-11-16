import React from 'react';

const Button = ( props ) => {

    const { isLoaded, error } = props.state;

    if ( error || !isLoaded ) {
        return null;
    }

    return (
        <button onClick={ props.event.bind( this ) } className={ props.classes }>
            { props.text }
        </button>
    );
}

export default Button;
