export default function App() {
  return (
    <div>
      <h1>Click</h1>
      <button onClick={async() => {
        const res = await fetch('http://localhost:3000/');
        console.log(await res.text());
      }}>fetch</button>
    </div>
  );
}