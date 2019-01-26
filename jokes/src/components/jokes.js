import React from 'react';
import '../App.css';
import axios from 'axios';
import { OuterBox, Joke, List, JokeHeader } from './styledComponents';

class Jokes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jokes: [],
            loading: true,
            loggedIn: false
        }
    }

    componentDidMount = () => {
        const token = localStorage.getItem('jwt');
        const options = {
            headers: {
                Authorization: token,
            }
        }

        axios.get('http://localhost:3300/api/jokes', options)
            .then(response => {
                this.setState({
                    jokes: response.data,
                    loggedIn: true,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    loggedIn: false,
                    loading: false
                })
            })
    }

    content = () => {
        if(this.state.loading){
            return(
                <OuterBox>
                    <h3>Loading...</h3>
                </OuterBox>
            )
        }

        if(this.state.loggedIn){
            return(
                <OuterBox>
                    <JokeHeader className='header'>EPIC DAD JOKES</JokeHeader>
                    <List>
                        {this.state.jokes.map(joke => {
                            return(
                            <Joke key={joke.id} className="joke">
                                <p>{joke.joke}</p>
                            </Joke> )
                        })}
                    </List>
                </OuterBox>
            )
        } else {
            return(
                <OuterBox>
                    <p>You must be logged in to view the epic Dad Jokes!</p>
                </OuterBox>
            )
        }

    }

    render(){
        return(
            < this.content />
        )
    }
}

export default Jokes;