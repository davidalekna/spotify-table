import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  outline: 1px dashed orange;
  fill: ${({ fill }) => fill || 'white'};
`;
