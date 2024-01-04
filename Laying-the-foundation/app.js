// **** IMPORT REACT AND DOM ****//
import React from 'react';
import ReactDom from 'react-dom/client';

// **** CREATE ELEMENT ****// 
const h1 = React.createElement(
    'h1',
    { id: 'heading' },
    'Laying in Foundation'
);

//**** JSX ELEMENT *****//

//invalid js and single line code
const JSXHeading = <h3 className='heading'>Namaste React js from JSX Element</h3>

//invalid js and multi line code
const JSXHeading_1 = (<h3 className='heading' tabIndex={'1'}>
    another way to write component like this '{`<></>`}'</h3>)

// **** REACT COMPONENTS ****//

// 1st way to write component
const TitleComponent = () => {
    return JSXHeading_1; //direct insert element into component
}

// 2nd way to write component
const TitleComponent_2 = function () {
    return (
        <div>
            {JSXHeading} {/* render React Element */}
            {console.log('hello')}
            {12 + 23}
            <p style={{ color: 'red', fontSize: '1.2rem' }}>rendering React element first, than p tag</p>
        </div>
    )
}

// React Composition
const ParentComponent = () => {
    return (
        <div>
            <h1> React composition</h1>
            <TitleComponent_2 />
            <TitleComponent></TitleComponent>
            {TitleComponent()} {/* we can also called component like functions */}
        </div>
    )
}
//**** CREATE ROOT ****//
const root = ReactDom.createRoot(document.getElementById('root'));

// **** RENDERING ****//
root.render(h1);
root.render(JSXHeading);
root.render(<ParentComponent />); {/*calling a react component*/ }