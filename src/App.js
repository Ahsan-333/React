import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza foccacia" />
      <h2>Pizza</h2>
      <p>Tomato, mozeralla, spinach, and ricotta cheese.</p>
    </div>
  );
}

export default App;
