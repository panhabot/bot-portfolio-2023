import React from "react";
import { AnimatePresence } from "framer-motion";
import "./styles/app.scss";
import { useRoutes, useLocation } from "react-router-dom";
import { MainPage } from "./Components/Page/MainPage";
import { AboutPage } from "./Components/Page/AboutPage";
import { SkillPage } from "./Components/Page/SkillPage";
import { ContactPage } from "./Components/Page/ContactPage";
import { AboutMePage } from "./Components/Page/AboutMePage";
import { MenuPage } from "./Components/Page/MenuPage";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/about_me",
      element: <AboutPage />,
    },
    {
      path: "/skill",
      element: <SkillPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/more_me",
      element: <AboutMePage />,
    },
    {
      path: "/menu",
      element: <MenuPage />,
    },
  ]);
  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default App;
