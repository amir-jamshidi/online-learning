import { SiFrontify } from "react-icons/si";

const Card = ({id , colorStart , colorEnd , icon , title}) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
      <div className="index-cards" style={{background:`linear-gradient(to left ,${colorStart},${colorEnd})`}}>
        <div className="index-card-content">
          <span>
            <SiFrontify className="index-card-icon" />
          </span>
          <span className="index-card-title">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
