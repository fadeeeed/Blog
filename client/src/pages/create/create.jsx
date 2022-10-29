import "./create-style.scss";
import { useState } from "react";
import TextArea from "./components/text-area/text-area";

const Create = () => {
  const [categoryValue, setCategoryValue] = useState("AWS");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCategoryChanges = (event) => {
    setCategoryValue(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Category:</label>
        <select value={categoryValue} onChange={handleCategoryChanges}>
          <option value="terraform">Terraform</option>
          <option value="aws">AWS</option>
          <option value="react">React</option>
        </select>
      </div>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" onChange={handleTitleChange} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <TextArea handleTextChange={handleTextChange}></TextArea>
      </div>
      <div className="form-group">
        <button title="Submit">Send for Approval</button>
      </div>
    </form>
  );
};

export default Create;
