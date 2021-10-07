import CalenderReport from './component/Calender';
import { CalenderType } from './models/calender';

function App() {
  return (
    <div className="App">
      <CalenderReport id="test" type={CalenderType.ThisWeek} />
    </div>
  );
}

export default App;
