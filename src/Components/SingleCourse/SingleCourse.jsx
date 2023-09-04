import { AiOutlineUser, AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";

const SingleCourse = ({
  slider,
  id,
  teacher,
  pic,
  title,
  info,
  price,
  star,
  userCount,
  time,
  grouping,
}) => {
  return (
    <div className={slider ? "" : "col-12 col-md-6 col-lg-3"}>
      <div className="index-last-course-item">
        <img src={pic} alt="" />
        <div className="index-last-course-body">
          <span className="index-last-course-cate">{grouping}</span>
          <p className="index-last-course-title">{title}</p>
          <p className="index-last-course-sub-title">{info}</p>
          <div className="index-last-icons-parent">
            <div className="index-last-icons-content">
              <div className="index-last-icon-teacher">
                <AiOutlineUser className="index-last-icon" />
                <span className="index-last-icon-title">{teacher}</span>
              </div>
              <div className="index-last-icon-time">
                <BiTimeFive className="index-last-icon" />
                <span className="index-last-icon-title">{time}</span>
              </div>
            </div>

            <div>
              <span className="index-last-icon-title star-text">{star}</span>
              <AiFillStar className="star-icon" />
            </div>
          </div>

          <hr className="index-last-item-hr" />
          <div className="index-last-price-parent">
            <div className="index-last-users">
              <HiOutlineUsers className="users-icon" />
              <span className="index-last-users-count">{userCount}</span>
            </div>
            <div className="index-last-price">
              <span className="index-last-price-title">{price}</span>
              <img src="/images/toman.svg" className="index-toman-svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
