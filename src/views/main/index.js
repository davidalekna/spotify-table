import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';

const Wrapper = styled.div`
  grid-area: main;
  overflow-x: auto;
`;

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
