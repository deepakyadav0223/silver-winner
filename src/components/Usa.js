import React from "react";
import PropTypes from "prop-types";
import us_g1 from "./photo/us_g1.jpg";
import us_g from "./photo/us_g.jpg";

export default function Usa(props) {
  return (
    <>
      <div className="container usa-main">
      <h4>USA Electric Vehicle Policies</h4>
      <hr/>
        <div className="usa1">
        <h6>The Government of USA has been working constantly to promote the production and sales for the electric vehicles. The government has opted for different policies and approach for carrying out this transition. </h6>
          <ul>
            <li>$5 billion grant for setting up of charging stations across 7500 mile of highways.</li>
            <li>$7 Billion funding to support battery manufacturing.</li>
            <li>Additional $2000 rebate towards purchase of new EV in virginia</li>
            <li>Clean school bus programme(100% of replacement cost can be granted).</li>
            <li>Due to coming of Tesla demand of ev has inceased rapidly.</li>
            <li>Due to introduction of NEVI(National electric vehicle infrastructure) program interests towards EV has increased rapidly.</li>
            <li>100000 chargers have been installed and goal of expanding it to 500000 chargers have been taken up by U.S government.</li>
          </ul>
          <div className="us-tab">
            <table>
                <tr>
                    <th>State</th>
                    <th>No. of charging points</th>
                </tr>
                <tr>
                    <td>California</td>
                    <td>26,219</td>
                </tr>
                <tr>
                    <td>New York</td>
                    <td>4,541</td>
                </tr>
                <tr>
                    <td>Texas</td>
                    <td>4,497</td>
                </tr>
                <tr>
                    <td>Florida</td>
                    <td>4,096</td>
                </tr>
                <tr>
                    <td>Washington</td>
                    <td>3,016</td>
                </tr>
                <tr>
                    <td>Georgia</td>
                    <td>2,910</td>
                </tr>
                <tr>
                    <td>Colorado</td>
                    <td>2,440</td>
                </tr>
                <tr>
                    <td>Massachusetts</td>
                    <td>2,376</td>
                </tr>
                <tr>
                    <td>Missouri</td>
                    <td>2,029</td>
                </tr>
                <tr>
                    <td>Illinois</td>
                    <td>1,933</td>
                </tr>
                <tr>
                    <td>Maryland</td>
                    <td>1,919</td>
                </tr>
            </table>
            <div className="us-im1">
              <img src={us_g1} alt="graph" />
            </div>
            </div>
            <div className="uss">
                <div className="cont"><p>In 2022, more than 750,000 new all-electric cars were registered in the US, which was 57 percent more than in 2021 and 5.6 percent of the total market. Meanwhile, the total market decreased 11 percent year-over-year to 13.6 million units, according to Experian.</p>
</div>
                <div className="us-im1">
              <img src={us_g} alt="graph" />
            </div>
            </div>
            <div className="last">
                <ul>
                    <li></li>
                </ul>
            </div>
          </div>
        </div>
    </>
  );
}
