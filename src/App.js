import { useState } from 'react';
import './App.css';
import { Users } from './users';
 
function App() {
  console.log(Users);
  const [query, setQuery] = useState("");
  console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")));
  return (
    <div className="App">
      <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Searcccchs,...' className='search'/>
      <ul className='list'>
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user) => (
          <li key={user.id} className='listItem'>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
