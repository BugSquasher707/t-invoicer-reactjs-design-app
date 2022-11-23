import React, { Fragment } from "react";
import "./TableSectionMob.css";
import { Row, Col } from "react-bootstrap";
import { Data } from "../TableSection/Api";
import RenderedTableMob from "./RenderedTableMob/RenderedTableMob";

const TableSectionMob = () => {
  return (
    <Fragment>
      <div className="tableMainDiv d-lg-none">
        <Row className="m-0 p-0">
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="p-0 tableRow1 d-flex justify-content-start align-items-center"
          >
            <input
              type="checkbox"
              disabled
              className="checkBoxInp checkBoxInp1"
            />

            <p className="tableHeadPara">Invoices</p>
          </Col>
        </Row>

        {Data.map((ele, i) => {
          return <RenderedTableMob key={i} item={ele} />;
        })}
      </div>
    </Fragment>
  );
};

export default TableSectionMob;
