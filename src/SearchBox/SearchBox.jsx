/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

/* eslint no-underscore-dangle: 0 */

"use strict";

import React from "react";
import Result from "src/SearchBox/Result";

export default React.createClass({
    "getInitialState": function () {
        return {
            "SearchValue": "No search value"
        };
    },
    "handleChange": function (evt) {
        this.setState({
            "SearchValue": evt.target.value
        });
        //this.state.SearchValue = evt.target.value;
        //console.log(evt.target.value);
    },
    "filterPeople": function (list) {
        return list.filter(person => person.name.indexOf(this.state.SearchValue) !== -1);
    },
    "render": function () {
        var personList = this.filterPeople(this.props.data);
        return (
            <div>
                <input onChange={this.handleChange} type="text" />
                {personList.map(person => <Result key={person._id} person={person} />)}
            </div>
        );
    }
});

