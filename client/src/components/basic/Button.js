import "./index.css";

const Button = ({ color = 'steelblue', text = 'Button', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
