"use strict";

var React = require('react');

var AboutPage = React.createClass({
    render: function(){
        return (
            <div>
                <h1>About</h1>
                <p>This is React and Flux demo project.</p>
            </div>            
        );
    }
});

module.exports = AboutPage;