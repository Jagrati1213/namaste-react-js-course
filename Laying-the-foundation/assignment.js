import React from "react";
import ReactDOM from "react-dom/client";
import user from './user.png';
import logo from './logo.png';
//step 1 
// const divTag = React.createElement(
//     'div',
//     { id: 'container', style: { background: 'red' } },
//     [
//         React.createElement('h1', { class: 'title' }, React.createElement('p', {}, 'title')),
//         React.createElement('h2', { class: 'title' }, React.createElement('p', {}, 'title')),
//         React.createElement('h3', { class: 'title' }, React.createElement('p', {}, 'title'))
//     ]
// );

// step 2
// const JSXDivTag = (
//     <div>
//         <h1 className="title">h1</h1>
//         <h2 className="title">h1</h2>
//         <h3 className="title">h1</h3>
//     </div>
// )

// step 3 
// const DivComponent = () => {
//     return (
//         <main className="main-box"> {/* step 4 : passed attributes*/}
//             {JSXDivTag}
//         </main>

//     );
// }

// step 5
// const MainComponent = () => {
//     return <DivComponent />
// }

// step 6.
// {TitleComponent} : A React Element that called inside React Component.
// {<TitleComponent/>} : React Component Calling inside component.
// {<TitleComponent></TitleComponent>} :same as above, React Component Calling inside component.

// Step 7

/*Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice
*/

const LogoComponent = () => {
    return <div className="logo_container">
        <img src={logo} alt="logo" />
    </div>
}
const SearchBarComponent = () => {
    return <div className="search_container">
        <input type="search" placeholder="search here..." />
    </div>
}
const userIconElement = (
    <div className="user_container">
        <img src={user} alt="user" />
    </div>
)
const HeaderComponent = () => {
    return (
        <header>
            <LogoComponent />
            <SearchBarComponent />
            {userIconElement}
        </header>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(divTag);
// root.render(JSXDivTag);
// root.render(<MainComponent></MainComponent>);
root.render(<HeaderComponent />);