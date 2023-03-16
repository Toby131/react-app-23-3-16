import './App.css';
function Counter({title, initValue}){
  return <div>
    <h1> {title} </h1>
    <button> 🐷🐷 </button> 👉 {initValue}
  </div>
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue="10"></Counter>
      <Counter title="입장객 카운터" initValue="20"></Counter>
    </div>
  );
}

export default App;
