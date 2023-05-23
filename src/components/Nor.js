import React from "react";
import PropTypes from "prop-types";
import nor_g1 from "./photo/nor_g1.jpg";
import us_g from "./photo/us_g.jpg";

export default function Nor(props) {
  return (
    <>
      <div className="container usa-main">
      <h4>Norway Electric Vehicle Policies</h4>
      <hr/>
        <div className="usa1">
          <h6>
            The current schemes and measures taken by the government of Norway
            is pushing the country to become the first in the world in terms of
            zero emission country. The country has devised different measure to
            cope up with the electric transition. The incentives have been
            gradually introduced by different governments and broad coalitions
            of parties since the early 1990s to speed up the transition. These
            have discussed below.
          </h6>
          <ul>
            <li>
              The Norwegian car tax system: The purchase tax for all new cars
              with emissions is calculated by a combination of weight, CO2 and
              NOx emissions. The tax is progressive, making big cars with high
              emissions very expensive. For the last years, the purchase tax has
              been adjusted gradually to have more emphasis on emissions and
              less on weight. From a long time the Electric vehicles have been
              exempted from the VAT tax of 25% within a range of 500,000 Krones
              which has substantially improved the sales of the EVs.
            </li>
            <li>
              The Parliament has agreed on a national rule which means that
              counties and municipalities cannot charge more than 70 % of the
              price for fossil fuel cars on toll roads. Within the rule there
              are local differences. EVs pay maximum 50% of the total amount on
              ferry fares for electric vehicles
            </li>
            <li>
              Norway introduced a special E-Number plate for EVs which gives
              authorities the possibility to choose local incentives such as
              free parking, using bus lanes based on these number plates. It
              also helps increasing awareness of clean vehicles on the roads.
              Since 2016, Norwegian municipalities have the authority to
              determine fees and exemption categories.
            </li>
          </ul>
          <div className="us-tab">
            <table>
              <tr>
                <th>Year</th>
                <th>% share of EVs</th>
              </tr>
              <tr>
                <td>2009</td>
                <td>0.1</td>
              </tr>
              <tr>
                <td>2010</td>
                <td>0.28</td>
              </tr>
              <tr>
                <td>2011</td>
                <td>1.4</td>
              </tr>
              <tr>
                <td>2012</td>
                <td>3.1</td>
              </tr>
              <tr>
                <td>2013</td>
                <td>5.8</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>22</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>39</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>49</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>56</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>75</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>86</td>
              </tr>
            </table>
            <div className="us-im1">
              <img src={nor_g1} alt="graph" />
            </div>
          </div>

          <ul>
            <li>
              Norway introduced a special E-Number plate for EVs which gives
              authorities the possibility to choose local incentives such as
              free parking, using bus lanes based on these number plates. It
              also helps increasing awareness of clean vehicles on the roads.
              Since 2016, Norwegian municipalities have the authority to
              determine fees and exemption categories.
            </li>
            <li>
              Norway expanded budget for EVSE deployment. The 2018 budget
              allocated to housing associations for installing chargers doubles
              the 2017 budget to NOK 20 million (EUR 2.1 million).
            </li>
            <li>
              The Norwegian Parliament has decided on a national goal that all
              new cars sold by 2025 should be zero-emission (electric or
              hydrogen). By end of 2022, more than 20 percent of registered cars
              in Norway were battery electric (BEV).
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
}
