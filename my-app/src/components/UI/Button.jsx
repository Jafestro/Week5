import PropTypes from "prop-types";

const Button = ({ text, className, ...props }) => {
  return (
    <button
      className={`m-3 mt-0 p-3 border-2 rounded-lg bg-stone-500 text-stone-100 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
