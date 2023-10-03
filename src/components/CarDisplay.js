import React from 'react';
import { Row, Col } from 'antd';
import CarCard from './CarCard'; 

const CarDisplay = ({ cars }) => {
  return (
    <Row gutter={16} style={{paddingLeft:"10%", paddingRight:"10%"}}>
      {cars.map(car => (
        <Col span={8} key={car.id}>
          <CarCard car={car} />
        </Col>
      ))}
    </Row>
  );
};

export default CarDisplay;
