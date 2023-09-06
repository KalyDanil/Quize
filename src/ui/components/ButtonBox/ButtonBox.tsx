import { useMemo } from 'react';
import { data } from '../../../mock';
import { IButtonBoxPros } from '../../../types';
import { ButtonBoxStyle } from './ButtonBoxStyle';

const ButtonBox: React.FC<IButtonBoxPros> = ({
  questionNumber,
  setQuestionNumber,
}) => {
  const isResult = useMemo(() => {
    if (questionNumber === data.length) {
      return true;
    }
    return false;
  }, [questionNumber, data]);

  const backIsDisabled = useMemo(() => {
    if (questionNumber === 0) {
      return true;
    }
    return false;
  }, [questionNumber, data]);

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
      {isResult ? (
        <button
          className="buttonBox__button"
          onClick={() => window.location.reload()}
        >
          Начать заново
        </button>
      ) : (
        <>
          <button
            className={`buttonBox__button ${
              backIsDisabled ? 'buttonBox__button-disabled' : ''
            }`}
            onClick={onBackClick}
            disabled={backIsDisabled}
          >
            Назад
          </button>
          <button className="buttonBox__button" onClick={onForwardClick}>
            Далее
          </button>
        </>
      )}
    </ButtonBoxStyle>
  );
};

export default ButtonBox;
