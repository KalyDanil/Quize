import { IQuestionData } from '../../../../types';
import { QuestionAndAnswerStyle } from './QuestionAndAnswerStyle';

const QuestionAndAnswer: React.FC<IQuestionData> = ({
  id,
  question,
  answers,
}) => {
  const rightAnswer = answers.find((item) => item.isRight);
  const selectedAnswer = answers.find((item) => item.isSelected);
  const isWithRightAnswer = rightAnswer?.answer === selectedAnswer?.answer;
  return (
    <QuestionAndAnswerStyle>
      <div className="questionAndAnswer__question">
        {isWithRightAnswer ? (
          <img
            className="questionAndAnswer__checkMark"
            src="/assets/icons/checkMark.svg"
            alt="checkMark"
          />
        ) : (
          <img
            className="questionAndAnswer__cross"
            src="/assets/icons/cross.svg"
            alt="checkMark"
          />
        )}
        {question}
      </div>
      {isWithRightAnswer ? (
        <div className="questionAndAnswer__answer questionAndAnswer__answer-rigth">
          {rightAnswer?.answer}
        </div>
      ) : (
        <>
          <div className="questionAndAnswer__answer questionAndAnswer__answer-wrong">
            {selectedAnswer?.answer}
          </div>
          <div className="questionAndAnswer__answer questionAndAnswer__answer-rigth">
            {rightAnswer?.answer}
          </div>
        </>
      )}
    </QuestionAndAnswerStyle>
  );
};

export default QuestionAndAnswer;
