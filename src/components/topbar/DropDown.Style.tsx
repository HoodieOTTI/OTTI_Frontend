import styled from 'styled-components';

export const Dropdown = styled.div`
position: absolute
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid black;
`;

// export const DropdownSelect = styled.select`
//   width: 100%;
//   padding-left: 20px;
//   border-bottom: 0.5px solid black;
//   font-size: 20px;
//   padding-top: 36px;
//   padding-bottom: 20px;
//   appearance: none;
//   background-color: #fff;
//   outline: none;
//   cursor: pointer;
//   font-weight: 400;
// `;

export const DropdownSelect = styled.select`
  border: none;
  padding-left: 20px;
  border: none;
  font-size: 20px;
  padding-top: 18px;
  margin-top: 18px;
  padding-bottom: 22px;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  background-color: #fff;
`;
