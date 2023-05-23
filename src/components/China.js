import React from "react";
import PropTypes from "prop-types";
import us_g1 from "./photo/chi1.png";
import us_g from "./photo/chi2.png";

export default function China(props) {
  return (
    <>
      <div className="container usa-main">
      <h4>China Electric Vehicle Policies</h4>
      <hr/>
        <div className="usa1">
        <h6>The government started granting subsidies to EV buyers in 2010, to level the price difference with combustion vehicles, and to support commercialisation. Originally set to stop at the end of 2020, the subsidy was extended to 2022 due to the pandemic and its economic impact.<br/>An even stronger policy would be to ban the sale of combustion vehicles. This is a controversial matter in China but local governments could lead the way.<br/>China’s policymakers planned to phase out the subsidies at the end of 2022 and instead impose a mandate on car manufacturers. Simply stated, the mandate requires that a certain percent of all vehicles sold by a manufacturer each year must be battery-powered.</h6>
          <ul>
            <li>Import of at least 12% EV in 2020</li>
            <li>Subsidies of $3600 to EV of range over 400Km</li>
            <li>Subsidies of $2600 to EV of range 250-400Km.</li>
            <li>No subsidies to EV with range less than 250 Km.</li>
            <li>50% exemption of vehicle registration fees</li>
            <li>Deployment of 120000 charging stations.</li>
            <li>Chinese electricity board and south china electricity board giving subsidized electricity to charging stations.</li>
          </ul>
          <p>Local Govt Bodies</p>
          <ul>
            <li>Free and preferential parking space.</li>
            <li>Transition of local taxi fleet to EV.</li>
          </ul>

          <div className="us-tab">
            <table>
                <tr>
                    <th>Year</th>
                    <th>RoW</th>
                    <th>China</th>
                </tr>
                <tr>
                    <td>2018</td>
                    <td>817</td>
                    <td>755</td>
                </tr>
                <tr>
                <td>2019</td>
                    <td>1092</td>
                    <td>1004</td>
                </tr>
                <tr>
                <td>2020</td>
                    <td>1560</td>
                    <td>1175</td>
                </tr>
                <tr>
                <td>2021</td>
                    <td>1880</td>
                    <td>1932</td>
                </tr>
                <tr>
                <td>2022</td>
                    <td>2284</td>
                    <td>2869</td>
                </tr>
                <tr>
                <td>2023</td>
                    <td>2888</td>
                    <td>3764</td>
                </tr>
                <tr>
                <td>2024</td>
                    <td>3443</td>
                    <td>4557</td>
                </tr>
                <tr>
                <td>2025</td>
                    <td>4220</td>
                    <td>4753</td>
                </tr>
            </table>
            <div className="us-im1">
              <img src={us_g1} alt="graph" />
            </div>
            </div>
            <p>In this graph, the Production units of evs have been mentioned. The Chinese government has initially provided subsidies to develop the infrastructure for electric vehicles. Later on by 2022, the government decided to reduce the subsidies to reduce the burden on the government. Further due to this, there has been a constant rise in the production of evs in China which is greater than even the rest of the world. </p>
            <div className="uss">
            <table>
                <tr>
                    <th>Year</th>
                    <th>No. of charging stations</th>
                </tr>
                <tr>
                    <td>2012</td>
                    <td>17000</td>
                </tr>
                <tr>
                <td>2013</td>
        
                    <td>25000</td>
                </tr>
                <tr>
                <td>2014</td>
                    <td>30000</td>
        
                </tr>
                <tr>
                <td>2015</td>
                    <td>60000</td>
                </tr>
                <tr>
                <td>2016</td>
                    <td>150000</td>
            
                </tr>
                <tr>
                <td>2017</td>
                    <td>210000</td>
        
                </tr>
                <tr>
                <td>2018</td>
                    <td>300000</td>
                
                </tr>
            </table>
                <div className="us-im1">
              <img src={us_g} alt="graph" />
            </div>
            </div>
            <p>With the rise in subsidies, the charging infrastructure saw a tremendous rise in its numbers. The constant support from the government led to such a rise. In 20212 only 17000 charging stations were there in China but due to consistent support from the government in the form of refined policies the numbers jumped to 300,000 in 2018 and facilities have improved. </p>
          </div>
        </div>
    </>
  );
}
