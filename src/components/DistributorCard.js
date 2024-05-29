import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  marginBottom: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const Icon = styled('div')({
  fontSize: '40px',
  color: '#3f51b5',
});

const Title = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const DistributorCard = ({ distributor }) => {
  return (
    <StyledCard>
      <CardContent>
        <Title>
          <Typography variant="h5" component="div">
            {distributor.name}
          </Typography>
        </Title>
        <Divider />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Icon>
              <LocalShippingIcon />
            </Icon>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Quantity shipped last month: {distributor.lastMonth}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Icon>
              <TrendingUpIcon />
            </Icon>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Forecasted quantity for next month: {distributor.forecasted}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Icon>
              <CalendarTodayIcon />
            </Icon>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Year-to-date average: {distributor.yearToDateAverage}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default DistributorCard;
