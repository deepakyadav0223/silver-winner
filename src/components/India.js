import React from "react";
import PropTypes from "prop-types";
import us_g1 from "./photo/ind1.png";
import us_g from "./photo/ind2.png";

export default function India(props) {
  return (
    <>
      <div className="container usa-main">
      <h4>India Electric Vehicle Policies</h4>
      <hr/>
        <div className="usa1">
          <h6>
            To assist the acceptance of electric vehicles (EVs) in the country,
            the central government has announced a number of promotional
            measures in the previous ten years, including tax incentives for
            electric vehicle owners, public EV charging infrastructure
            development, and so on. <br />
            Timeline for various initiatives taken by policymakers and
            regulators:
          </h6>

          <div>
            <h3>
              1.Faster Adoption and Manufacturing of (Hybrid and) Electric
              Vehicles (FAME) – I and II:
            </h3>
            <p>
              FAME, or Faster Adoption and Manufacturing of (Hybrid and)
              Electric vehicles, is currently India’s flagship scheme for
              promoting electric mobility. It was launched by DHI in 2015.
              Currently in its 2nd phase of implementation, FAME-II is being
              implemented for a period of 3 years, eff. 1st April 2019 with a
              budget allocation of 10,000 Cr which includes a spillover from
              FAME-I of Rs 366 Cr.
            </p>
            <p>
              The Department of Heavy Industries has also sanctioned 2636
              charging stations in 62 cities across 24 States/UTs under FAME
              India scheme phase II.
            </p>
            <h3>Phased Manufacturing Programme (PMP)</h3>
            <p>
              To boost electric mobility and promote development of electric
              vehicles, a phased manufacturing roadmap has been developed,
              taking into account the current state of the manufacturing
              ecosystem in the country, in which indigenous manufacturing of
              electric vehicles, their assemblies/sub-assemblies, and
              parts/sub-parts/inputs of the sub-assemblies will be promoted over
              time through a graded duty structure. The goal is to significantly
              boost value addition and capacity building in the country.
            </p>
            <h3>2.National Mission on Transformative Mobility and Storage:</h3>
            <p>
              The aim of the mission is to drive strategies for transformative
              mobility and Phased Manufacturing Programmes for electric
              vehicles, electric vehicle Components and Batteries. Following are
              the key roles, roadmap and anticipated impact envisaged under the
              mission:
              <br />
              Role:
            </p>
            <ul>
              <li>
                Drive strategies for transformative mobility and Phased
                Manufacturing Programmes for electric vehicles, electric vehicle
                Components and Batteries
              </li>
              <li>
                Creating a Phased Manufacturing Program (PMP) to localize
                production across the entire electric vehicle value chain
              </li>
              <li>
                Details of localization will be finalized by the Mission with a
                clear Make in India strategy for the electric vehicle components
                as well as battery
              </li>
              <li>
                The Mission will coordinate with key stakeholders in Ministries/
                Departments/states to integrate various initiatives to transform
                mobility in India
              </li>
            </ul>
            <p>Roadmap:</p>
            <ul>
              <li>
                Phased battery manufacturing roadmap with initial focus on
                large-scale module and pack assembly plants by 2019-20 and
                Gigascale integrated cell manufacturing by 2021- 22
              </li>
              <li>
                Ensuring holistic and comprehensive growth of the battery
                manufacturing industry in India through PMP
              </li>
              <li>
                Preparing roadmap for enabling India to leverage its size and
                scale to produce innovative, competitive multi-modal mobility
                solutions that can be deployed globally in diverse contexts
              </li>
              <li>
                Roadmap for transformative mobility in “New India” by
                introducing a sustainable mobility ecosystem and fostering
                Make-in-India
              </li>
            </ul>
            <p>Impact:</p>
            <ul>
              <li>
                Drive mobility solutions to benefits to the industry, economy
                and country
              </li>
              <li>
                Improving air quality in cities along with reducing India’s oil
                import dependence and enhancing the uptake of renewable energy
                and storage solutions
              </li>
              <li>
                The Mission will lay down the strategy and roadmap which will
                enable India to leverage upon its size and scale to develop a
                competitive domestic manufacturing ecosystem for electric
                mobility
              </li>
              <li>
                Benefit all citizens as the aim is to promote ‘Ease of Living’
                and enhance the quality of life of our citizens and also provide
                employment opportunities through ‘Makein-India’ across a range
                of skill sets
              </li>
            </ul>
          </div>
          <div className="us-tab">
            <table>
              <tr>
                <th>Year</th>
                <th>No. of ev sold</th>
              </tr>
              <tr>
                <td>2015</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>4588</td>
              </tr>
            </table>
            <div className="us-im1">
              <img src={us_g1} alt="graph" />
            </div>
          </div>
          <p>Electric vehicle (EV) sales in India are witnessing significant growth as the country focuses on promoting sustainable transportation. The Indian government has implemented various initiatives to accelerate EV adoption, including financial incentives, tax benefits, and subsidies. Furthermore, the development of charging infrastructure across major cities and highways is facilitating convenient charging for EV owners.</p>
          <div className="uss">
          <div className="us-im1">
              <img src={us_g} alt="graph" />
            </div>
            <table>
              <tr>
                <th>Year</th>
                <th>No. of ev sold</th>
              </tr>
              <tr>
                <td>2015</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>4588</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
