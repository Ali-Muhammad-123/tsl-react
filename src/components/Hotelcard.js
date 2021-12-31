import * as React from 'react';
import hotelImage from '../assets/images/hotelimage5.jpeg';
import wifiIcon from '../assets/images/wifiIcon.png';
import { RegularFont, Title4, TextMutedFont, SmallTextFont, GreenButton, AmenitiesIconimg } from '../styledComponents/GlobalStyleLayout';

import './Hotelcard.css';

import Box from '@mui/material/Box';
export default function HotelCard() {

    return (

        <div>
            <div className="hotel-card">
                <div className="card-img-div">
                    <img className="card-img" src={hotelImage} />
                </div>

                <div className="card-content">
                    <Title4> Hotel Sawat </Title4>
                    <TextMutedFont>No. of Rooms</TextMutedFont>


                    <div>
                        <AmenitiesIconimg src={wifiIcon} />
                        <AmenitiesIconimg src={wifiIcon} />
                        <AmenitiesIconimg src={wifiIcon} />
                        <AmenitiesIconimg src={wifiIcon} />
                        <AmenitiesIconimg src={wifiIcon} />
                        <AmenitiesIconimg src={wifiIcon} />
                    </div>
                    <SmallTextFont>Starting From</SmallTextFont>
                    <Title4> PKR 14,000/- </Title4>
                    <TextMutedFont>Per Night</TextMutedFont>
                    <GreenButton>View Details</GreenButton>
                </div>
            </div>
        </div>

    );
}