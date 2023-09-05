import './App.css';
let name = "Ravi";
let hk = "Hare Krishna";

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
     <h1>{hk}</h1>
     <h2>HELLO {name}</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ipsam, necessitatibus dignissimos eligendi quae iusto culpa quam enim veritatis accusamus odit labore ab praesentium rerum quibusdam illo illum ratione aut!
      Ex laudantium praesentium totam quasi nostrum ab corporis quidem sunt necessitatibus, ullam numquam sint ad modi atque facilis reprehenderit doloremque quam earum quibusdam laboriosam saepe dignissimos. Voluptates nemo voluptatem cum!</p>
    </div>
    </>
  );
}

export default App;
