
import { WrapBtn, Btn } from "./FeedbackButton.styled";
import PropTypes from 'prop-types'; 

const FeedbackButton = ({ options, onClickBtn }) => {
    return (
      <WrapBtn>
        {options.map(el => {
          return (
            <Btn onClick={onClickBtn} key={el} type="button" value={el}>
              {el}
            </Btn>
          );
        })}
      </WrapBtn>
    );
  };
  
  export default FeedbackButton;

  FeedbackButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickBtn: PropTypes.func.isRequired,
  };