import React, { useState } from 'react';
import './XTable.css';

const XTable = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      if (dateComparison !== 0) {
        return dateComparison;
      } else {
        return b.views - a.views;
      }
    });
    setData(sortedData);
    setSortBy('date');
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      if (viewsComparison !== 0) {
        return viewsComparison;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setData(sortedData);
    setSortBy('views');
  };

  return (
    <div className="x-table-container">
      <h1>Date and Views Table</h1>
      <div className="buttons-container">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table className="x-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
