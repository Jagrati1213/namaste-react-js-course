### `React.CreateElement` and `ReactDOM.createRoot`:

- it's not a Dom element, when we create element with the help of react it's return object. And when we render that element than it convert into html element.
- We used React for creating elements and ReactDOM used to render that element on browser.

### JSX:

- JavaScript Syntax.
- Jsx is not a part of **React js**.
- We used JSX to make our life easy of creating elements in react.
- Jsx is different from HTML they are like html syntax.
- Js is a code that browser engine can understand.
- **babel** is a JS compiler that React used to convert JSX to React code.
- JSX element ===> React.createElement ===> React Js object ===> HtmlElement(render) ===> browser
- firstly it's convert the JSX element into React element than JS object with the help of babel after that it's convert to html element.
- We can't used '-' (hyphen) in JSX for example like tab-index = tabIndex.
- JSX protect our project from injected(malicious).

#### Benefits of JSX:

a. Easy to understand
a. Easy to use
a. Readable for users
a. Protect from malware attacks

### How React Works:

- React.createElement ===> React Js object ===> HtmlElement(render) ===> browser
- firstly it's convert the react element into React Js object with the help of babel after that it's convert to html element.

### React Component:

- Components are used for creating Elements, so we can used them whenever it's needed.
- there are 2 types 👍:
  1. Class Based Component ==> old ways
  1. functional Based Component ==> new ways
     A. functional components are normal as function that return JSX Element.
     A. Always Follow Pascal Format. so, babel can understand.
     A. example :` const HeadingComponent = ()=>{ return <h1>Namaste React JS</h1>}`
     A. ` {HeadingComponent()} {/* we can also called component like functions */}`

### React Component Composition:

- calling React component inside another component is called composition.
  ```
  const TitleComponent = () => {
    return JSXHeading;
  }
  const ParentComponent = () => {
    return (
        <div>
            <TitleComponent />
            <p>it is React composition</p>
        </div>
    )
  }
  ```

### React.createElement vs JSX :

| React.createElement                                  | JSX                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------- |
| It used to create element that can we render on html | Same as react Element, but used html syntax                         |
| complex to understand                                | Easy to understand                                                  |
| Take a long time for creating complex design         | take a less time for creating application                           |
| It's a core React js                                 | It's not a part of react it's just used to make developer life easy |
| It not protect our system from malicious programs    | They protect our application                                        |
