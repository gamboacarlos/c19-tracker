import React, { FC } from 'react';
import { Titulo } from './atoms';

const App: FC = () => (
  <>
    <h1>React Ready</h1>
    <img src={require('../../public/images/logo.png')} alt="logo" />
    <img src={require('../../public/images/nologo.png')} alt="logo" />
    <Titulo>C19</Titulo>
  </>
);

export default App;
