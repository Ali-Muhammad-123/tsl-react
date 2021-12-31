import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {  RegularFont, SmallTextFont, Title6 } from '../styledComponents/GlobalStyleLayout';
import Rating from '@mui/material/Rating';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
}));

function PersonRatings(props) {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    
                    <Grid item xs={12}>
                        <Item>
                            <Title6> {props.ratingName} </Title6>
                            <SmallTextFont> {props.ratingTime}</SmallTextFont>
                            <Rating name="half-rating" defaultValue={5} precision={0.5} />
                            <RegularFont>
                            {props.ratingDescription}
                            </RegularFont>

                        </Item>
                    </Grid>
                     
                  
                      
                </Grid>
            </Box>

        </div>
    );
}

export default PersonRatings;
