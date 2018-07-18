console.log('hoc');

//HIGHER ORDER COMPONENT (HOC) - A component that renders another component
// reuse code
// Render hijacking
// prop manipulation
//abstract state
import React from 'react';
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> the info is : {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p> this is private info please do not share </p>
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (

        <div>
        {props.isAuth ?  <WrappedComponent {...props}/> : <p> please signin </p>}
       
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuth={true} info="there are the details"/>, document.getElementById("app"));
