import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Root = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background: rgba(23, 23, 23, 1);
  grid-template-columns: 220px 1fr 280px;
  grid-template-rows: 65px 1fr 1fr 100px;
  grid-template-areas:
    'sidebar main friends'
    'sidebar main friends'
    'sidebar main friends'
    'player player player';
`;
