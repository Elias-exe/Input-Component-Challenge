import styled from 'styled-components';

export default styled.input`
  width: 100%;
  max-width: 200px;
  height: 56px;
  padding: 12px 18px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  transition: border-color 0.2s ease-in;
  outline: none;
  font-family: 'Noto Sans', sans-serif;
  color: ${({ theme }) => theme.colors.gray[3]};
  border-radius: 8px;

  &:hover{
    border-color: red;
  }

`;
