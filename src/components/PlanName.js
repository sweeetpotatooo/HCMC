import React from "react";
import "../style/PlanName.scss";

const PlanName = () => {
  return (
    <div className="PlanNamePage">
      <div className="Subdiv">
        <div className="planname">플랜명</div>
        <div className="plandate">플랜기간</div>
        <div className="plancontent">플랜설명</div>
      </div>
    </div>
  );
};

export default PlanName;
