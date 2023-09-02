import { MdTipsAndUpdates } from "react-icons/md";

const InfoSection = () => {
  return (
    <div className="col-6">
      <div className="index-info-card">
        <div className="index-info-card-img">
          <span>
            <MdTipsAndUpdates className="index-info-card-img-icon" />
          </span>
        </div>
        <div className="index-info-card-title">
          <p className="index-info-card-name">دوره های اختصاصی</p>
          <p className="index-info-card-sub-title">
            با پشتیبانی و کیفیت بالا ارائه میده. چون خوش نام بودن نام برند و
            منافع مشتری و حفظ شان دیگر همکارانش براش مهمه
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
