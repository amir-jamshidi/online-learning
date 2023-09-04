const TitleSection = ({ color, title, subTitle, link }) => {
  return (
    <div className="col-12">
      <div className="title-section">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="title-section-title-parent">
              <span className="point" style={{ backgroundColor: color }}></span>
              <h3 className="title-section-title">{title}</h3>
            </div>
            <p className="title-section-sub-title">{subTitle}</p>
          </div>

          {link && (
            <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center">
              <a href="" className="title-section-link">
                {link}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
