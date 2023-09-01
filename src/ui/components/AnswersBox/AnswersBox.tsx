import Answer from "../Answer";
import { AnswersBoxStyle } from "./AnswersBoxStyle";

const AnswersBox: React.FC = () => {

  return (
    <AnswersBoxStyle>
      <Answer/>
    </AnswersBoxStyle>
  );
};

export default AnswersBox;