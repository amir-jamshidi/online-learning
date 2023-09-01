import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import routes from "./routes";

const App = () => {
  const appRoutes = useRoutes(routes);

  return (
    <>
      <Header />
      {appRoutes}
    </>
  );
};

export default App;
