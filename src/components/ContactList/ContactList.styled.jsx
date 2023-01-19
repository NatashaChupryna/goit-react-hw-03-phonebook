import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;
`;
export const Button = styled.button`
    padding: 4px 8px;
    border-radius: 10px;
    border: none;
    background-color: #a1a3ab;
    font-size: 14px;
    cursor: pointer;
    transition: all 300ms;
    :hover{
        background-color :#516aed;
        color: white;} 
`
export const Item = styled.li`
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        width: 270px;
`