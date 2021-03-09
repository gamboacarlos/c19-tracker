import React, { FC } from 'react';
import { AppContext } from '../contexts/DataContext';
import { HomePage } from './pages';

const App: FC = () => (
  <AppContext>
    <HomePage />
  </AppContext>
);

export default App;
