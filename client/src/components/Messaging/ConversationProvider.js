import React from 'react';
import axios from 'axios';
import ConversationContainer from './ConversationContainer';

class convoProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            events: ['test', 'test2', 'test3'],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const requestConfig = {
            url: 'http://localhost:4000/api/v1/conversations/',
            method: 'GET',
            headers: { 'Content-Type' : 'applicaiton/json'},
        };

        axios(requestConfig)
          .then((response) => {
              console.log(response.data);
              this.setState({
                  events: response.data,
                  loading: false,
              });
          })
        .catch((err) => {
            this.setState({
                error: err,
                loading: false,
            });
        });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return <div>Error in ConversationProvider !! :( </div>
    }

    renderEvents() {
        const {events} = this.state;
        return (
            <ConversationContainer events={events} />
        )
    }

    render() {
        const {loading, events, error} = this.state;
        console.log(loading);
        console.log(events);
        console.log(error);
        if (loading) {
            return this.renderLoading();
        } else if (events.length > 0) {
            return this.renderEvents();
        } else if (error) {
            return this.renderError();
        } else {
            return <div>Nothing to return.</div>
        }
    }
}

export default convoProvider;