import "./text-area-style.scss";

const TextArea = ({ handleTextChange }) => {
  return (
    <textarea
      name=""
      id=""
      cols="100"
      rows="20"
      className="text-area"
      onChange={handleTextChange}
    ></textarea>
  );
};

export default TextArea;
