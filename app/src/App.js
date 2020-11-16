import React from 'react';
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

    }

    /**
     * Responsible for getting the SpaceX dataset from the SpaceX API
     */
    getLaunches() {

    }

    /**
     * Responsible for getting the list of years available in the SpaceX API
     *
     * @param  {Object} json Response dataset from SpaceX API
     * @return {Array} Returns an Array of years
     */
    getYears( json ) {

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

                <div className="app__body">
                    <div className="app__image-container">
                        <img
                            src={ CONSTANTS.SPACE_X_IMAGE }
                            srcSet={ CONSTANTS.SPACE_X_RETINA_IMAGES }
                            className="app__main-image"
                            alt="Launch Home"
                        />
                    </div>
                    <div className="app__filters">

                    </div>
                </div>
            </div>
        );
    }
}
