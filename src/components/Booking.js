import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import wifiIcon from '../assets/images/wifiIcon.png';
import Grid from '@mui/material/Grid';
import './Booking.css';
import HotelDetailCard from './HotelDetailCard';
import { AmenitiesIconimg, Iconimg, RegularFont, Title6 } from '../styledComponents/GlobalStyleLayout';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),

  color: theme.palette.text.secondary,
}));

export default function BookingScreen() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container justifyContent="space-around"
        alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            Slick

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Title6>
              Capacity
            </Title6>
            <RegularFont>
              2 Children, 2 Adults
            </RegularFont>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Title6>
              Benefits
            </Title6>
            <RegularFont>
              This option includes:
            </RegularFont>
            <div className="booking-screen-benefits">
              <div> <Iconimg src={wifiIcon} />  Free Breakfast For 4</div>
              <div> <Iconimg src={wifiIcon} />  Free-Wifi </div>
              <div> <Iconimg src={wifiIcon} />  West Open</div>

            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Title6>
              Amenities
            </Title6>
            <div className="booking-screen-benefits">
              <div> <AmenitiesIconimg src={wifiIcon} />  Free Wifi</div>
              <div> <AmenitiesIconimg src={wifiIcon} />  Bathtub Available</div>
              <div> <AmenitiesIconimg src={wifiIcon} />  Pets Allowed</div>
              <div> <AmenitiesIconimg src={wifiIcon} /> Gym Available</div>
              <div> <AmenitiesIconimg src={wifiIcon} /> Parking Available</div>

            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}