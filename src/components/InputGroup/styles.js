import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .input-infos{
    display: flex;
    flex-direction: column-reverse;

      label {
        transition: all 0.3s ease;
        display: inline-block;
        margin-bottom: 4px;
    }

  input:hover{
    border-color: ${({ theme }) => theme.colors.gray[1]};
  }

  input{
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.colors.gray[3]};
    display: block;
    padding: 8px 14px;
    width: 100%;

  &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.blue[1]};

      +label {
        color:${({ theme }) => theme.colors.blue[1]};
      }
    }
  }
}
  p{
    margin-bottom: 16px;
    font-family: 'Ubuntu Mono', sans-serif;
    font-size: 12px;
  }

`;
