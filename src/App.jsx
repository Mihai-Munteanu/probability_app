import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { CSSTransition } from "react-transition-group";
import Modal from "./Components/Modal";

function App() {
     const [nameFirst, setNameFirst] = useLocalStorage("nameFirst", "");
     const [nameSecond, setNameSecond] = useLocalStorage("nameSecond", "");

     const nameInputFirst = useRef(null);
     const nameInputSecond = useRef(null);

     function handleNameInputFirst(event) {
          setNameFirst(event.target.value);
          // localStorage.setItem('name', JSON.stringify(event.target.value))
     }

     function handleNameInputSecond(event) {
          setNameSecond(event.target.value);
          // localStorage.setItem('name', JSON.stringify(event.target.value))
     }

     return (
          <div className="App">
               <header className="App-header">
                    <div className="nameArea">
                         <CSSTransition
                              in={nameFirst.length > 0}
                              timeout={300}
                              classNames="slide-vertical"
                              unmountOnExit
                         >
                              <h1 className="name-label">
                                   Dear {` ${nameFirst}`}
                              </h1>
                         </CSSTransition>

                         {nameFirst && nameSecond && (
                              <div className="name-label">and</div>
                         )}

                         <CSSTransition
                              in={nameSecond.length > 0}
                              timeout={300}
                              classNames="slide-vertical"
                              unmountOnExit
                         >
                              <h1 className="name-label">
                                   Dear {` ${nameSecond}`}
                              </h1>
                         </CSSTransition>
                    </div>

                    <div>
                         {nameFirst || nameSecond ? (
                              <p>Dare to play this game</p>
                         ) : (
                              <h1>Dare to play this game</h1>
                         )}
                    </div>
                    <div className="inputArea">
                         <div>
                              <form action="#">
                                   <input
                                        type="text"
                                        className="name-input"
                                        placeholder="Insert your name"
                                        ref={nameInputFirst}
                                        value={nameFirst}
                                        onChange={handleNameInputFirst}
                                   />
                              </form>
                         </div>
                         <div>
                              <form action="#">
                                   <input
                                        type="text"
                                        className="name-input"
                                        placeholder="Insert your spouse name"
                                        ref={nameInputSecond}
                                        value={nameSecond}
                                        onChange={handleNameInputSecond}
                                   />
                              </form>
                         </div>
                    </div>
                    <div className="buttonStart">
                         {nameFirst && nameSecond && <Modal />}
                    </div>
               </header>
          </div>
     );
}

export default App;
