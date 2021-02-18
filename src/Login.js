import {createContext, useState} from "react";
// import ReactDOM from "react-dom";


//global state: loggedIn?

//create context obj
const LoginContext = createContext();

//context provider component
function LoginProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false)


    function toggle(){
        setLoggedIn(loggedIn => !loggedIn)
    }


    const value = {loggedIn: loggedIn, toggle: toggle}

    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    );
}

export {LoginContext, LoginProvider};
 