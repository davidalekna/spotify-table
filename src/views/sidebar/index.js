import React from 'react';
import { Wrapper } from './styles';
import MenuBlock from './components/MenuBlock';
import menu from '../main/routes';

const Sidebar = () => (
  <Wrapper>
    {menu.map((block, index) => (
      <MenuBlock key={index} heading={block.heading} list={block.list} />
    ))}
  </Wrapper>
);

export default Sidebar;
