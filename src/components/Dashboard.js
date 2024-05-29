import React from 'react';
import DistributorCard from './DistributorCard';
import mockDistributors from '../data/mockData';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      {mockDistributors.map((distributor, index) => (
        <DistributorCard key={index} distributor={distributor} />
      ))}
    </div>
  );
};

export default Dashboard;
