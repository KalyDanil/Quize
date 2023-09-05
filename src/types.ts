export interface IButtonBoxPros {
  questionNumber: number;
  setQuestionNumber: (questionNumber: number) => void;
}

export interface IAnswer {
  answer: string;
  isRight: boolean;
  isSelected: boolean;
}

export interface IAnswerProps {
  questionId: string;
  answer: string;
  isRight: boolean;
  isSelected: boolean;
  questionsData: IQuestionData[];
  setQuestionsData: (questionsData: IQuestionData[]) => void;
}

export interface IQuestionData {
  id: string;
  question: string;
  answers: Array<IAnswer>;
}

export interface IAnswersBoxProps {
  questionsData: IQuestionData[];
  setQuestionsData: (questionsData: IQuestionData[]) => void;
  questionNumber: number;
}

export interface IResultProps {
  questionsData: IQuestionData[];
}
