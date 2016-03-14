/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default React.createClass({
    "getDefaultProps": function () {
        return {
            "text": "No results"
        };
    },
    "render": function () {
        return (
            <p>{this.props.person.name}</p>
        );
    }
});

