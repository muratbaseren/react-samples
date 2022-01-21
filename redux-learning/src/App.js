import "./App.css";
import Counter from "./features/counter/Counter";
import { useState } from "react";
import Category from "./components/Category";

function App() {
  // const [value, setValue] = useState(0);

  return (
    <div className="App">
      {/* <Category val={value} valState={setValue} /> */}
      <Counter />
    </div>
  );
}

export default App;
