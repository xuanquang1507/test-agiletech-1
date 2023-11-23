import React from "react";
import search from "../../image/01 (2).png";
import house from "../../image/2 (2).png";
import print from "../../image/3 (2).png";
import code from "../../image/4 (2).png";

const Features = () => {
  return (
    <div className="features">
      <div className="features-content">
        <h3>Features</h3>
        <p>
          Some of the features and advantages that we provide for those of you{" "}
          <br />
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className="features-slice">
        <div className="features-slice__search">
          <img src={search} alt="search" />
          <div className="features-slice__content">
            <h4>Search Data</h4>
            <p>
              Don’t worry if your data is very large, the Data Warehoue provides
              a search engine, which is useful for making it easier to find data
              effectively saving time.
            </p>
          </div>
        </div>
        <div className="features-slice__search">
          <img src={house} alt="house" />
          <div className="features-slice__content">
            <h4>24 Hours Access</h4>
            <p>
              Access is given 24 hours a full morning to night and meet again in
              the morning, giving you comfort when you need data when urgent.
            </p>
          </div>
        </div>
        <div className="features-slice__search">
          <img src={print} alt="print" />
          <div className="features-slice__content">
            <h4>Print Out</h4>
            <p>
              Print out service gives you convenience if someday you need print
              data, just edit it all and just print it.
            </p>
          </div>
        </div>
        <div className="features-slice__search">
          <img src={code} alt="code" />
          <div className="features-slice__content">
            <h4>Security Code</h4>
            <p>
              Data Security is one of our best facilities. Allows for your files
              to be safer. The file can be secured with a code or password that
              you created, so only you can open the file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
