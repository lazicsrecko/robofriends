import React, { useState, useEffect } from 'react';
import './App.css';
import 'tachyons';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');


  //Loads robots from API

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setRobots(data));
  }, []);

  const filteredRobots = () => {
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
    return filteredRobots;
  }


  // Filter out robots depends on user inputs
  // useEffect(() => {
  //   const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
  //   setRobots(filteredRobots); 
  // },[searchfield]);

  if (robots.length === 0) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={event => setSearchfield(event.target.value)} />
        <Scroll>
          <CardList robots={filteredRobots()} />
        </Scroll>
      </div>
    )
  }
}

export default App;