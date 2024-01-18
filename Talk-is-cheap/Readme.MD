# Assignments:

## Map function:

- we used to loop our data.
- and every data have their unique key, so, react can optimize the all items that render and help them to rendering.
- not recommended index for key.

## Is JSX mandatory for React? :

- NO, we can use createElement for creating elements.

## Is ES6 mandatory for React? :

- NO, we can use `create-react-class` method instead of ES6.

```
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

## How can I write comments in JSX:

- `{/* like this  */} `

## What is <React.Fragment></React.Fragment> and <></> ?

- <React.Fragment> : They are used when we want to wrap whole multiple elements together.
- <> : This is a new, shorter syntax you can use for declaring fragments. It looks like empty tags.

## What is Virtual DOM?

- Virtual Dom is Representation of Real Dom (copy of real dom).
- it's made React more faster, Because it's synced with Dom and only render those component in Dom that are updated by the states.
- it's work like JS Objects.

## What is Reconciliation in React?

- When React update any variable with compare the old and new Virtual DOM, that's process called **Reconciliation**.
- It called **React Fiber** as well.
- It is a algorithm that works whenever states change in React.
- It's developed in React 16.

## Why we need keys in React? When do we need keys in React?

- So, React can understand which element render already and which comes after that.
- Helps to find out the sequence,

## Can we use index as keys in React?

- Yes, we can use if we don't have unique Id.
- For good developing it's not recommended by React as well.
- Try to use unique Id instead of index.

## What is props in React? Ways to

- Props just a parameter that we passed inside the component, so we can customize our component content and other things.
- we used props word instead of props we can use anything, and that store JS Object.

## What is a Config Driven UI ?

- When we design real-world application than we want our site works globally.
- when our all things comes from the backend Api than configure driven UI controls the Frontend to ensure it's work globally.
- All the UI attributes, layout, style comes from the configure Driven UI.

# Episode 5 Assignment 👍:

## Utils Folder contain 📁:

- Store Hard coded string in components.
- Store Json files.
- Store data which is common for our website.

## What is the difference between Named Export, Default export and \* as export?

- Named Export : used when we need to export/import components from same file.
- syntax `import {componentName} from 'path` and `export const componentName` or `export const {componentName}`

## What is the importance of config.js file

- Read about it.

## What are React Hooks 👍:

- Hooks are in-build utils function given by React JS.
- we used Hooks to update data in React js without page loading.
- In React js we can't update any variable directly like we do in JS.
- whenever state changed React **re-render** that component.

## UseState 👍:

- It used to update variables in React JS.
- It take 2 parameter :
  1.  Variable
  2.  Function : used to update the variable
- it is an array like syntax.

## Difference btw --save and --save-dev

- --save : install package into dependency.
- --save-dev : install package into dev-dependency.

# Episode 6 👍:

## Monolith :

- They provide multiple services.
- We used One textfield, only.

## MicroService :

- same as Monolith.
- But, we can used multiple textFields.

## How to Render Api

- There is 2 way for rendering api data:
  1. Load the Dom ---> Call Api data ---> Render That Data
  2. Load the Dom ---> Render the skeleton ---> Call the Api ---> Render that Data (mostly devs used this approach)

## useEffect 👍:

- Used when we want to render anything after the component rendering.
- If we don't passed dependency array it will called at every rendering.
- If we pass array dependency, than whenever the dependency change it will re-render.

## Fetch :

- Used to fetch the data, from the network server.
- Return promise.
- used async/await for make syntax easy.

## Async function & Await:

- It's return **Promise**. if you return variable it automatically wrap into promise than return.
  ### Await 👍:
  - Is a key word only used inside Async Function.
  - write in-front of promise, and **resolve** the promise.

## What is a `Microservice`?

- It's an architecture.
- Used in company to handel the services like payment, shopping card, authentication.
- In Microservice, we have different text fields and developer team for managing our site.
- In simple word we can say that, It separate the backend team, front-end Team, and management team.
- It increase scalability, flexibility.

## What is `Monolith architecture`?

