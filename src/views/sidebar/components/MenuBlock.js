import React from 'react';
import { Block, BlockLink, BlockHeading } from '../styles';
import { truncate } from 'src/helpers/utils';

const MenuBlock = ({ heading, list }) => (
  <Block>
    {heading && <BlockHeading>{heading}</BlockHeading>}
    {list.map((child, index) => (
      <BlockLink key={index} to={child.path} exact>
        {truncate(child.title, 20)}
      </BlockLink>
    ))}
  </Block>
);

export default MenuBlock;
