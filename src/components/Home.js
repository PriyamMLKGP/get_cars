import React, { useState, useEffect } from 'react';
import CarPagination from './Pagination';
import CarDisplay from './CarDisplay';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Input, Space } from 'antd';
import Fuse from 'fuse.js';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");  // to store search input
  const carsPerPage = 6;
  const allCars = useSelector(state => state.cars);
  
  // Implementing fuzzy search with Fuse.js
  const fuse = new Fuse(allCars, {
    keys: ['name'],
    threshold: 0.3
  });

  const searchedCars = searchTerm ? fuse.search(searchTerm).map(result => result.item) : allCars;

  const currentCars = searchedCars.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);
  
  const location = useLocation();

  useEffect(() => {
    const page = parseInt(location.pathname.split("/")[2], 10) || 1;
    setCurrentPage(page);
  }, [location]);

  return (
    <div>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Input 
            size="large"
            placeholder="Search for a car..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', paddingTop:"5%" }}
        />
        <CarDisplay cars={currentCars} />
        <CarPagination currentPage={currentPage} />
        </Space>
    </div>
  );
};

export default Home;

