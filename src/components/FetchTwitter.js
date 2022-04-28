import React from 'react';
import '../App.css';

export default class FetchTwitter extends React.Component{

state = {
    loading: true,
    feed: null,
}

    async componentDidMount(){
        const twitterFeed="";//cant do without actually launching website with access to twitter api from WCE organisation
        const response = await fetch(twitterFeed);
        const data = await response.json();
        this.setState({feed: data.results[0]})
    }

    render(){
        return <div>
            {this.state.loading ?<div>loading...</div> : <div>feed...</div>}
        </div>;
    }
}