import React, { Component } from 'react'

import './search-panel.css';

class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (event) => {
        const term = event.target.value
        const capitalize = term.charAt(0).toUpperCase() + term.slice(1)
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }
};

export default SearchPanel