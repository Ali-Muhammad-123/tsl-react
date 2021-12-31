import './HotelDetailPage.css';
import * as React from 'react';
import wifiIcon from '../assets/images/wifiIcon.png';
import HotelDetailCard from './HotelDetailCard';
import RoomDetailCard from './RoomDetailCard'
import RoomLocation from './RoomLocation';
import RoomRatings from './RoomRatings';
import RoomPolicies from './RoomPolicies';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}




function HotelDetailPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={12} xl={12}>
                        <Item>
                            <HotelDetailCard Hoteltitle="Sawat" HotelAddress="118 , House no . 2219 near Jamnagar Street Karachi"
                                HotelDescription=" Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet
                                 dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                veniam, quis nostrud exerci tation ullamcorper suscipit
                                lobortis nisl ut aliquip ex ea commodo consequat" HotelCheckInTime="6am" HotelCheckOutTime="9pm"
                                AmenitiesIcon1={wifiIcon} Amenities1="Free Wifi"
                                AmenitiesIcon2={wifiIcon} Amenities2="Free Swimming"
                                AmenitiesIcon3={wifiIcon} Amenities3="Free Parking"
                                AmenitiesIcon4={wifiIcon} Amenities4="Pet Allowed"
                                AmenitiesIcon5={wifiIcon} Amenities5="Breakfast Available"
                                AmenitiesIcon6={wifiIcon} Amenities6="Bathtub Available"
                            />
                        </Item>
                    </Grid>



                    <Grid item xs={12} md={12} xl={12}>
                        <Item>
                            <Tabs textColor='white' className="tab-row" value={value} onChange={handleChange} variant="fullWidth">
                                <Tab label="Room" {...a11yProps(0)} />
                                <Tab label="Location"  {...a11yProps(1)} />
                                <Tab label="Ratings"  {...a11yProps(2)} />
                                <Tab label="Policies" {...a11yProps(3)} />
                            </Tabs>

                            <TabPanel value={value} index={0}>
                                <RoomDetailCard RoomName="Room 102" RoomLastBooked="Last Booked 8 hours ago" AdultCapacity="5"
                                    ChildCapacity="3"
                                    AmenitiesIcon1={wifiIcon} Amenities1="Free Wifi"
                                    AmenitiesIcon2={wifiIcon} Amenities2="Free Swimming"
                                    AmenitiesIcon3={wifiIcon} Amenities3="Free Parking"
                                    AmenitiesIcon4={wifiIcon} Amenities4="Pet Allowed"
                                    AmenitiesIcon5={wifiIcon} Amenities5="Breakfast Available"
                                    AmenitiesIcon6={wifiIcon} Amenities6="Bathtub Available"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <RoomLocation hotelName="OYO 420 Lemon Siam Hotel" hotelAddress="118 Soi Songphra, Siphraya Road, Bangkok, 10500, Thailand "/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <RoomRatings />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <RoomPolicies />
                            </TabPanel>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
}

export default HotelDetailPage;
