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
import { LandscapeCheck } from "./Components/Page/LandscapeCheck";
import { isMobile } from "react-device-detect";
import { _404page } from "./Components/Page/_404page";
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
    {
      path: "*",
      element: <_404page />,
    },
  ]);
  const location = useLocation();

  if (!element) return null;
  return (
    <>
      <div className={isMobile ? "checkorientation" : ""}>
        <AnimatePresence mode="wait">
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </div>

      {isMobile && <LandscapeCheck />}
    </>
  );
};

export default App;
