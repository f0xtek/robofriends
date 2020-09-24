import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends Component {
    // define App's state
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    // "fetch" users details from an external API, decode the response and update the
    // state to include the new robot details.
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    };

    // When the contents of the search box changes, update the searchField state
    onSearchChange = (event) => this.setState({ searchField: event.target.value });

    render() {
        const { robots, searchField } = this.state;
        // get a filtered list of robots based on what is input into searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    };
}

export default App;