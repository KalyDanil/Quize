import { IAnswersBoxProps } from '../../../types';
import Answer from './Answer';
import { AnswersBoxStyle } from './AnswersBoxStyle';

const AnswersBox: React.FC<IAnswersBoxProps> = ({
  questionsData,
  questionNumber,
  setQuestionsData,
}) => {
  if (questionsData.length === 0) {
    return <></>;
  }

  const answerList = questionsData[questionNumber].answers.map(
    (item, index) => (
      <Answer
        questionId={questionsData[questionNumber].id}
        answer={item.answer}
        isRight={item.isRight}
        isSelected={item.isSelected}
        questionsData={questionsData}
        setQuestionsData={setQuestionsData}
        key={index}
      />
    ),
  );

  return <AnswersBoxStyle>{answerList}</AnswersBoxStyle>;
};

export default AnswersBox;
