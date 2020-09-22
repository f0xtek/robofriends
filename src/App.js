import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';


class App extends Component {
    // define App's state
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

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
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;