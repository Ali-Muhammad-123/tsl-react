import './RoomLocation.css';
import * as React from 'react';
import wifiIcon from '../assets/images/wifiIcon.png';
import locationIcon from '../assets/images/map-icon.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RegularFont, TextMutedFont, ClockIconimg, Title6, Title5, GreenButton, LocationIconimg } from '../styledComponents/GlobalStyleLayout';


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




function RoomLocation(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>



                    <Grid item xs={12} md={12} lg={6} xl={6}>
                        <Item>
                            <div className="location-content">  
                                <Title5>Location</Title5>
                                <RegularFont> {props.hotelName} </RegularFont>
                                <TextMutedFont><LocationIconimg src={locationIcon}/>{props.hotelAddress}</TextMutedFont>
                            </div>
                            <Tabs value={value} onChange={handleChange} variant="fullWidth">
                                <Tab label="Points of Interest" {...a11yProps(0)} />
                                <Tab label="Nearby "  {...a11yProps(1)} />

                            </Tabs>

                            <TabPanel value={value} index={0}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Title5> <ClockIconimg src={wifiIcon} />Restaurants</Title5>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="restaurant-inner-content">

                                            <Title6>Ginsoy</Title6>

                                            <div>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                                </Stack>
                                            </div>
                                            <RegularFont>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </RegularFont>
                                            <TextMutedFont>9KM Away</TextMutedFont>
                                            <GreenButton>Visit </GreenButton>
                                        </Typography>
                                        <hr />
                                        <Typography className="restaurant-inner-content">

                                            <Title6>KFC</Title6>

                                            <div>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                                </Stack>
                                            </div>
                                            <RegularFont>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </RegularFont>
                                            <TextMutedFont>5KM Away</TextMutedFont>
                                            <GreenButton>Visit </GreenButton>

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Title5> <ClockIconimg src={wifiIcon} />Attractions</Title5>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="restaurant-inner-content">

                                            <Title6>Askari Park</Title6>

                                            <div>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                                </Stack>
                                            </div>
                                            <RegularFont>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </RegularFont>
                                            <TextMutedFont>9KM Away</TextMutedFont>
                                            <GreenButton>Visit </GreenButton>
                                        </Typography>
                                        <hr />
                                        <Typography className="restaurant-inner-content">

                                            <Title6>Dolmen Mall</Title6>

                                            <div>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                                </Stack>
                                            </div>
                                            <RegularFont>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </RegularFont>
                                            <TextMutedFont>5KM Away</TextMutedFont>
                                            <GreenButton>Visit </GreenButton>

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Title5> <ClockIconimg src={wifiIcon} />Hospitals</Title5>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="restaurant-inner-content">

                                            <Title6>Hill Park General Hospital</Title6>

                                            <div>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                                </Stack>
                                            </div>
                                            <RegularFont>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </RegularFont>
                                            <TextMutedFont>9KM Away</TextMutedFont>
                                            <GreenButton>Visit </GreenButton>
                                        </Typography>
                                        <hr />
                                        <Typography className="restaurant-inner-content">

                                            <Title6>Liaquat National Hospital</Title6>

                                            <div>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                                </Stack>
                                            </div>
                                            <RegularFont>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </RegularFont>
                                            <TextMutedFont>5KM Away</TextMutedFont>
                                            <GreenButton>Visit </GreenButton>

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Title5> Nearby Hotels </Title5>
                            </TabPanel>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={12} lg={6} xl={6}>
                        <Item>
                            Map image
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
}

export default RoomLocation;
