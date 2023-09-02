import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineUser , AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import "../Styles/Index.css";

const Index = () => {
  return (
    <>
      <section className="section-index">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="index-right-title">
                <div>
                  <h1>ما به هر قیمتی</h1>
                  <h1>دوره تولید نمیکنیم !</h1>
                  <p>
                    با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد
                    بگیر و پیشرفت کن
                  </p>
                </div>
                <div className="index-left-btn-parent">
                  <button className="index-right-btn-start">
                    از اینجا شروع کن
                  </button>
                  <div className="index-right-parent">
                    <span className="index-right-btn-play">
                      <BsFillPlayFill />
                    </span>
                    <span className="index-who-we-are">ما کی هستیم ؟</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="index-left-img">
                <img
                  className="index-boy-light"
                  src="/images/boy-light.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-index">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-section">
                <div>
                  <div className="title-section-title-parent">
                    <span className="point"></span>
                    <h3 className="title-section-title">آخرین دوره ها</h3>
                  </div>
                  <p className="title-section-sub-title">
                    سکوی پرتاپ شما به سمت موفقیت
                  </p>
                </div>

                <a href="" className="title-section-link">مشاهده همه دوره ها</a>
              </div>
            </div>

            <div className="col-3">
              <div className="index-last-course-item">
                <img src="/images/react-course.png" alt="" />
                <div className="index-last-course-body">
                    <span className="index-last-course-cate">فرانت اند</span>
                    <p className="index-last-course-title">آموزش تخصصی React JS</p>
                    <p className="index-last-course-sub-title">
                    ‌کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار کار هم از کتابخانه های مختلفی برای توسعه پروژه‌ها…
                    </p>
                    <div className="index-last-icons-parent">
                      <div className="index-last-icons-content">
                      <div className="index-last-icon-teacher">
                          <AiOutlineUser className="index-last-icon"/>
                          <span className="index-last-icon-title">امیرجمشیدی</span>
                        </div>
                        <div className="index-last-icon-time">
                          <BiTimeFive className="index-last-icon"/>
                          <span className="index-last-icon-title">39:38</span>
                        </div>
                      </div>
                       
                       <div>
                        <span className="index-last-icon-title star-text">5.0</span>
                       <AiFillStar className="star-icon"/>
                       </div>

                    </div>
                    <hr className="index-last-item-hr" />
                    <div className="index-last-price-parent">
                      <div className="index-last-users">
                          <HiOutlineUsers className="users-icon"/>
                          <span className="index-last-users-count">1093</span>
                      </div>
                      <div className="index-last-price">
                          <span className="index-last-price-title">1,400,000</span>      
                      </div>
                      
                    </div>
                </div>
              </div>
            </div>


              

          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
