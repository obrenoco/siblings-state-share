import "./styles.css";
import { List } from "./List";
import { Square } from "./Square";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("green");
  return (
    <div className="App">
      <List setColor={setColor} />
      <Square color={color} />
    </div>
  );
}
