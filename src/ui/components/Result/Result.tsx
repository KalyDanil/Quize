import { IResultProps } from '../../../types';
import QuestionsBox from './QuestionsBox';
import { ResultStyle } from './ResultStyle';

const Result: React.FC<IResultProps> = ({ questionsData }) => {
  const quesntionNumber = questionsData.length;
  const correctAnswersNumber = questionsData.reduce((sum, item) => {
    if (item.answers.find((answer) => answer.isSelected && answer.isRight)) {
      return sum + 1;
    }
    return sum;
  }, 0);
  return (
    <ResultStyle>
      <div className="result__header">
        Результат {correctAnswersNumber}/{quesntionNumber}
      </div>
      <QuestionsBox />
    </ResultStyle>
  );
};

export default Result;
