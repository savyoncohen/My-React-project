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
    ),
    React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
