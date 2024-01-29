import Sidebar from './component/Sidebar';
import Main from './component/Main';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="App flex flex-col md:flex-row lg:flex-row min-h-screen">
      <Sidebar onSearchChange={handleOnSearchChange}/>
      <Main />
    </div>
  );
}

export default App;
