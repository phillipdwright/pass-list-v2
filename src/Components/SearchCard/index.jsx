import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Moment from "react-moment";

export default ({ id, options }) => {
  const [modalOpen, setModal] = useState(false);
  const toggle = () => setModal(!modalOpen);

  return (
    <Fragment>
      <Modal isOpen={modalOpen} toggle={toggle} className="modal-lg">
        <ModalHeader toggle={toggle}>Asset Option JSON Data</ModalHeader>
        <ModalBody>
          <pre style={{ height: 500, width: "100%", overflowY: "auto" }}>
            {JSON.stringify(options[0], null, 2)}
          </pre>
        </ModalBody>
      </Modal>
      <div
        className="card results-card"
        style={{ flexGrow: 1, margin: 8 }}
        key={id}
      >
        <span
          className="badge"
          style={{
            float: "right",
            display: "inline",
            position: "absolute",
            right: 5,
            top: 5,
            fontWeight: "normal",
            background: "rgb(159, 212, 183)"
          }}
        >
          Est. Value: ${options[0].extrinsicValueSubtotal}
        </span>
        <img
          style={{
            height: 200,
            width: "100%",
            display: "block",
            borderRadius: "3px 3px 0px 0px"
          }}
          src={`https://cms.inspirato.com/ImageGen.ashx?image=${
            options[0].content.coverImageUrl
          }`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">
            {getValueFromTag(options[0].tags, "Property")}
          </h6>
          <div
            className="text-muted"
            style={{ fontSize: "12px", marginBottom: 10 }}
          >
            {options[0].assetOptionName}
          </div>
          <div className="text-center">
            {getValueFromTag(options[0].tags, "SuggestedOccupancy")}{" "}
            <small className="text-muted">Guests</small>
            {" · "}
            {getValueFromTag(options[0].tags, "Bedrooms")}{" "}
            <small className="text-muted">Bedrooms</small>
            {" · "}
            {daysBetween(options[0].startDateTime, options[0].endDateTime)}{" "}
            <small className="text-muted">Nights</small>
          </div>
          <div className="card-text">{getAmenityList(options[0].tags)}</div>
        </div>
        <div className="card-footer" style={{ padding: 5 }}>
          <div
            className="text-center text-muted"
            style={{
              padding: "15px 0px 0px 0px",
              fontSize: "14px"
            }}
          >
            <Moment format="MMM DD, YYYY">{options[0].startDateTime}</Moment>
            <i
              className="fas fa-arrow-right"
              style={{ paddingLeft: 5, paddingRight: 5 }}
            />
            <Moment format="MMM DD, YYYY">{options[0].endDateTime}</Moment>
          </div>
          <div
            className="text-center text-muted"
            style={{
              padding: "5px 0px 15px 0px",
              fontSize: "10px"
            }}
          >
            <Moment format="dddd">{options[0].startDateTime}</Moment>
            {" through "}
            <Moment format="dddd">{options[0].endDateTime}</Moment>
          </div>
          <NavLink
            onClick={toggle}
            className="float-left btn btn-link"
            style={{ fontSize: "12px" }}
          >
            Json-Data
          </NavLink>
          <NavLink
            onClick={() => {
              alert(
                `Reservation Info: \n\nAssetId: ${
                  options[0].assetId
                } \nOptionId: ${options[0].assetOptionId}`
              );
            }}
            className="float-right btn btn-secondary"
            style={{ fontSize: "12px" }}
          >
            RESERVE
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

const daysBetween = (date1, date2) => {
  var diff = new Date(date2).getTime() - new Date(date1).getTime();
  return Math.ceil(diff / (1000 * 3600 * 24));
};

const getValueFromTag = (tags, name) => {
  let propName = "🔥";
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].name === name) {
      propName = tags[i].value;
    }
  }
  return propName;
};

const getAmenityList = tags => {
  let renderList = [];
  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    if (tag.name === "UnitAmenityList") {
      renderList.push(
        <small
          className="text-muted"
          style={{ display: "block", marginTop: 10 }}
        >
          Amenities
        </small>
      );
      for (let a = 0; a < tag.value.length; a++) {
        renderList.push(
          <span
            className="badge badge-pill badge-light"
            style={{ marginRight: 5 }}
          >
            {tag.value[a]}
          </span>
        );
      }
    }
  }
  return renderList;
};
