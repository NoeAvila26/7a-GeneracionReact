import React from 'react';

//Components
import Header from '../../components/Header';

//CSS
import './Home.css'

function Home() {
    return (
      <div className='Container'>
      <div>
        <Header
        titlle={'kodemis modulo 3'}
        description={'aqui aprenderemos react js'}
        />
      </div>
      </div>
    );
  }


export default Home;