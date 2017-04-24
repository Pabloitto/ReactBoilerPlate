(function () {

    var React = require("react");

    var Home = require("./components/home-component");

    var element = React.createElement(Home, null);

    React.render(element, document.querySelector('.main-container'));

}());