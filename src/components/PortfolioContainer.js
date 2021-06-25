import React, { useState } from "react";
import Header from "./NavBar/NavBar";
import ContentContainer from "./ContentContainer";

// import "./ContentContainer.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  // when this is executed it will update the page state to show which page will display when the Render page function is called
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="mainContent">
        <ContentContainer currentPage={currentPage} />
      </div>
      {/* footer */}
    </>
  );
}
