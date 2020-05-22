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
        titlle={'kodemia modulo 3'}
        description={'AQUI APRENDEREMOS REACT JS'}
        />
      </div>
      </div>
    );
  }


export default Home