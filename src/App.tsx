import React from "react";
import logo from "./logo.svg";
import { AnimatePresence } from "framer-motion";
import "./styles/app.scss";
import {
  BrowserRouter,
  Link,
  Route,
  HashRouter,
  Routes,
  useRoutes,
  useLocation,
} from "react-router-dom";
import { MainPage } from "./Components/Page/MainPage";
import { AboutPage } from "./Components/Page/AboutPage";
import { SkillPage } from "./Components/Page/SkillPage";
import { ContactPage } from "./Components/Page/ContactPage";
import { AboutMePage } from "./Components/Page/AboutMePage";

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
  ]);
  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
  // return (
  //   <AnimatePresence mode="wait">
  //     <HashRouter>
  //       <Routes>
  //         <Route path="/" element={<MainPage />} />
  //         <Route path="/about_me" element={<AboutPage />} />
  //         <Route path="/skill" element={<SkillPage />} />
  //       </Routes>
  //     </HashRouter>
  //   </AnimatePresence>
  // );
};

export default App;
