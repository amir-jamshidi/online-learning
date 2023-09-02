import { BsFillPlayFill } from "react-icons/bs";
import Card from "../Components/Card/Card";
import InfoSection from "../Components/InfoSection/InfoSection";
import SingleCourse from "../Components/SingleCourse/SingleCourse";

import "../Styles/Index.css";
import TitleSection from "./../Components/SingleCourse/TitleSection";
import LastCourseSlider from "./../Components/LastCourseSlider/LastCourseSlider";
import SingleArticle from './../Components/SingleArticle/SingleArticle';


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
        <div className="index-box-color"></div>
        <div className="container">
          <div className="row">
            <TitleSection />

            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
          </div>
        </div>
      </section>

      <section className="section-index">
        <div className="container">
          <div className="row">
            <TitleSection />

            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section className="section-index">
        <div className="container">
          <div className="row">
            <TitleSection />

            <InfoSection />
            <InfoSection />
            <InfoSection />
            <InfoSection />
          </div>
        </div>
      </section>

      <section className="section-index">
        <div className="container">
          <div className="row">
            <TitleSection />
            <LastCourseSlider />
          </div>
        </div>
      </section>

      <section className="section-index">
        <div className="container">
          <div className="row">
            <TitleSection />

            <SingleArticle/>
            <SingleArticle/>
            <SingleArticle/>
            <SingleArticle/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
