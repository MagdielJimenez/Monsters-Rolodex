import './App.css';
import { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>this.setState(()=>{
      return {monsters:users}
    }
    ));
  }
  onSearchChange=(event)=>{
   
    const searchField=event.target.value.toLowerCase();

    this.setState(()=>{
      return {searchField};
    });  }
  render() {
    const {monsters,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField)
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Inc.</h1>
        <SearchBox onChangeHandler={SearchBox} placeholder='search monsters' className='monsters-search-box'/>
        {/* <input className='search-box' type='search' placeholder='search monsters' onChange={(event)=>{
          onSearchChange(event)
        }}/> */}
        {/* {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}>
              <h1 >{monster.name}</h1>
            </div>;
          })
        } */}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

}

export default App;
