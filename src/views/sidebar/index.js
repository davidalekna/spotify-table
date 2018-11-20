import React from 'react';
import { Wrapper } from './styles';
import MenuBlock from './components/MenuBlock';
import menu from './menu';

const Sidebar = () => (
  <Wrapper>
    {menu.map((block, index) => (
      <MenuBlock key={index} heading={block.heading}>
        {block.list}
      </MenuBlock>
    ))}
  </Wrapper>
);

export default Sidebar;
