import React from "react";
import "../../pages/ReportsListPage/ReportsListPage.css";
import "../../assets/simple-grid.css";
import ListItem from "../../components/ListItem/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";

function ReportsListPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/elements");
        setReports(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Reports</h1>
      <div className="reports-list">
        {reports.length === 0 ? (
          <p>No reports found. Try checking back later.</p>
        ) : (
          reports.map((report, index) => (
            <ListItem key={index} report={report} />
          ))
        )}
      </div>
    </div>
  );
}

export default ReportsListPage;
