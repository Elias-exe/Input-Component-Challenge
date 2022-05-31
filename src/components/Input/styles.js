import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;

    span{
      font-size: 10px;
      margin-top: 4px;
      color: ${({ theme }) => theme.colors.gray[3]};
    }

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

    span{
      color:${({ theme }) => theme.colors.red[1]};
    }
`)}


`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth && '100%') || (!fullWidth && '200px')};;
  height: ${({ size }) => (size === 'sm' && '40px')
  || (size === 'md' && '56px')
};
  padding: 12px 18px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  transition: border-color 0.2s ease-in;
  outline: none;
  font-family: 'Noto Sans', sans-serif;
  color: ${({ theme }) => theme.colors.gray[3]};
  border-radius: 8px;

&:disabled{
  background: ${({ theme }) => theme.colors.gray[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[5]};;

  &:hover{
    border: 1px solid ${({ theme }) => theme.colors.gray[5]};;
  }
}
`;

export const InputWithIcon = styled.div`
  position: relative;

${({ startIcon }) => startIcon && css`
  i{
    position: absolute;
    top: 16px;
    left: 12px;
    color: ${({ theme }) => theme.colors.gray[3]};
  }

  input{
    padding-left:45px;
  }
`}

${({ endIcon }) => endIcon && css`
  i{
    position: absolute;
    top: 16px;
    right: 11px;
    color: ${({ theme }) => theme.colors.gray[3]};
  }
`}
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  max-width: 200px;
  padding: 12px 18px;
  resize: none;

  &:hover{
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.colors.gray[1]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue[1]};

      +label {
        color:${({ theme }) => theme.colors.blue[1]};
      }
  }
`;
