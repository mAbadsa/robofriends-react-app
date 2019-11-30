import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value });
/*         const filteredRobot =  this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        this.setState({ robots: filteredRobot });
        console.log(this.state.robots); */
    }

    render () {
        const filteredRobot =  this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc pa3">
                <h1>Robot App</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobot}/>
            </div>
        );
    }
}

export default App;