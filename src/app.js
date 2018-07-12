console.log('app is running');

//JSX- JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your live in the hands of a computer',
    options: ['One', 'Two']
    // options: []
};

function checkOptions(options) {
    if (options && options.length > 0) {
        return 'Here are you options:';
    }
    else {
        return 'No options';
    }
}
const template = (
    <div>
        {app.title ? <h1>{app.title}</h1> : ''}
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{checkOptions(app.options)}</p>
        <ol>
            <li>First item</li>
            <li>Second item</li>
        </ol>
    </div>
);

let counter = 0;
const addOne = () => {
  counter++;
  console.log('add one');
};
const minusOne = () => {
  counter--;
  console.log('minus one');
};
const reset = () => { 
  console.log('Reset button');
};
const templateTwo = (
    <div>
    <h1>Count: {counter}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
    </div>
);

console.log(templateTwo);

const appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);