import { ButtonBoxStyle } from "./ButtonBoxStyle";

const ButtonBox: React.FC = () => {

  return (
    <ButtonBoxStyle>
     <button className="buttonBox__button">Назад</button>
    <button className="buttonBox__button">Далее</button>
    </ButtonBoxStyle>
  );
};

export default ButtonBox;