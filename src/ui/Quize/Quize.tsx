import { QuizeStyle } from './QuizeStyle';
import Question from '../components/Question';
import Сompleteness from '../components/Сompleteness';
import ButtonBox from '../components/ButtonBox';
import AnswersBox from '../components/AnswersBox';
import { useEffect, useState } from 'react';
import { data } from '../../mock';
import { IQuestionData } from '../../types';
import Result from '../components/Result';

const Quize: React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsData, setQuestionsData] = useState<IQuestionData[] | []>([]);

  useEffect(() => {
    setQuestionsData(data);
  }, [data]);

  return (
    <QuizeStyle>
      <Сompleteness questionNumber={questionNumber} />
      {questionNumber !== questionsData.length ? (
        <>
          {' '}
          <Question question={data[questionNumber].question} />
          <AnswersBox
            questionsData={questionsData}
            questionNumber={questionNumber}
            setQuestionsData={setQuestionsData}
          />
        </>
      ) : (
        <>
          <Result questionsData={questionsData} />
        </>
      )}
      <ButtonBox
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </QuizeStyle>
  );
};

export default Quize;
