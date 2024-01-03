const h1 = React.createElement(
    "h1",
    {
        id: 'heading', //tagName
        style: { backgroundColor: 'red', color: 'white', padding: '2.5rem' } //properties and attributes
    },
    "Hello world from react js"//child of tagName
);
console.log(typeof h1); //return obj
const root = ReactDOM.createRoot(document.getElementById("root")); //create Root element
// root.render(h1); //append child inside root


// Nested  child in react
const parent = React.createElement(
    'div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', {}, 'I am an H1 tag'),
            React.createElement('p', {}, 'I am a inner sibling')
        ]
    )
);

root.render(parent);