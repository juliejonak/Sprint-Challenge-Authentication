import React from 'react';
import '../App.css';
import axios from 'axios';

class Jokes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jokes: [],
            deniedAccess: true
        }
    }

    componentDidMount = () => {

    }

    content = () => {

    }

    render(){
        return(
            < this.content />
        )
    }
}

export default Jokes;