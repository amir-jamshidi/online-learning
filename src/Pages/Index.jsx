import { BsFillPlayFill } from "react-icons/bs";
import Card from "../Components/Card/Card";
import InfoSection from "../Components/InfoSection/InfoSection";

import "../Styles/Index.css";
import TitleSection from "../Components/TitleSection/TitleSection";
import LastCourseSlider from "./../Components/LastCourseSlider/LastCourseSlider";
import SingleArticle from "./../Components/SingleArticle/SingleArticle";
import ParentColorBox from "./../Components/ParentColorBox/ParentColorBox";
import LastCoursesSection from "../Components/LastCoursesSection/LastCoursesSection";
import CardSection from "../Components/CardSection/CardSection";

const Index = () => {
  return (
    <>
      <section className="section-index first-section">
        <ParentColorBox
          property={{ left: -450, top: "0px", backgroundColor: "green" }}
        />
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <div className="index-right-title">
                <div className="w-100">
                  <h1 className="text-center mb-0 index-h1-title">
                    ما به هر قیمتی
                  </h1>
                  <h1 className="text-center index-h1-title">
                    دوره تولید نمیکنیم !
                  </h1>
                  <p className="w-100 text-center font index-left-sub-title">
                    با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد
                    بگیر و پیشرفت کن
                  </p>
                </div>
                <div className="index-left-btn-parent w-100 d-flex justify-content-center justify-content-lg-start">
                  <button className="index-right-btn-start">
                    از اینجا شروع کن
                  </button>
                  <div className="index-right-parent">
                    <span className="index-right-btn-play">
                      <BsFillPlayFill className="index-play-icon" />
                    </span>
                    <span className="index-who-we-are">ما کی هستیم ؟</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
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

      <LastCoursesSection />

      <CardSection />

      <section className="section-index">
        <div className="container">
          <div className="row">
            <TitleSection />

            <InfoSection color='#4A79E9' title='دوره های اختصاصی' subTitle='با پشتیبانی و کیفیت بالا ارائه میده. چون خوش نام بودن نام برند و منافع مشتری و حفظ شان دیگر همکارانش براش مهمه'/>
            <InfoSection color='#2EC56E' title='اجازه تدریس' subTitle='به هر مدرسی رو نمیده و فقط فقط با مدرسای سینیور و مید لول وارد همکاری میشه چون کیفیت براش مهمه'/>
            <InfoSection  color='#C59912' title='دوره پولی یا رایگان' subTitle='براش مهم نیست. به مدرسینش بهترین مزایا و دستمزد رو میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده'/>
            <InfoSection  color='#D63C5A' title='اولویت بندی به ترتیب منافع' subTitle='در سبزلرن اولویت اول با مدرس هست چون اون قراره دل بسوزونه. اولویت دوم با کاربره چون باید کمکش کرد و درنهایت اولویت آخر با سبزلرنه'/>
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

            <SingleArticle />
            <SingleArticle />
            <SingleArticle />
            <SingleArticle />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
