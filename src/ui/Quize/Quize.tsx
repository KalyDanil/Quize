import { QuizeStyle } from "./QuizeStyle";
import Question from "../components/Question";
import Сompleteness from "../components/Сompleteness";
import ButtonBox from "../components/ButtonBox";
import AnswersBox from "../components/AnswersBox";

const Quize: React.FC = () => {

  return (
    <QuizeStyle>
  <Сompleteness/>
  <Question/>
  <AnswersBox/>
  <ButtonBox/>
    </QuizeStyle>
  );
};

export default Quize;