- Different of Microservices.
- It store everything into single source.
- Easy to manage bugs, because all files store in same place.
- Used one Text field only, into the entire website.

## Why do we need a `useEffect` Hook?

- It is a in-build utils function.
- Used to render anything after component rendering.
- It take 2 parameter
  1. Callback function
  2. Dependency

## What is `Optional Chaining`?

- We used this to handel undefined and null things.
- `person?.age`, age will only run if person is exit, if it not exit than it not cache the code instead give undefined.

## What is Shimmer UI?

- A skeleton, Used when our data not loaded.

## What is the difference between JS expression and JS statement

### JS Expression :

- It return some value.
- It can store in statement as well.
- Like string, ternary.

### JS statement

- It is a block of code that used complete particular task.
- And we can't used them into expression.
- Like function, if-statement, switch case, ect.

## What is Conditional Rendering, explain with a code example

```
{
  isLive ? return <h1>It's live</h1> :  return <h1>not live</h1>
}
```

## What is CORS?

- We devs send https request from one origin(portNumber) to another origin, Than browser engine blocks the request.
- And gives, **Cors** error into console.
- To resolve this we can used Cors extension.

## What is `async` and `await`?

1. **Async** is a key word that used to handel promises.

- It return Promise.
- If we return variable in Async it wrap that var into promise than return.

2. **Await**, Used only with Async.

- It resolve the promise.
- When JS engine reach on await it suspend that function until it resolved it.

## What is the use of `const json = await data.json();` in getRestaurants()

- It Used to resolved the response's promise that comes from the data, as Json format.
- Like ( data ==> response ===> response.body ===> body.json ==> json).
- Give res then from res body we convert body readable text into Json format, That store in Json.

## IMP Note:

- Never show loader in website used skeleton/simmer UI.
- Whenever state change it re-render the particular component instead only render that state.
- Whenever state change the component re-render.
- Resolve search error that he taught.

# Episode 7:

## React-Router-DOM

- use to navigate the pages without page re-loading.
- They used `Client side scripting` where we don't need to send server call for rendering page.
- In V6.4, Router implements different router function.
- `createBrowserRouter` is recommended to use because they gives full url and control browser history.
- `Outlets` used to render parent child in DOM.

## 2 types of routing:

- `client side rendering` : when we render data without network/server calling.
- `server side rendering` : when we render data with network/server calling.

## IMP Notes:

- React JS is a **Single Page Routing**.
- That's why they increase user experience and faster.

# Episode-8 📁:

## Class Component:

- same as Javascript class based.
- In React we used `extends` keyword to inherit all things from the parent component.
- `Constructor` used to get all properties from the parent component.
- `super` will call the constructor of its parent class, This is required when you need to access some variables from the parent class. It is important to call super before the object initializes i.e, before using this.state in the constructor if it’s not there then the code gives a bug

## Life Cycle Of Class Component 👍:

1. Mounting

   - Constructor Called
   - Render Called (update Dom with default values)
   - ComponentDidMount Called ( api called and state update with api data)

2. Updating

   - Render called (with Api data)
   - Dom updated with new data
   - ComponentDidUpdate Called

3. UnMounting

- Called when we go to another page

```
 <h1>Life cycle for multi child </h1>
 - parent constructor called
 - parent render called
   - first constructor called
   - first render called

   - second constructor called
   - second render called

   <Dom Update -- In Single commit>
   - first componentDidMount called
   - second componentDidMount called

- parent ComponentDidMount Called
```

## ComponentDidMount :

- Used to call apis in react js.

## ComponentDidUpdate :

- Called after componentDidMount

## ComponentWillMount:

- called to stop re-rendering the component, if we go to another page.

## can't Call async in useEffect

- Because Async return promise and useEffect return either callback function or nothing.

# Episode-9 📁:

## Custom Hooks:

- start with `use` word, so react can understand that this is hooks.
- It just a utility function.
- for creating hooks first you need to understand what we need as i/p or o/p.

## Bundlers:

- chunking
- code splitting
- dynamic bundler
- lazy loading
- on demand loading
