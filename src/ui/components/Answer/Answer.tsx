import { AnswerStyle } from "./AnswerStyle";

const Answer: React.FC = () => {

  return (
    <AnswerStyle>
      <div className="answer__checkbox"/>
      <div>Answer</div>
    </AnswerStyle>
  );
};

export default Answer;