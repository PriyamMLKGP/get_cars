import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const CarPagination = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  // check if the curretpage is same as per the page url or update
    useEffect(() => {
        const page = parseInt(location.pathname.split('/').pop(), 10);
        if (page !== currentPage) {
        setCurrentPage(page);
        }
    }, [location, currentPage]);


  const onPageChange = (page) => {
    navigate(`/page/${page}`);
    setCurrentPage(page);
  };

  return (
    <Pagination
      current={currentPage}
      total={60} // 10 pages of 6 cars each
      pageSize={6}
      onChange={onPageChange}
      showSizeChanger={false}
    />
  );
};

export default CarPagination;
