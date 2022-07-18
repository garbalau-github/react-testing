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

  return (
    <div>
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:
      </Search>
      <List items={data} />
    </div>
  );
}

export default App;
