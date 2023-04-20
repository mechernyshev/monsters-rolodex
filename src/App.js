import { useState, useEffect} from "react";


import CardList from "./components/card-list/card-list.component";
import searchBoxComponent from "./components/search-box/search-box.component";
import './App.css';
import {render} from "@testing-library/react";
import SearchBox from "./components/search-box/search-box.component";


const App = () => {
    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)
    console.log(searchField)

    // use empty dependencies array for running only once
    useEffect(() => {
        console.log('Fetching monsters data, Effect fired')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setMonsters(users))
    }, [])

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        })
        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)

    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder='Search Monsters'
                className='monsters-search-box'
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}

export default App;

