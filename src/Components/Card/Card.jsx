import { SiFrontify } from "react-icons/si";

const Card = () => {
  return (
    <div className="col-3">
      <div className="index-cards">
        <div className="index-card-content">
          <span>
            <SiFrontify className="index-card-icon" />
          </span>
          <span className="index-card-title">فرانت اند</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
