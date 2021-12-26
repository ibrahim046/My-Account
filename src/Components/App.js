import React from "react";
import NavBar from "./MyNavBar";
import Image from "./Banner";
import Main from "./Main";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Image/>
                <Main/>
               
            </div>
        )
    }
}


export default App 