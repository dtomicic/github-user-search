import { useState } from 'react';
import './assets/main.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');

  const searchUser = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <Header />
      <Search search={searchUser}/>
    </div>
  );
}

export default App;
