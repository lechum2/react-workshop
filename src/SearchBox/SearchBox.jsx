/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";
import Result from "src/SearchBox/Result";

export default React.createClass({
    "render": function () {
        return (
            <div>
                <input type="text" />
                <Result />
            </div>
        );
    }
});

