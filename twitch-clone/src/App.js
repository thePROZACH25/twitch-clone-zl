import "./App.css";
import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";
import Body from "./componets/Body"

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__main'> 
      <Sidebar />
      <Body />
      </div>
    </div>
  );
}

export default App;
