import React, { FC } from 'react';
import { Hero } from './organisms';
import { Layout } from './templates';

const App: FC = () => (
  <>
    <Layout>
      <Hero />
    </Layout>
  </>
);

export default App;
