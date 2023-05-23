import React from "react";
import PropTypes from "prop-types";
import us_g from "./photo/jap.png";

export default function Japan(props) {
  return (
    <>
      <div className="container usa-main">
      <h4>Japan Electric Vehicle Policies</h4>
      <hr/>
        <div className="usa1">
          <h6>
            Japan takes proactive measures to promote electric vehicles (EVs).
            It offers incentives, expands charging infrastructure, collaborates
            with automakers, implements stricter emissions standards, supports
            research, and develops EV-friendly policies. Furthermore, Japan
            invests in renewable energy, fosters international cooperation, and
            conducts awareness campaigns to encourage widespread adoption of
            EVs.
          </h6>
          <ul>
            <li>
              Promotion of electric vehicles (EVs) through subsidies and tax
              incentives.
            </li>
            <li>Expansion of charging infrastructure across the country.</li>
            <li>
              Collaboration with automakers to develop advanced EV technologies.
            </li>
            <li>
              Implementation of stricter emission standards for vehicles to
              encourage EV adoption.
            </li>
            <li>
              Support for research and development of EV batteries and other key
              components.
            </li>
            <li>
              Introduction of EV-friendly policies in local governments, such as
              preferential parking and toll discounts.
            </li>
            <li>
              Encouragement of public and private sector collaboration to
              accelerate the growth of EV market.
            </li>
          </ul>
          <div className="uss">
            <div className="cont">
              <p>
              EV sales in Japan are thriving due to government targets, streamlined processes, automaker collaborations, rental/ride-sharing integration, a growing second-hand market, fast-charging infrastructure, fleet adoption, consumer awareness, and a wide range of EV models available across vehicle segments.
              </p>
            </div>
            <div className="us-im1">
              <img src={us_g} alt="graph" />
            </div>
          </div>
          <ul>
            <li>
            Awareness campaigns and educational programs to inform the public about the benefits of EVs and eco-friendly transportation. 
            </li>
            <li>
            Investment in renewable energy sources to power EVs.
            </li>
            <li>
            International cooperation and partnerships to promote EV adoption and standardization.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
