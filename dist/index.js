"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var HomePage_1 = require("./components/HomePage");
var header_1 = require('./components/common/header');
var authorPage_1 = require('./components/authors/authorPage');
var aboutPage_1 = require('./components/about/aboutPage');
;
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var Child;
        switch (this.props.route) {
            case 'about':
                Child = aboutPage_1.About;
                break;
            case 'authors':
                Child = authorPage_1.Authors;
                break;
            default: Child = HomePage_1.Home;
        }
        return (React.createElement("div", null, 
            React.createElement(header_1.Header, null), 
            React.createElement(Child, null)));
    };
    return App;
}(React.Component));
exports.App = App;
function render() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(React.createElement(App, {route: route}), document.getElementById('app'));
}
;
window.addEventListener('hashchange', render);
render();
//# sourceMappingURL=index.js.map