import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PlusMinusInputField from './PlusMinusInput';
import DoneIcon from '@mui/icons-material/Done';
import hotelImage from '../assets/images/hotelimage5.jpeg';
import wifiIcon from '../assets/images/wifiIcon.png';
import ChooseGuestModal from './ChooseGuestModal';
import { LocationIconimg, RegularFont, Title5, Title6, TextMutedFont, SmallTextFont, GreenButton, AmenitiesIconimg, ClockIconimg } from '../styledComponents/GlobalStyleLayout';
import './RoomDetailCard.css';
import Slider from "react-slick";
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
}));

export default function RoomDetailCard(props) {
    
    return (
        <Box sx={{ width: '100%' }}>
            <Grid  container direction="row" container justifyContent="space-around"
                alignItems="stretch" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item sm={12} xs={12} lg={4} xl={4}>
                    <Item>
                        <div className="room-details-card-div1">
                            <RegularFont>
                                {props.RoomName}
                            </RegularFont> 
                            <TextMutedFont>
                            {props.RoomLastBooked}
                            </TextMutedFont>
                           
                        <div>
                            <div className="room-details-card-1stimg-div">
                                <img className="room-details-card-img" src={hotelImage} />
                            </div>
                            <div className="room-details-card-2ndimg-div">
                                <div className="room-details-card-2ndimg-innerdiv">
                                    <img className="room-details-card-img" src={hotelImage} />
                                </div>
                                <div className="room-details-card-2ndimg-innerdiv">
                                    <img className="room-details-card-img" src={hotelImage} />
                                </div>
                            </div>
                        </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item sm={12} xs={12} lg={3} xl={3}>
                    <Item>
                        <div className="room-details-card2">
                            <Title5>
                                Capacity
                            </Title5>
                            <RegularFont>
                                {props.AdultCapacity} Adults  
                            </RegularFont>
                            <RegularFont>
                            {props.ChildCapacity} Children  
                            </RegularFont>
                            <Title5>
                                Benefit
                            </Title5>
                            <Title6>
                                This option Includes :
                            </Title6>
                            <div>
                                <RegularFont> <AmenitiesIconimg src={props.AmenitiesIcon1} />  {props.Amenities1} </RegularFont>
                                <RegularFont><AmenitiesIconimg src={props.AmenitiesIcon2} />   {props.Amenities2} </RegularFont>
                                <RegularFont> <AmenitiesIconimg src={props.AmenitiesIcon3} />  {props.Amenities3}  </RegularFont>
                                <RegularFont> <AmenitiesIconimg src={props.AmenitiesIcon4} />   {props.Amenities4} </RegularFont>
                                <RegularFont> <AmenitiesIconimg src={props.AmenitiesIcon5} /> {props.Amenities5}  </RegularFont>
                                <RegularFont> <AmenitiesIconimg src={props.AmenitiesIcon6} />  {props.Amenities6}  </RegularFont>
                            </div>
                            <SmallTextFont>See all room details</SmallTextFont>
                        </div>
                    </Item>
                </Grid>
                <Grid item sm={12} xs={12} lg={4} xl={4} >
                    <Item>
                        <div className="room-details-card3">
                            <div className="room-details-card3-heading1">
                                <div>
                                    Price
                                </div>
                                <div>
                                    Book
                                </div>
                            </div>
                            <div className="room-details-card3-heading1">
                                <div>
                                    <Title5> 5000</Title5>
                                </div>
                                <div>
                                    <PlusMinusInputField />
                                </div>
                            </div>
                            <Title5>
                                Current Packages
                            </Title5>

                            <div className="room-details-card3-heading1">
                                <div>
                                    <RegularFont> Breakfast </RegularFont>
                                </div>

                                <div>
                                    <RegularFont> 5000</RegularFont>
                                </div>

                                <div>
                                    <PlusMinusInputField />
                                </div>
                            </div>
                            <div className="room-details-card3-heading1">
                                <div>
                                    <RegularFont> Dinner </RegularFont>
                                </div>

                                <div>
                                    <RegularFont> 5000</RegularFont>
                                </div>

                                <div>
                                    <PlusMinusInputField />
                                </div>
                            </div>
                            <div className="room-details-card3-heading1">
                                <div>
                                    <RegularFont> Lunch </RegularFont>
                                </div>

                                <div>
                                    <RegularFont> 5000</RegularFont>
                                </div>

                                <div>
                                    <PlusMinusInputField />
                                </div>
                            </div>
                            <div className="room-details-card3-heading1">
                                <div>
                                    <RegularFont> Total </RegularFont>
                                </div>

                                <div>
                                    <Title5> 5000</Title5>
                                </div>

                                <div>
                                   <ChooseGuestModal/>
                                </div>
                            </div>
                        </div>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}