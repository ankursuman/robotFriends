import React, { Component } from 'react'
import {connect } from 'react-redux'
import Cardlist from './cardlist'
import {robo} from './robo'
import SearchBox from './search'
import Scroll from './scroll'

import { setSearchField, requestRobot} from './action';

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robo: state.requestRobot.robo,
        isPending: state.requestRobot.isPending,
        error: state.requestRobot.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobot: () => dispatch(requestRobot())
    }
}


class App extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         robo: [],
    //         //searchfield: ''
    //     }
    // }

    componentDidMount() {
        
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => {
        //     return response.json();
        // })
        // .then(user => {
        //     this.setState({ robo: user})
        // });
        this.props.onRequestRobot();
    }

    // onSearchChange = (event) => {
    //     this.setState({searchfield: event.target.value})
         
    // }

    render() {
        const { searchfield, onSearchChange,robo,isPending} = this.props;
        const filterRobo = robo.filter(robo => {
            return robo.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return isPending ? 
            <h1> Loading </h1> :
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <Cardlist robo={filterRobo}/>
                    </Scroll>
                </div>
            );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);