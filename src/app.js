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
    <form>
      <input type="text" name="option"></input>
      <button>Add option</button>
    </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot); 