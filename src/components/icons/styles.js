import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ fill, theme }) => fill || theme.neutral};

    &:hover {
      fill: ${({ theme }) => theme.primary};
    }
  }
`;
