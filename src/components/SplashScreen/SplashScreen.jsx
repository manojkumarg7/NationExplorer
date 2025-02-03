import React from "react";
import "./SplashScreenStyle.css";
import Button from "react-bootstrap/Button";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const SplashScreen = () => {
  return (
    <div className="splash-screen-wrapper vh-100 d-flex justify-content-center align-items-center text-center">
      <div>
        <h1 className="fw-bold text-light pt-2">Welcome to</h1>
        <p className="display-3 d-block d-lg-none fw-bold  text-light">
          NationExplorer!{" "}
        </p>
        <p className="display-1 d-none d-lg-block fw-bold  text-light">
          NationExplorer!{" "}
        </p>

        <Link to="/searchcomp" reloadDocument={true}>
          <Button
            variant="primary"
            className="d-block d-sm-none mx-auto  mt-3"
            size="sm"
          >
            Unlock the world’s wonders <MdArrowForwardIos />
          </Button>
        </Link>

        <Link to="/searchcomp" reloadDocument={true}>
          <Button variant="primary" className="d-sm-block d-none mx-auto mt-3">
            Unlock the world’s wonders
            <MdArrowForwardIos />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
