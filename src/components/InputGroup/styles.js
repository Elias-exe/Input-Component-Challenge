import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;

  p{
    font-size: 12px;
    margin-bottom: 16px;
    color:${({ theme }) => theme.colors.gray[1]};
  }
`;

export const StyledInput = styled.div`
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

${({ error }) => error && (css`
  input{
        transition: all 0.3s ease;
        border: 1px solid ${({ theme }) => theme.colors.red[1]};
        display: block;
        padding: 8px 14px;
        width: 100%;

        &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.red[1]};

          +label {
          color:${({ theme }) => theme.colors.red[1]};
            }
          }
        }
    label{
      color:${({ theme }) => theme.colors.red[1]};
    }
`)}

`;
