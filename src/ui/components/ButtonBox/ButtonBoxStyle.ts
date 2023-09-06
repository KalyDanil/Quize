import styled from 'styled-components';

export const ButtonBoxStyle = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  .buttonBox {
    &__button {
      min-width: 70px;
      padding: 5px 5px 5px 5px;
      font-size: 20px;
      border: none;
      background-color: #a96ad4;
      color: white;
      border-radius: 10px;
      cursor: pointer;

      &-disabled {
        opacity: 0.5;
        cursor: unset;
      }
    }
  }
`;
