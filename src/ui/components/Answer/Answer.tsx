import { IAnswerProps } from '../../../types';
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
      (question) => (question.id = questionId),
    );
    const question = questionsDataCopy[questionIndex];
    const answerIndex = question.answers.findIndex(
      (item) => (item.answer = answer),
    );
    question.answers[answerIndex].isSelected = !isSelected;
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
