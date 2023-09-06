import { IResultProps } from '../../../types';
import QuestionAndAnswer from './QuestionAndAnswer';
import { ResultStyle } from './ResultStyle';

const Result: React.FC<IResultProps> = ({ questionsData }) => {
  const quesntionNumber = questionsData.length;
  const correctAnswersNumber = questionsData.reduce((sum, item) => {
    if (item.answers.find((answer) => answer.isSelected && answer.isRight)) {
      return sum + 1;
    }
    return sum;
  }, 0);

  const questionAndAnswerList = questionsData.map((item, index) => (
    <QuestionAndAnswer
      id={item.id}
      question={item.question}
      answers={item.answers}
    />
  ));

  return (
    <ResultStyle>
      <div className="result__header">
        Результат {correctAnswersNumber}/{quesntionNumber}
      </div>
      <div className="result__list">{questionAndAnswerList}</div>
    </ResultStyle>
  );
};

export default Result;
