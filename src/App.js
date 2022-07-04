import ToDoList from "./Components/ToDoList";
import { Routes, Route } from "react-router-dom";
import Wave from 'react-wavify'

function App() {


  return (
    <div className="App">
      <Wave fill='#FFFDD0'
        paused={false}
        className="wave"
        options={{
          height: 0,
          amplitude: 50,
          speed: 0.15,
          points: 4
        }}
  />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/lista/:taskFilter" element={<ToDoList />} />
      </Routes>
      
    </div>
  );
}

export default App;
