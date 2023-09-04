import { QuizeStyle } from './QuizeStyle';
import Question from '../components/Question';
import Сompleteness from '../components/Сompleteness';
import ButtonBox from '../components/ButtonBox';
import AnswersBox from '../components/AnswersBox';
import { useEffect, useState } from 'react';
import { data } from '../../mock';
import { IQuestionData } from '../../types';

const Quize: React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsData, setQuestionsData] = useState<IQuestionData[] | []>([]);

  useEffect(() => {
    setQuestionsData(data);
  }, [data]); // eslint-disable-line

  return (
    <QuizeStyle>
      <Сompleteness questionNumber={questionNumber} />
      <Question question={data[questionNumber].question} />
      <AnswersBox
        questionsData={questionsData}
        questionNumber={questionNumber}
        setQuestionsData={setQuestionsData}
      />
      <ButtonBox
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </QuizeStyle>
  );
};

export default Quize;
