import ParentColorBox from "./../ParentColorBox/ParentColorBox";
import TitleSection from "../TitleSection/TitleSection";
import SingleCourse from "./../SingleCourse/SingleCourse";
import { useContext } from "react";
import MainContext from "./../../Contexts/MainContext";
const LastCoursesSection = () => {
  const { lastCourses } = useContext(MainContext);

  return (
    <section className="section-index courses-section">
      <ParentColorBox
        property={{ right: -450, top: "280px", backgroundColor: "red" }}
      />
      <div className="container">
        <div className="row">
          <TitleSection link='نمایش همه دوره ها' color='green' title='آخرین آپدیت ها' subTitle='سکوی موفقیت شما'/>
          {lastCourses.map(course =>(
            <SingleCourse key={course.id} {...course}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastCoursesSection;
