import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Wrapper } from './styles';
import routes from './routes';

const Main = () => (
  <Wrapper>
    <Suspense fallback={null}>
      <Switch>
        {routes.map(section =>
          section.list.map((route, index) => <Route key={index} {...route} />),
        )}
      </Switch>
    </Suspense>
  </Wrapper>
);

export default Main;
