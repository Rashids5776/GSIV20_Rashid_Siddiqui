import React from 'react';
import List from './List';
import Appbarr from './Appbarr';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from './Details';


class App extends React.Component{

constructor(props) {
  super(props);
    
  this.state = {
    movies: [],
    query: ''
  };
    
  this.onInput = this.onInput.bind(this);
}

onInput(query) {
  if(query.target.value !== "") {
  this.setState({
    query
  });
  
  this.searchMovie(query.target.value);
  }
  else {

    this.getUpcomingMovies();

  }
}

getUpcomingMovies() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=494719e581ff21674c6ec386bc636b04`;
  
  fetch (url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.results
      })
    });
}

searchMovie(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=494719e581ff21674c6ec386bc636b04`;
  
  fetch (url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.results
      })
    });
}

componentDidMount() {
  this.getUpcomingMovies();
}

render() {

  const { movies, query } = this.state;
  
  if(movies.length > 0){

  const isSearched = query => item => !query || item.title.toLowerCase().includes(query.target.value.toLowerCase());

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <div className="App">
        <Appbarr onInput={this.onInput}></Appbarr>
          <div className="list">
        <List movies={movies.filter(isSearched(query))} />
        </div>
        </div>
        </Route>
        <Route path='/details/:id' component={Details}></Route>
      </Switch>
    </Router>
  );

  }

  else {

    return (
      <div></div>
    );

  }

  }
}

export default App;
