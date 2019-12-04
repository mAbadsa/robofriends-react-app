import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField,
        robots: requestRobots.robot,
        isPending: requestRobots.isPending,
        error: requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        requestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.setState({ robots: requestRobots })
    }
    render () {
        const { robots } = this.state;
        const {searchField, onSearchChange } = this.props;
        const filteredRobot =  robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(!robots.length) {
            return (
                <div className="tc pa3">
                    <h1 className="f1">Robot App</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <h3>Loading...</h3>
                </div>
                )
        } else {
            return (
                <div className="tc pa3">
                    <h1 className="f1">Robot App</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobot}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);