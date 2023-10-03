import React from 'react'
import { Layout } from 'antd';
import CarOutlined from '@ant-design/icons/GlobalOutlined';
import { useEffect } from 'react';
import { setCars } from '../actions';
import hotelData from '../data/cars.json';
import { useDispatch } from 'react-redux';
const { Header } = Layout;

export default function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCars(hotelData));
  }, []);
  return (
    <div>
        <Layout className="layout">
            <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'white', marginBottom: 0 }}>Get Cars <CarOutlined /></h1>
            </Header>
        </Layout>
    </div>
  )
}