import React from "react";
import axios from 'axios';
import ConversationContainer from './ConversationContainer';
import { withAuthenticationRequired } from '@auth0/auth0-react';

class ConvoProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const requestConfig = {
            url: 'http://localhost:4000/api/v1/users/conversation',
            method: 'GET',
            headers: { 'Content-Type' : 'applicaiton/json'},
        };

        axios(requestConfig)
          .then((response) => {
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
        return <div>Error in ConversationProvider !!</div>
    }

    renderEvents() {
        const {events} = this.state;
        return (
            <ConversationContainer events={events} />
        )
    }

    render() {
        const {loading, events, error} = this.state;
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

export default ConvoProvider;

withAuthenticationRequired(ConversationContainer, {
    returnTo: () => '/users/conversation',
});