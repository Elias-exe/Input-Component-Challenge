import styled from 'styled-components';

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

export const InputContainer = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-right: 156px;
  gap: 156px;
`;
