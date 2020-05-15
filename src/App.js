import React, { Component } from 'react';
import logo from './images/isotipo-blanco.png';
import './App.css';



//Components
import Counter from './components/Counter/Counter'
import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

const data = [
  {
    category: 'Programing',
    title: 'JS',
    description: 'Programming languages',
    author: 'Fernanda',
    publicationDate: '2017-23-12',
    readTime: '2 min'
  },
  {
    category: 'Programing 2',
    title: 'JS',
    description: 'Programming languages',
    author: 'Fernanda',
    publicationDate: '2017-23-12',
    readTime: '2 min'
  },
  {
    category: 'Programing 3',
    title: 'JS',
    description: 'Programming languages',
    author: 'Fernanda',
    publicationDate: '2017-23-12',
    readTime: '2 min'
  }
]


export default class App extends Component {

  _renderCards() {
    return data.map(({
      category,
      title,
      description,
      author,
      publicationDate,
      readTime
    }) => (
        <Card
          category={category}
          title={title}
          description={description}
          author={author}
          publicationDate={publicationDate}
          readTime={readTime}
        />
      ))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp white -<strong>React</strong>
          </h1>
          <Counter/>
          <Clock />
        </header>
        <div className="cards-container" >
          {this._renderCards() }
        </div>
       
      </div>
    );
  }
}





























// export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }