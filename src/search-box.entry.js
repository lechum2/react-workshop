/**
 * Copyright (c) 2016-present, zangrafx
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "src/SearchBox/SearchBox";

var data = JSON.parse(document.getElementById("data").textContent);

ReactDOM.render(<SearchBox data={data} />, document.getElementById("app"));
