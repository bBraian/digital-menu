import { Home } from './screens/Home';
import { braianbar } from './data/braianbar';

function App() {
  return (
    <div className="App">
      {braianbar.map(bar => {
        console.log(bar)
        return (
          <Home key={bar.id} bar={bar} />
        )
      })}
      
    </div>
  );
}

export default App;
