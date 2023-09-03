import { AiOutlineUser } from "react-icons/ai";
import { CiViewTimeline } from "react-icons/ci";

const SingleArticle = ()=>{
    return(
        <div className="col-12 col-mg-6 col-lg-3 mb-3 mb-lg-0">
        <div className="index-article-parent">
          <img
            className="index-article-img"
            src="/images/article.jpg"
            alt=""
          />
          <div className="index-article-content">
            <h4 className="index-article-title">نصب پایتون در ویندوز</h4>
            <p className="index-article-sub-title">
            چطوری باید جاوا اسکریپت رو بر روی اندروید نصب کنیم ؟ همونطور که می‌دونید در دنیای برنامه نویسی همانند دنیای واقعی، با زبان‌های بسیاری روبه‌رو هستیم. یکی از محبوب‌ترین زبان‌های برنامه‌نویسی، زبان برنامه نویسی جاوا اسکریپت است. در این مقاله قصد داریم نحوه نصب جاوا اسکریپت در اندروید رو بررسی کنیم.
            </p>
            <div className="index-last-icons-content">
              <div className="index-last-icon-teacher">
                <AiOutlineUser className="index-last-icon" />
                <span className="index-last-icon-title">امیرجمشیدی</span>
              </div>
              <div className="index-last-icon-time">
                <CiViewTimeline className="index-last-icon" />
                <span className="index-last-icon-title">39:38</span>
              </div>
            </div>
            <hr className="index-last-item-hr" />
            <p className="index-article-show">مطالعه مقاله</p>
          </div>
        </div>
      </div>
    )
}

export default SingleArticle