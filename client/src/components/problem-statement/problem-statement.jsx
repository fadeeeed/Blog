import "./problem-statement-style.scss";

const ProblemStatement = () => {
  return (
    <div className="problemcontainer">
      <code>
        <span className="big-text">
          Find Subsets<br></br>
        </span>
        <span className="des-text">
          Problem Statement: <br></br>{" "}
        </span>
        <span className="description">
          Given an integer array nums of unique elements, return all possible
          subsets (the power set). The solution set must not contain duplicate
          subsets. Return the solution in any order.
        </span>
      </code>
    </div>
  );
};

export default ProblemStatement;
