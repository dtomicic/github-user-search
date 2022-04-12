import { useEffect, useState } from 'react';
import './assets/main.css';
import Box from './components/Box';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');
  const [octocat, setOctocat] = useState([]);
  const [user, setUser] = useState([]);
  const [hidden, setHidden] = useState('hidden');

  const searchUser = (e) => {
    setSearch(e.target.value);
  }

  const fetchUser = async() => {
    const response = await fetch(`https://api.github.com/users/${search}`);
    const data = await response.json();
    setUser(data);
    console.log(search);
  }

  return (
    <div className="App">
      <Header />
      <Search search={searchUser} user={fetchUser} />
      <Box user={user} setHidden={setHidden} hidden={hidden} />
    </div>
  );
}

export default App;
