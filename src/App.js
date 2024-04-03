import {useState, useEffect } from 'react';

//The components created by the developer
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

// The Functional Component start here to conver our App to functional coponent
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filtteredMonsters, setFiltteredMonsters] = useState(monsters);

  console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, []);

  useEffect(() => {
    const newfiltteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFiltteredMonsters(newfiltteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      };

  return(
    <div className="App">

    <h1 className='app-tittle'>Monsters Rolodex</h1>
     
       <SearchBox 
       className = 'monsters-search-box'
       placeholder = 'search monsters'
       onChangeHandler={onSearchChange} 
        />
  
       <CardList monsters={filtteredMonsters} />
    </div>
  )
}

export default App;




