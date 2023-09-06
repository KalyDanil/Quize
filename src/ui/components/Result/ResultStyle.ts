import styled from 'styled-components';

export const ResultStyle = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
  .result {
    &__header {
      width: 100%;
      height: 70px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #c77824;
      color: white;
      font-size: 25px;
    }

    &__list {
      width: 95%;
      height: 300px;
      padding: 5px 5px 5px 5px;
      margin-left: auto;
      margin-right: auto;
      overflow: auto;
    }
  }
`;
