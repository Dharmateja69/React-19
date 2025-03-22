import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import data from "./components/Products/data";
import ProductList from "./components/Products/Productlist";
import Sidebar from "./components/sidebar/Sidebar";
import TrendsAndTopics from "./components/TrendsandTopics/TrendsAndTopics ";

function App() {
  const [filteredData, setFilteredData] = useState(data); // Holds filtered results
  const [currentPage, setcurrentPage] = useState(1); // Current page number

  const itemsPerPage = 6; // Number of products per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const CurrentProducts = filteredData.slice(indexOfFirstItem, indexOfLastItem); // Paginated slice

  const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Total page count

  const handleNext = () => {
    if (currentPage < totalPages) {
      setcurrentPage((prev) => prev + 1);
    }
  };

  const handleprev = () => {
    if (currentPage > 1) {
      setcurrentPage((prev) => prev - 1);
    }
  };

  const originalData = data;

  const filterByName = (name) => {
    const newData = data.filter((item) =>
      item.company.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(newData);
    setcurrentPage(1); // Reset to first page
  };

  const filterByPrice = (min, max) => {
    const filteredByPrice = data.filter((item) => {
      const price = parseFloat(item.newPrice);
      return (
        (!min || price >= parseFloat(min)) && (!max || price <= parseFloat(max))
      );
    });
    setFilteredData(filteredByPrice);
    setcurrentPage(1); // Reset to first page
  };

  const filterByCategory = (category) => {
    const newCategory = data.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredData(newCategory);
    setcurrentPage(1); // Reset to first page
  };

  const filterByKeyword = (keyword) => {
    const filteredKeyword = data.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filteredKeyword);
    setcurrentPage(1); // Reset to first page
  };

  const filterbased = (value) => {
    let result = [];

    if (value === "Cheap") {
      result = data.filter((item) => item.newPrice <= 100);
    } else if (value === "Medium") {
      result = data.filter(
        (item) => item.newPrice > 100 && item.newPrice <= 150
      );
    } else if (value === "Expensive") {
      result = data.filter((item) => item.newPrice > 150);
    }

    setFilteredData(result);
    setcurrentPage(1); // Reset to first page
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar
          byname={filterByName}
          byprice={filterByPrice}
          data={originalData}
          maindata={setFilteredData}
          bycategory={filterByCategory}
          bykeyword={filterByKeyword}
        />
        <ProductList
          product={CurrentProducts} // Only show paginated items
          filtervalue={filterbased}
          handleNext={handleNext}
          handleprev={handleprev}
          current={setcurrentPage}
          page={currentPage}
          total={totalPages}
        />
        <TrendsAndTopics />
      </div>
      <Footer />
    </>
  );
}

export default App;
