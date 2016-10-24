"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require('react-router');
var route_1 = require('./route');
function render() {
    ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, route_1.default), document.getElementById('app'));
}
;
render();
//# sourceMappingURL=index.js.map