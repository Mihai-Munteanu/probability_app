import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { CSSTransition } from "react-transition-group";
import ParentModal from "./Components/ParentModal";
import GodFatherImage from "./godfatherimage.jpeg";
import GodFatherFirstPageImage from "./godfatherfirstpageimage.jpeg";

function App() {
     const [nameFirst, setNameFirst] = useLocalStorage("nameFirst", "");
     const [nameSecond, setNameSecond] = useLocalStorage("nameSecond", "");
     const [message, setMessage] = React.useState("");

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

     const showMessage = () => {
          setMessage(
               <div>
                    We make you an offer that you cannot refuse.
                    <br />
                    <br />
                    We would like you to be our GodParents
               </div>
          );
     };

     return (
          <div className="App">
               <header className="App-header">
                    {!message && <h2>It's a trap</h2>}
               </header>
               <div className="App-body">
                    {message ? (
                         <>
                              <div className="proposal">
                                   <div className="proposalMessage">
                                        <h1>{message}</h1>
                                   </div>
                                   <div className="proposalImage">
                                        <img
                                             src={GodFatherImage}
                                             alt="GodFatherImage"
                                        />
                                   </div>
                              </div>
                              <div className="belowText">
                                   *we do not accept NO as an answer
                              </div>
                         </>
                    ) : (
                         <>
                              <div className="container">
                                   <div className="GodFatherFirstPageImageClass">
                                        <img
                                             src={GodFatherFirstPageImage}
                                             alt="GodFatherFirstPageImage"
                                        />
                                   </div>
                                   <div className="nameArea">
                                        <CSSTransition
                                             in={nameFirst.length > 0}
                                             timeout={300}
                                             classNames="slide-vertical"
                                             unmountOnExit
                                        >
                                             <h1 className="name-label">
                                                  {` ${nameFirst}`}
                                             </h1>
                                        </CSSTransition>

                                        {nameFirst && nameSecond && (
                                             <div className="name-label">
                                                  and
                                             </div>
                                        )}

                                        <CSSTransition
                                             in={nameSecond.length > 0}
                                             timeout={300}
                                             classNames="slide-vertical"
                                             unmountOnExit
                                        >
                                             <h1 className="name-label">
                                                  {` ${nameSecond}`}
                                             </h1>
                                        </CSSTransition>
                                   </div>

                                   <div className="firstPageText">
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
                                                       onChange={
                                                            handleNameInputFirst
                                                       }
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
                                                       onChange={
                                                            handleNameInputSecond
                                                       }
                                                  />
                                             </form>
                                        </div>
                                   </div>
                                   <div className="buttonStart">
                                        {nameFirst && nameSecond && (
                                             <ParentModal
                                                  showMessage={showMessage}
                                             />
                                        )}
                                   </div>
                              </div>
                         </>
                    )}
               </div>
          </div>
     );
}

export default App;
