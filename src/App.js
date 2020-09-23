import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
        // get a filtered list of robots based on what is input into searchfield
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    };
}

export default App;