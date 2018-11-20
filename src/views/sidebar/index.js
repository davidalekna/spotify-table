import React from 'react';
import { Wrapper, NewPlaylistWrapper } from './styles';
import MenuBlock from './components/MenuBlock';
import menu from '../main/routes';

const Sidebar = () => (
  <Wrapper>
    {menu.map((block, index) => (
      <MenuBlock key={index} heading={block.heading} list={block.list} />
    ))}
    <NewPlaylistWrapper>New Playlist</NewPlaylistWrapper>
  </Wrapper>
);

export default Sidebar;
