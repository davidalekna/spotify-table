import React from 'react';
import { Block, BlockItem, BlockHeading } from '../styles';

const MenuBlock = ({ heading, children }) => (
  <Block>
    {heading && <BlockHeading>{heading}</BlockHeading>}
    {React.Children.map(children, child => (
      <BlockItem>{child}</BlockItem>
    ))}
  </Block>
);

export default MenuBlock;
