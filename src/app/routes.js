import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home/home";
import { Project } from "../pages/project/project";
import { ContactUs } from "../pages/contact/contact";
import { About } from "../pages/about/about";
import { Socialicons } from "../components/socialicons/socialicon";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Skills } from "../pages/Skills/Skills";


const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
