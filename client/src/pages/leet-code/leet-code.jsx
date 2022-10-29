import "./leet-code-style.scss";
import SideBar from "../../components/side-bar/side-bar";
import ProblemStatement from "../../components/problem-statement/problem-statement";

const LeetCode = () => {
  return (
    <div className="programcontainer">
      <SideBar />
      <ProblemStatement></ProblemStatement>
    </div>
  );
};

export default LeetCode;
