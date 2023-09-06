import styled from 'styled-components';

export const QuestionAndAnswerStyle = styled.div`
  margin-bottom: 20px;
  .questionAndAnswer {
    &__question {
      font-weight: 600;
      font-size: 18px;
    }

    &__checkMark {
      width: 20px;
      height: auto;
    }

    &__cross {
      width: 15px;
      height: auto;
      margin-right: 5px;
    }

    &__answer {
      padding-left: 20px;

      &-rigth {
        color: green;
        text-decoration: underline;
      }

      &-wrong {
        color: red;
        text-decoration: line-through;
      }
    }
  }
`;
