/* eslint-disable react/prop-types */
const Button = ({ label, bgColor, onClick }) => {
  return (
    <button
      className={`w-full ${bgColor} hover:bg-yellow-500 font-bold py-1 rounded-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
