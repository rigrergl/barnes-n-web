import PropTypes from "prop-types";

type Props = {
  color: string;
  text: string;
};

const Button = (props: Props) => {
  return (
    <button style={{ backgroundColor: props.color }} className="btn">
      {props.text}
    </button>
  );
};

export default Button;
