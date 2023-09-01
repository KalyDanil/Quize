import styled from 'styled-components';

export const СompletenessStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50px;
.completeness {
  &__base {
    width: 90%;
    height: 15px;
    background-color: #CCCCCC;
    border-radius: 10px;
  }
  &__line {
    width: 80%;
    height: 15px;
    background-color: #4b66dc;
    border-radius: 10px;
  }
}
`