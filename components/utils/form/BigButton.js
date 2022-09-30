import { BigButtonContainer } from '../../../styles/utils.styles';

function BigButton({ children, eventHandler, type }) {
  return (
    <BigButtonContainer onClick={eventHandler} type={type}>
      {children}
    </BigButtonContainer>
  );
}

export default BigButton;
