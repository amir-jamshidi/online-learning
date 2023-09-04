import TitleSection from "./../TitleSection/TitleSection";
import Card from "./../Card/Card";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
const CardSection = () => {
  const { roadMap } = useContext(MainContext);
  console.log(roadMap);
  return (
    <section className="section-index card-section">
      <div className="container">
        <div className="row">
          <TitleSection color='purple' title='نقشه راه'  subTitle='خودتو بروز کن'/>
          {roadMap.map((road) => (
            <Card key={road.id}  {...road}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
