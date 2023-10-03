import React, { useState } from 'react';
import { Card, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, CoffeeOutlined, HeartOutlined, HeartFilled, DashboardOutlined, SettingOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const CarCard = ({ car }) => {
    const [liked, setLiked] = useState(false); // Moved inside the functional component

    return (
  <Card
    hoverable
    style={{ width: 300, marginBottom: 20, borderRadius: 10, backgroundColor: '#def7fa'}}
    bodyStyle={{ padding: '15px' }}
  >
    <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
      <img alt={car.name} src={car.image} style={{ width: '100%', height: '100%', borderRadius:"10px", objectFit: 'cover' }} />
    </div>
    <Row justify="space-between" align="middle" style={{ margin: '10px 0' }}>
      <Title level={4} style={{ margin: 0 }}>{car.name}</Title>
      <Text>{car.year}</Text>
    </Row>
    <Row gutter={16}>
    <Col span={12}>
        <p style={{ marginBottom: '8px' }}>
            <span role="img" aria-label="people"><UserOutlined /></span> {car.capacity}
        </p>
    </Col>
    <Col span={12}>
        <p style={{ marginBottom: '8px' }}>
            <span role="img" aria-label="fuel"><CoffeeOutlined /></span> {car.fuel}
        </p>
    </Col>
    <Col span={12}>
        <p style={{ marginBottom: '8px' }}>
            <span role="img" aria-label="mileage"><DashboardOutlined /></span> {car.mileage}
        </p>
    </Col>
    <Col span={12}>
        <p style={{ marginBottom: '10px' }}>
            <span role="img" aria-label="transmission"><SettingOutlined /></span> {car.transmission}
        </p>
    </Col>
</Row>
    <hr></hr>
    <Row justify="space-between" align="middle" style={{ margin: '10px 0' }}>
            <Col>
                <Title level={4} style={{ margin: 0, fontWeight: 'bold' }}>{car.price}</Title>
            </Col>
            <Col>
            <Button onClick={() => setLiked(!liked)}>{liked ? <HeartFilled /> : <HeartOutlined />}</Button>
            </Col>
        </Row>
    <Button type="primary" style={{ width: '100%' }}>Rent now</Button>
  </Card>
)
}

export default CarCard;

