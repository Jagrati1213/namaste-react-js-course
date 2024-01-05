## Assignments:

### Map function:

- we used to loop our data.
- and every data have their unique key, so, react can optimize the all items that render and help them to rendering.
- not recommended index for key.

### Is JSX mandatory for React? :

- NO, we can use createElement for creating elements.

### Is ES6 mandatory for React? :

- NO, we can use `create-react-class` method instead of ES6.

```
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

### How can I write comments in JSX:

- `{/* like this  */} `

### What is <React.Fragment></React.Fragment> and <></> ?

- <React.Fragment> : They are used when we want to wrap whole multiple elements together.
- <> : This is a new, shorter syntax you can use for declaring fragments. It looks like empty tags.

### What is Virtual DOM?

- Virtual Dom is Representation of Real Dom, it's made react more faster, Because it's synced with Dom and only render those component on Dom that are not render before.

### What is Reconciliation in React?

- When Virtual Dom Synced with Real Dom by ReactDom that's process called **Reconciliation**.

### What is React Fiber?

- It's a Reconciliation Engine that developed in React 16.

### Why we need keys in React? When do we need keys in React?

- So, React can understand which element render already and which comes after that.
- Helps to find out the sequence,

### Can we use index as keys in React?

- Yes, we can use if we don't have unique Id.
- For good developing it's not recommended by React as well.
- Try to use unique Id instead of index.

### What is props in React? Ways to

- Props just a parameter that we passed inside the component, so we can customize our component content and other things.
- we used props word instead of props we can use anything, and that store JS Object.

### What is a Config Driven UI ?

- When front-end developer design the code for dynamically structure.
- when our all things comes from the backend Api and after that it render on frontend that called Config Driven UI.
