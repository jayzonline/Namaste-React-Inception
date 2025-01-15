//**EPISODE 1*/
//------------------------------------------------------------------------------------

//* Normal Javascript
//------------------------------------------------------------------------------------

// const heading = document.createElement('h1');
// const root = document.getElementById('root');
// heading.innerHTML = "Hello world";
// root.appendChild(heading);



//*Using React *CDN
//------------------------------------------------------------------------------------

//** React Elements = React object // takes 3 parames : 'element', attirbutes, 'content
//* The Job of render is that, it will take convert it into actual html element(in this case the reactHeader) 

// const reactHeader = React.createElement('h1',{id : 'heading', class : 'heading'}, 'Hellow React'); 
// const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
// reactRoot.render(reactHeader)



//*how To create Nested element using React
//------------------------------------------------------------------------------------

{/* <div class='main'>
    <div class='heading'>{Nested Elements}</div>
</div> */}

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


//**EPISODE 2*/
//------------------------------------------------------------------------------------

/**if this import need to work we need to make the script type='module' */
import React from 'react';
import ReactDOM from 'react-dom/client'

const reactHeader = React.createElement('h1',{id : 'heading', class : 'heading'}, 'Hellow React'); 
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(reactHeader)




