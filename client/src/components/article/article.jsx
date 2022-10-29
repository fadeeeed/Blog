import "./article-style.scss";

const Article = ({ dataObject }) => {
  return (
    <div className="article-container">
      <div className="title">{dataObject.title}</div>
      <div className="description">{dataObject.description}</div>
    </div>
  );
};

export default Article;
