import React from 'react';
import { Container, Typography } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Augur Supply Chain Dashboard
      </Typography>
      <Dashboard />
    </Container>
  );
}

export default App;
