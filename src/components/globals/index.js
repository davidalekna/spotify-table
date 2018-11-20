import styled, { css } from 'styled-components';

const fontStack = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica', 'Segoe',
    sans-serif;
`;

export const H1 = styled.h1`
  ${fontStack};
  color: white;
  font-size: 2em;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  ${fontStack};
  color: white;
  font-weight: 400;
  font-size: 1.4em;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  ${fontStack};
  color: white;
  font-weight: 500;
  font-size: 1.1em;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const H4 = styled.h4`
  ${fontStack};
  color: white;
  font-weight: 400;
  font-size: 0.9em;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H5 = styled.h5`
  ${fontStack};
  color: white;
  font-weight: 500;
  font-size: 0.8em;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H6 = styled.h6`
  ${fontStack};
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.7em;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const P = styled.p`
  ${fontStack};
  color: white;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  ${fontStack};
  color: white;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

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
  grid-template-rows: 1fr 1fr 80px;
  grid-template-columns: 180px 1fr 250px;
  grid-template-areas:
    'sidebar main friends'
    'sidebar main friends'
    'player player player';

  @media (max-width: 1100px) {
    grid-template-areas:
      'sidebar main main'
      'sidebar main main'
      'player player player';
  }
`;
