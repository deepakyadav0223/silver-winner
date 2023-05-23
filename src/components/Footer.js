import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Footer(params) {
    return(
        <div className="foot">
            <div className="s1">
            <Link to="Japan" className="btn">
                        India
                      </Link>
                      <Link to="Japan" className="btn">
                        Japan
                      </Link>
                      <Link to="Japan" className="btn">
                        USA 
                      </Link>
            </div>
            <div className="s2">
            <Link to="Japan" className="btn">
                        China
                      </Link>
                      <Link to="Japan" className="btn">
                        Norway
                      </Link>
            </div>
        </div>
    )
};
