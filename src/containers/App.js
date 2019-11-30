import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    async componentDidMount() {
/*         const users = fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({ robots: users })) */

        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        this.setState({robots: users})
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
        const { robots, searchField } = this.state;
        const filteredRobot =  robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(!robots.length) {
            return (
                <div className="tc pa3">
                    <h1 className="f1">Robot App</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <h3>Loading...</h3>
                </div>
                )
        } else {
            return (
                <div className="tc pa3">
                    <h1 className="f1">Robot App</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobot}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;