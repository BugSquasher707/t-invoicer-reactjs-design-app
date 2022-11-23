import React, { Fragment } from "react";
import "./TableSection.css";
import { Row, Col } from "react-bootstrap";
import RenderedData from "./RenderedData/RenderedData";
import { Data } from "./Api";

const TableSection = () => {
  return (
    <Fragment>
      <div className="tableMainDiv d-lg-block d-none">
        <Row className="p-0 m-0 tableRow1">
          <Col
            xl={1}
            lg={1}
            md={1}
            sm={2}
            xs={2}
            className="p-0 d-flex justify-content-start align-items-center"
          >
            <input type="checkbox" disabled className="checkBoxInp" />

            <p className="tableHeadPara">id</p>
          </Col>

          <Col
            lg={3}
            md={3}
            sm={3}
            xs={3}
            className="p-0 d-flex justify-content-start align-items-center"
          >
            <p className="tableHeadPara" style={{ padding: "0px 1rem" }}>
              Business
            </p>
          </Col>

          <Col
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="p-0 d-flex justify-content-start align-items-center"
          >
            <p className="tableHeadPara">Due Date</p>
          </Col>

          <Col
            lg={1}
            md={1}
            sm={1}
            xs={1}
            className="p-0 d-flex justify-content-start align-items-center"
          >
            <p className="tableHeadPara">Amount</p>
          </Col>

          <Col
            lg={2}
            md={2}
            sm={1}
            xs={1}
            className="p-0 d-flex justify-content-center align-items-center"
          >
            <p className="tableHeadPara">Status</p>
          </Col>

          <Col
            lg={3}
            md={3}
            sm={3}
            xs={3}
            className="p-0 d-flex justify-content-start align-items-center"
          >
            <p className="tableHeadPara">Options</p>
          </Col>
        </Row>

        {Data.map((ele, i) => {
          return <RenderedData key={i} item={ele} />;
        })}
      </div>
    </Fragment>
  );
};

export default TableSection;
