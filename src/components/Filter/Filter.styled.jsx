import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FilterInput = styled.input`
  width: 160px;
  :focus-visible {
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
  }
`;
