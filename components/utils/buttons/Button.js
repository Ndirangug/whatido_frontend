import { ButtonContainer } from '../../../styles/utils.styles';

function Button({ name, inLine, evenHandler, id }) {
  return (
    <ButtonContainer id={id} inLine={inLine} onClick={evenHandler} className="">
      {name}
    </ButtonContainer>
  );
}

export default Button;
