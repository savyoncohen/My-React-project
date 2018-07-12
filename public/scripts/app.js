'use strict';

console.log('app is running');

//JSX- JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your live in the hands of a computer',
    options: ['One', 'Two']
    // options: []
};

function checkOptions(options) {
    if (options && options.length > 0) {
        return 'Here are you options:';
    } else {
        return 'No options';
    }
}
var template = React.createElement(
    'div',
    null,
    app.title ? React.createElement(
        'h1',
        null,
        app.title
    ) : '',
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        checkOptions(app.options)
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'First item'
        ),
        React.createElement(
            'li',
            null,
            'Second item'
        )
    )
);

var counter = 0;
var addOne = function addOne() {
    counter++;
    console.log('add one');
};
var minusOne = function minusOne() {
    counter--;
    console.log('minus one');
};
var reset = function reset() {
    console.log('Reset button');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        counter
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

console.log(templateTwo);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
