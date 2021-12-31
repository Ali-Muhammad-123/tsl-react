import * as React from 'react';
import hotelImage from '../assets/images/hotelimage5.jpeg';
import wifiIcon from '../assets/images/wifiIcon.png';
import locationIcon from '../assets/images/map-icon.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import clockIcon from '../assets/images/clock-icon.png';
import { LocationIconimg, RegularFont, Title5, Title3, TextMutedFont, SmallTextFont, GreenButton, AmenitiesIconimg, ClockIconimg } from '../styledComponents/GlobalStyleLayout';
import './HotelDetailCard.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
}));
export default function HotelDetailCard(props) {

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container justifyContent="space-around"
                alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2}}>
                <Grid item xs={12} md={12} lg={6}>
                    <div className="hotel-detail-card-img-div1">
                        <img className="hotel-detail-card-img" src={hotelImage} />
                    </div>
                 
                </Grid>
                <Grid item xs={12} md={12} lg={5}>
                    <Item>
                        <div className="hotel-detail-cards">
                            <Title3>{props.Hoteltitle}</Title3>
                            <TextMutedFont>
                                <LocationIconimg src={locationIcon} /> {props.HotelAddress}
                            </TextMutedFont>
                            <RegularFont>
                                {props.HotelDescription}
                            </RegularFont>
                            <Title5>
                                About Hotel
                            </Title5>
                            <TextMutedFont>
                                <ClockIconimg src={clockIcon} /> Check in: {props.HotelCheckInTime}
                            </TextMutedFont>
                            <TextMutedFont>
                                <ClockIconimg src={clockIcon} /> Check Out: {props.HotelCheckOutTime}
                            </TextMutedFont>

                            <Title5>
                                Amenities
                            </Title5>
                            <div className="hotel-details-card-amenities-div">
                                <div>
                                    <TextMutedFont> <AmenitiesIconimg src={props.AmenitiesIcon1} /> {props.Amenities1}</TextMutedFont>
                                    <TextMutedFont> <AmenitiesIconimg src={props.AmenitiesIcon2} /> {props.Amenities2}</TextMutedFont>
                                    <TextMutedFont> <AmenitiesIconimg src={props.AmenitiesIcon3} /> {props.Amenities3}</TextMutedFont>

                                </div>
                                <div>
                                    <TextMutedFont> <AmenitiesIconimg src={props.AmenitiesIcon4} /> {props.Amenities4}</TextMutedFont>
                                    <TextMutedFont> <AmenitiesIconimg src={props.AmenitiesIcon5} /> {props.Amenities5}</TextMutedFont>
                                    <TextMutedFont> <AmenitiesIconimg src={props.AmenitiesIcon6} /> {props.Amenities6}</TextMutedFont>

                                </div>
                            </div>
                            <GreenButton>
                                Show All Amenities
                            </GreenButton>
                        </div>

                    </Item>
                </Grid>
               
            </Grid>
        </Box>




    );
}