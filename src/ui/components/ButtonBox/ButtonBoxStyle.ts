import styled from 'styled-components';

export const ButtonBoxStyle = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  .buttonBox {
    &__button {
      width: 70px;
      padding: 5px 5px 5px 5px;
      font-size: 20px;
      border: none;
      background-color: #a96ad4;
      color: white;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
