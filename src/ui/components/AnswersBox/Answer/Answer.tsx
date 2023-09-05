import { IAnswerProps } from '../../../../types';
import { AnswerStyle } from './AnswerStyle';

const Answer: React.FC<IAnswerProps> = ({
  questionId,
  answer,
  isRight,
  isSelected,
  questionsData,
  setQuestionsData,
}) => {
  const onClick = () => {
    const questionsDataCopy = [...questionsData];
    const questionIndex = questionsDataCopy.findIndex(
      (question) => question.id === questionId,
    );
    const questionObj = { ...questionsDataCopy[questionIndex] };
    const answerIndex = questionObj.answers.findIndex(
      (item) => item.answer === answer,
    );
    questionObj.answers[answerIndex].isSelected = !isSelected;
    const answerObj = questionObj.answers[answerIndex];
    answerObj.isSelected = !isSelected;
    if (!isSelected) {
      questionObj.answers.forEach((item) => {
        if (item.answer !== answer) {
          item.isSelected = false;
        }
      });
    }
    setQuestionsData(questionsDataCopy);
  };

  return (
    <AnswerStyle>
      <div
        className={`answer__checkbox ${
          isSelected ? 'answer__checkbox-blue' : ''
        }`}
        onClick={onClick}
      />
      <div>{answer}</div>
    </AnswerStyle>
  );
};

export default Answer;
