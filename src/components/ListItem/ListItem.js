import React, { useState } from "react";
import "../../components/ListItem/ListItem.css";
import axios from "axios";

function ListItem({ report }) {
  const [state, setState] = useState(report.state);

  const handleBlock = async () => {
    try {
      const res = await axios.delete(
        "http://localhost:8000/elements/" + report.id
      );
      setState(res.data.state);
      console.log("Delete request data:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleResolve = async () => {
    try {
      const res = await axios.put(
        "http://localhost:8000/elements/" + report.id,
        {
          state: report.state === "OPEN" ? "CLOSED" : "OPEN",
        }
      );
      setState(res.data.state);
      console.log("Put request data:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const isOpen = state === "OPEN";
  if (isOpen) {
    return (
      <div className="list-item">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6">Id: {report.id.substring(0, 12)}</div>
              <div className="col-6 text-capitalize">
                Type: {report.payload.reportType}
              </div>
            </div>
            <div className="row">
              <div className="col-6 text-capitalize">State: {state}</div>
              <div className="col-6 truncate">
                Message: {report.payload.message}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a href="http://localhost:3000/" alt="Details link">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <button className="col-12" onClick={handleBlock}>
                  Block
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="col-12" onClick={handleResolve}>
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
