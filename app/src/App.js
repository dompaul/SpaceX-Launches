import React from 'react';
import LaunchList from './components/LaunchList/LaunchList';
import Button from './components/Buttons/Button';
import Select from './components/Buttons/Select';
import CONSTANTS from './common/constants';

export default class App extends React.Component {
    /**
     * This app consumes data from the SpaceX public API.
     * And loads a full list of SpaceX launches, historic and future launches
     *
     * @constructor
     */
    constructor( props ) {
        super( props );
        this.state = {
            items: [],
            isLoaded: false,
            error: false,
            sort: false,
            years: [],
            filter: ''
        };
    }

    /**
     * Runs after the component output has been rendered to the DOM
     */
    componentDidMount() {
        this.getLaunches();
    }

    /**
     * Responsible for getting the SpaceX dataset from the SpaceX API
     */
    getLaunches() {
        fetch( `${ CONSTANTS.SPACE_X_API }` )
            .then( res => res.json() )
            .then( json => {
                this.setState( {
                    isLoaded: true,
                    items: json,
                    years: this.getYears( json )
                } );
            } )
            .catch( error => {
                console.error( `Error ${ error }` );
                this.setState( {
                    error: true
                } );
            } );
    }

    /**
     * Responsible for getting the list of years available in the SpaceX API
     *
     * @param  {Object} json Response dataset from SpaceX API
     * @return {Array} Returns an Array of years
     */
    getYears( json ) {
        const years = new Set();
        [ ...json ].forEach( item => {
            const year = Number( new Date( item.launch_date_utc ).getFullYear() );
            if ( !years.has( year ) ) {
                years.add( year );
            }
        } );
        return Array.from( years );
    }

    /**
     * Callback function from onClick event listener
     * Handles updating the items state with the new, sorted list
     */
    handleSort() {

    }

    /**
     * Callback function from the onChange listener
     * Handles updating the filter state
     *
     * @param  {Object} event Filter on change event (e.g 2009)
     */
    handleFilter( event ) {

    }

    render() {

        return (
            <div className="app">
                <header className="app__header">
                    <div className="app__logo">
                        <img src={ CONSTANTS.LOGO } className="app__logo-image" alt="SpaceX" />
                        <span className="app__logo-txt">Launches</span>
                    </div>
                </header>
                <Button
                    state={ this.state }
                    classes='button button--reload'
                    event={ this.getLaunches.bind( this ) }
                    text='Reload Data'
                />
                <div className="app__body">
                    <div className="app__image-container">
                        <img
                            src={ CONSTANTS.SPACE_X_IMAGE }
                            srcSet={ CONSTANTS.SPACE_X_RETINA_IMAGES }
                            className="app__main-image"
                            alt="Launch Home"
                        />
                    </div>
                    <div className="app__launches">
                        <div className="app__filters">
                            <Select
                                state={ this.state }
                                classes='select'
                                event={ this.handleFilter.bind( this ) }
                                text='Filter By Year'
                            />
                            <Button
                                state={ this.state }
                                classes='button button--sort'
                                event={ this.handleSort.bind( this ) }
                                text={ this.state.sort ? ' Sort Ascending' : 'Sort Descending' }
                            />
                        </div>
                        <LaunchList
                            api={ this.getLaunches }
                            state={ this.state }
                        />
                    </div>
                </div>
            </div>
        );
    }
}
