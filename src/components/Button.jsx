function Button({ text, type, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className=" text-white font-bold w-full rounded-lg py-4 bg-neutral-gray-700 hover:bg-gradient-to-r hover:from-tomato-300 hover:to-tomato-700 hover:drop-shadow-custom"
        type={type}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
