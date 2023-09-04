import { QuestionStyle } from './QuestionStyle';

const Question: React.FC<{ question: String }> = ({ question }) => {
  return (
    <QuestionStyle>
      <div>{question}</div>
    </QuestionStyle>
  );
};

export default Question;
