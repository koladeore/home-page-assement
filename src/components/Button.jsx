const Button = ({ text, icon, className = "", onClick }) => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="border border-[#E0E2E6] rounded-full p-2 flex mx-auto justify-center">
        <h1 className="text-gray-500 ml-1 text-2xl font-[700]">{text}</h1>
        <div className="text-2xl">{icon}</div>
      </div>
    </div>
  );
};

export default Button;
