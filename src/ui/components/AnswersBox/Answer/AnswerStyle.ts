import styled from 'styled-components';

export const AnswerStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
  .answer {
    &__checkbox {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      border-radius: 50%;
      background-color: #cccccc;
      cursor: pointer;

      &-blue {
        background-color: #3d85c6;
      }
    }
  }
`;
