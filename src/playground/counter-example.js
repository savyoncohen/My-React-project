
let counter = 0;
const addOne = () => {
  counter++;
  renderCounterApp();
};
const minusOne = () => {
  counter--;
  renderCounterApp();
};
const reset = () => { 
  counter = 0;
  renderCounterApp();
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

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1>Count: {counter}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();