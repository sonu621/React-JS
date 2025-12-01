import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    userName: "Sonu",
    age: 25
  }

  let newArr = [1,2,3]

  return (
    <>
    <div className="p-4 bg-red-500 text-white rounded-xl">Hello {myobj.userName} 👋</div>
    <p className="bg-white text-black">Test!</p>
     <Card userName="Sonu" btnText="Click Me"/>
     <Card userName="Gupta" btnText=""/>
    </>
  );
}

export default App;
