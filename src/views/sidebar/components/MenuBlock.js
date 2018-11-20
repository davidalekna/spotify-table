import React from 'react';
import { Block, BlockLink, BlockHeading } from '../styles';

const MenuBlock = ({ heading, list }) => (
  <Block>
    {heading && <BlockHeading>{heading}</BlockHeading>}
    {list.map((child, index) => (
      <BlockLink key={index} to={child.link} exact>
        {child.title}
      </BlockLink>
    ))}
  </Block>
);

export default MenuBlock;
