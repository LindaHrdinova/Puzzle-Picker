import './App.css';

const response = await fetch('https://myspeedpuzzling.com/api/v1/me/results', {
  headers: {
    Authorization: `Token ${import.meta.env.VITE_API_TOKEN}`,
  },
});

const data = await response.json();

console.log(data);

const App = () => {
  return (
    <>
      <h1>MSP data</h1>
      <h2>Results</h2>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://img.myspeedpuzzling.com/original/ravensburger-cuba-99.jpg"
          width={'400px'}
          style={{ borderRadius: '5%' }}
        />
      </div>
      <ul className="list">
        <li>comment : null </li>
        <li>first_attempt : false</li>
        <li>manufacturer_name : "Ravensburger"</li>
        <li>pieces_count : 99</li>
        <li>puzzle_image : "ravensburger-cuba-99.jpg"</li>
        <li>puzzle_name : "Puzzle Moment: Cuba"</li>
        <li>time_seconds : 292</li>
      </ul>
    </>
  );
};

export default App;
