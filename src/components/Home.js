import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import us_g1 from "./photo/ev1.jpg";
import us_g2 from "./photo/hm1.jpeg";
export default function (props) {
  return (
    <>
      <div className="container home">
        <div className="sh2">
        <div className="p2">
            <img src={us_g2} alt="graph" />
          </div>
          <div className="q2">
            <h5>
            Net zero pledges refer to the commitments made by countries to achieve a state where their greenhouse gas emissions are balanced by the removal of an equivalent amount from the atmosphere. Many countries have made such pledges as part of their efforts to combat climate change. These pledges involve transitioning to renewable energy sources, promoting energy efficiency, implementing sustainable practices, and investing in technologies to reduce emissions. By aiming for net zero emissions, countries seek to mitigate the impacts of climate change and contribute to a more sustainable future for the planet. Collaboration among nations and the implementation of comprehensive policies and strategies are crucial to achieving these ambitious net zero goals.
            </h5>
          </div>
        </div>
        <h5 className="pp1"> Explore key policies and measures for EV deployment....<br/>China, the USA, Germany, the UK, France, Norway, Italy,
              Switzerland, the Netherlands, Sweden, Australia, Austria, Canada,
              Spain, Italy, New Zealand, and Japan are the leading countries in
              EV acceptance.</h5>
      </div>
    </>
  );
}
