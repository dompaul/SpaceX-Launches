import React from 'react';

const Select = ( props ) => {

    const { years, isLoaded, error } = props.state;

    if ( error || !isLoaded ) {
        return null;
    }

    return (
        <select name={ props.text } onChange={ props.event.bind( this ) } className={ props.classes }>
            <option value="">{ props.text }</option>
            { years.map( ( year, index ) => {
                return <option key={ index } value={ year }>{ year }</option>
            } ) }
        </select>
    );
}

export default Select;
