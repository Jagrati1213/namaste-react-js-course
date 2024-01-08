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

# Episode 5

<!-- Utils -->

## Utils Folder contain 📁:

- Store Hard coded string in components.
- Store Json files.
- Store data which is common for our website.

## Hooks 👍:

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
