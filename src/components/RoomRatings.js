import './RoomRatings.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { GreenButton, RegularFont, SmallTextFont, Title5, Title6 } from '../styledComponents/GlobalStyleLayout';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PersonRatings from './PersonRatings';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
}));

function RoomRatings() {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>

                        <div className="main-rating-div"> 
                            <Title5>
                            Ratings
                        </Title5>
                            <div className="rating-outer-div">
                                <div className="rating-inner-div">
                                    <div><Title6>Neatness</Title6></div>
                                    <div>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={4} precision={0.5} />
                                        </Stack>
                                    </div>
                                </div>
                                <div className="rating-inner-div">
                                    <div><Title6>Service</Title6></div>
                                    <div>      <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                                    </Stack></div>
                                </div>
                            </div>
                            <div className="rating-outer-div">
                                <div className="rating-inner-div">
                                    <div><Title6>Location</Title6></div>
                                    <div>      <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                                    </Stack></div>
                                </div>
                                <div className="rating-inner-div">
                                    <div><Title6>Value</Title6></div>
                                    <div>      <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                    </Stack></div>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12}>
                       <PersonRatings ratingName="Jami Raza" ratingTime="2-11-2021" ratingDescription="This hotel was Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias quaerat ut assumenda error iure, laudantium fugit consectetur adipisci! In pariatur magnam tempore labore." />
                    </Grid>
                    <Grid item xs={12}>
                    <PersonRatings ratingName="Shami Raza" ratingTime="1-2-2021" ratingDescription="This hotel was Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias quaerat ut assumenda error iure, laudantium fugit consectetur adipisci! In pariatur magnam tempore labore." />
                    </Grid>
                    <Grid item xs={12}>
                    <PersonRatings ratingName="Kami Raza" ratingTime="1-12-2021" ratingDescription="This hotel was Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias quaerat ut assumenda error iure, laudantium fugit consectetur adipisci! In pariatur magnam tempore labore." />
                    </Grid>
                    <Grid item xs={12}>

                        <GreenButton>
                            Show All Reviews
                        </GreenButton>

                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}

export default RoomRatings;
