import React from 'react';
import { Block, BlockLink, BlockHeading } from '../styles';

const MenuBlock = ({ heading, list }) => (
  <Block>
    {heading && <BlockHeading>{heading}</BlockHeading>}
    {list.map((child, index) => (
      <BlockLink to={child.link} key={index}>
        {child.title}
      </BlockLink>
    ))}
  </Block>
);

export default MenuBlock;
