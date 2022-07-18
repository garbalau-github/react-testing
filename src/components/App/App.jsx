import { useState, useEffect } from 'react';
import List from '../List/List';
import Search from '../Search/Search';
import './App.css';

// Dummy Data
const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJS',
];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  // Simple filtering
  useEffect(() => {
    setItems(
      data.filter((el) => el.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <div>
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:
      </Search>
      <List items={items} />
    </div>
  );
}

export default App;
