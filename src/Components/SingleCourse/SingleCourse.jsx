import { AiOutlineUser , AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";

const SingleCourse = ({slider}) => {
  return (
    <div className={slider ? '' : 'col-12 col-md-6 col-lg-3'}>
      <div className="index-last-course-item">
        <img src="/images/react-course.png" alt="" />
        <div className="index-last-course-body">
          <span className="index-last-course-cate">فرانت اند</span>
          <p className="index-last-course-title">آموزش تخصصی React JS</p>
          <p className="index-last-course-sub-title">
            ‌کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار کار
            هم از کتابخانه های مختلفی برای توسعه پروژه‌ها…
          </p>
          <div className="index-last-icons-parent">
            <div className="index-last-icons-content">
              <div className="index-last-icon-teacher">
                <AiOutlineUser className="index-last-icon" />
                <span className="index-last-icon-title">امیرجمشیدی</span>
              </div>
              <div className="index-last-icon-time">
                <BiTimeFive className="index-last-icon" />
                <span className="index-last-icon-title">39:38</span>
              </div>
            </div>

            <div>
              <span className="index-last-icon-title star-text">5.0</span>
              <AiFillStar className="star-icon" />
            </div>
          </div>
          
          <hr className="index-last-item-hr" />
          <div className="index-last-price-parent">
            <div className="index-last-users">
              <HiOutlineUsers className="users-icon" />
              <span className="index-last-users-count">1093</span>
            </div>
            <div className="index-last-price">
              <span className="index-last-price-title">1,400,000</span>
              
              <img src="/images/toman.svg" className="index-toman-svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
