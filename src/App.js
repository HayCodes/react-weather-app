import './App.css';
import Sidebar from './component/Sidebar';
import Main from './component/Main';

function App() {
  return (
    <div className="App flex flex-col md:flex-row lg:flex-row min-h-screen">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
