// Visibility toggle app
let visibility = false; 
const appRoot = document.getElementById('app');
const app = {
    title: 'Visibility toggle',
    details: 'These are the details that are suppose to be shown',
};


const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            {app.title ? <h1>{app.title}</h1> : ''}
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={toggleVisibility}>{visibility ? 'hide details' : 'show details'}</button>
            {visibility && (<p>{app.details}</p>)}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp(); 