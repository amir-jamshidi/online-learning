import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import MainContext from "./Contexts/MainContext";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import routes from "./routes";

const App = () => {
  const appRoutes = useRoutes(routes);

  const [lastCourses, setLastCourses] = useState([]);
  const [roadMap, setRoadMap] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    let responseApi = await fetch("http://localhost:4000/api");
    let responseData = await responseApi.json();
    setLastCourses(responseData.lastCourses);
    setRoadMap(responseData.roadMap);
  };

  return (
    <>
      <MainContext.Provider
        value={{
          lastCourses,
          roadMap
        }}
      >
        <Header />
        {appRoutes}
        <Footer />
      </MainContext.Provider>
    </>
  );
};

export default App;
