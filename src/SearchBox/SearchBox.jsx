/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import Result from "src/SearchBox/Result";

export default React.createClass({
    "getInitialState": function () {
        return {
        };
    },
    "handleChange": function (evt) {
        this.setState({
            "SearchValue": evt.target.value
        });
    },
    "render": function () {
        return (
            <div>
                <input onChange={this.handleChange} type="text" />
                <Result text={this.state.SearchValue} />
            </div>
        );
    }
});

