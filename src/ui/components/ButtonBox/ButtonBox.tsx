import { data } from '../../../mock';
import { IButtonBoxPros } from '../../../types';
import { ButtonBoxStyle } from './ButtonBoxStyle';

const ButtonBox: React.FC<IButtonBoxPros> = ({
  questionNumber,
  setQuestionNumber,
}) => {
  const onBackClick = () => {
    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const onForwardClick = () => {
    if (questionNumber !== data.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  return (
    <ButtonBoxStyle>
      <button className="buttonBox__button" onClick={onBackClick}>
        Назад
      </button>
      <button className="buttonBox__button" onClick={onForwardClick}>
        Далее
      </button>
    </ButtonBoxStyle>
  );
};

export default ButtonBox;
