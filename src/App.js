import React from 'react'
import NavBar from "./components/NavBar"
import Todo from "./components/Todo";
function App() {
  let title="my first react app";

  return (
    <div>
     <NavBar title={title}/>
     <main>
      <Todo title="learnig react" datetime="23rd march,2022"/>
      <Todo title="premest training" datetime="23rd march,2022"/>
      <Todo title="going to market" datetime="23rd march,2022"/>
      <Todo title="writing exam" datetime="23rd march,2022" />
      <Todo title="going home" datetime="23rd march,2022"/>
     </main>
    </div>
  )
}

export default App