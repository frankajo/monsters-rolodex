import { Component } from 'react';

//The components created by the developer
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  //Using The LifeCircle Method componentDidMout to Consume an API of monsters card
 //'https://jsonplaceholder.typicode.com/users'

 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      this.setState(() => {
        return {monsters:users}
      })
    })
 }

 onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();

  this.setState(() => {
    return {searchField}
  });
}
 
  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filtteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (     
      <div className="App">

        <h1 className='app-tittle'>Monsters Rolodex</h1>
{/* instroducing our search box functionality */}
         
           <SearchBox 
           className = 'monsters-search-box'
           placeholder = 'search monsters'
           onChangeHandler={onSearchChange} />

           <CardList monsters={filtteredMonsters} />
        </div>
    );  
  }
  
  
}
export default App;




