import { MdTipsAndUpdates } from "react-icons/md";

const InfoSection = ({ color, title, subTitle }) => {
  return (
    <div className="col-12 col-md-6 col-lg-6">
      <div className="index-info-card">
        <div className="index-info-card-img">
          <span>
            <MdTipsAndUpdates
              className="index-info-card-img-icon"
              style={{color}}
            />
          </span>
        </div>
        <div className="index-info-card-title">
          <p className="index-info-card-name">{title}</p>
          <p className="index-info-card-sub-title">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
