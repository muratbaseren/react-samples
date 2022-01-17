import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import Header from "./components/Header"
import Variables from "./components/Variables"
import Props from "./components/Props"
import Loops from "./components/Loops"
import UserDetail from "./components/UserDetail"
import UsingState from "./components/UsingState"
import StateArray from "./components/StateArray"
import StateObject from "./components/StateObject"
import StateInput from "./components/StateInput"
import StateInput2 from "./components/StateInput2"
import UsingUseEffect from "./components/UsingUseEffect"
import MountUnmount from "./components/MountUnmount"
import UsingCss from "./components/UsingCss"
import UsingCssModule from "./components/CssModule/UsingCssModule"

const _info = {
  title: "Lorem, ipsum dolor",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique aut fugit."
};

const users = [
  {
    id: 100,
    name: "Leanne Graham",
    username: "Bret",
    company: "Romaguera-Crona"
  },
  {
    id: 101,
    name: "Ervin Howell",
    username: "Antonette",
    company: "Deckow-Crist"
  },
  {
    id: 102,
    name: "Clementine Bauch",
    username: "Samantha",
    company: "Romaguera-Jacobson"
  }
];

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload!! (Murat Başeren)
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <React.Fragment>
    //   <Header />
    //   <p className='App'>Hello World!!</p>
    //   <label htmlFor="myinput">
    //     Name
    //     <input id="myinput" />
    //   </label>
    // </React.Fragment>

    <div>
      {/* <Variables /> */}
      {/* <Props name="Murat" surname={"Başeren"} age={30} developer={true} info={_info} /> */}
      {/* <Loops users={users} /> */}
      {/* <UserDetail name={"Murat Başeren"} age={"30"} hobbies={["book", "guitar", "coding"]} address={{ detail: "adresim", zipcode: 80090 }} /> */}
      {/* <UsingState /> */}
      {/* <StateArray /> */}
      {/* <StateObject /> */}
      {/* <StateInput /> */}
      {/* <StateInput2 /> */}
      {/* <UsingUseEffect /> */}
      {/* <div>
        {isVisible && <MountUnmount />}
        <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle MountUnmount Component</button>
      </div> */}
      {/* <UsingCss /> */}
      <UsingCssModule />
    </div>
  );
}

export default App;
