import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  margin-left: 81px;

  footer{
    color: ${({ theme }) => theme.colors.gray[6]};
    font-size: 14px;
  }
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.gray[2]};
  margin-bottom: 65px;
`;
