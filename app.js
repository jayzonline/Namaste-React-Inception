//!EPISODE 1*/
//!------------------------------------------------------------------------------------

//? Normal Javascript
//------------------------------------------------------------------------------------

// const heading = document.createElement('h1');
// const root = document.getElementById('root');
// heading.innerHTML = "Hello world";
// root.appendChild(heading);

//?Using React *CDN
//------------------------------------------------------------------------------------

//** React Elements = React object // takes 3 parames : 'element', attirbutes, 'content
//* The Job of render is that, it will take convert it into actual html element(in this case the reactHeader)

// const reactHeader = React.createElement('h1',{id : 'heading', class : 'heading'}, 'Hellow React');
// const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
// reactRoot.render(reactHeader)

//?how To create Nested element using React
//------------------------------------------------------------------------------------

{
  /* <div class='main'>
    <div class='heading'>{Nested Elements}</div>
</div> */
}

// const nestedElements = React.createElement('div', {className:'main'},
//     React.createElement('div', {className: 'heading'},
//         [
//          React.createElement('h1', {}, "React Learning"),
//          React.createElement('h1', {}, "React Inception")
//         ]
//     )
// )
// const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
// reactRoot.render(nestedElements)

//!EPISODE 2*/
//!------------------------------------------------------------------------------------

//*if this import need to work we need to make the script type='module' */

// import React from 'react';
// import ReactDOM from 'react-dom/client'

// const reactHeader = React.createElement('h1',{id : 'heading', class : 'heading'}, 'Hellow React');
// const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
// reactRoot.render(reactHeader)

//!EPISODE 3*/
//!------------------------------------------------------------------------------------

//? React Object
//------------------------------------------------------------------------------------

//import React  from 'react';
//import ReactDOM  from 'react-dom/client';

//**React Element is an Object */

// const reactHeader = React.createElement('div',{id:'main',class: 'main'},
// React.createElement('h1', { id: 'heading', className: 'heading' }, 'Hello React')
// )

// const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
// reactRoot.render(reactHeader);

//?JSX
//------------------------------------------------------------------------------------

// import React  from 'react';
// import ReactDOM  from 'react-dom/client';

//  const jsxForFirstTIme = <div id='main' className='main'>Hellow React</div>;        //**JSX single line no brackets required*/
//  const jsxForSecondTime = (<div id='main2'>                                        //**JSX multi line brackets required*/
//                                  <h1>Good Night</h1>
//                                  </div>)

//  const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

//  reactRoot.render(jsxForFirstTIme);

//?React Components
//------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

const HeaderCompoment = () => (
  <div className="container">
    <h1>Welcome to React Inception</h1>
  </div>
);

//it can execute any javascript code {paragraph}
const BodyComponent = () => (<div className="container-fluid">
    <HeaderCompoment />
    <SubParagraph/>
    {HeaderCompoment()}
    {paragraph} 
    <h1>Body Component</h1>
</div>);

const paragraph = <span>Tiny paragraph</span>

const SubParagraph = function () {
  return <p>This is a sub paragraph</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponent />);


//!EPISODE 4*/
//!------------------------------------------------------------------------------------