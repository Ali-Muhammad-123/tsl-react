import './RoomPolicies.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Iconimg, SmallTextFont, Title6,Title4 } from '../styledComponents/GlobalStyleLayout';
import clockIcon from '../assets/images/clock-icon.png';
import breakfastIcon from '../assets/images/green-breakfast.png';
import petIcon from '../assets/images/green-pet.png'
import hotelIcon from '../assets/images/green-hotel.png';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
}));


function RoomPolicies() {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid className="room-policy-background" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                 <Grid item xs={12}>
                 <Title4 style={{padding:"10px", color:"#2bb673"}}>
                        Things To Know
                    </Title4>
                 </Grid>
                    <Grid item xs={6}>
                 
                        <div className="room-policy-div">
                            <Title6> <Iconimg src={clockIcon}/> Check-In: After 2 pm </Title6>
                            <Title6> <Iconimg src={clockIcon}/> Check-Out: After 5 pm </Title6>
                            <div>
                                <Title6> <Iconimg src={breakfastIcon}/> Breakfast </Title6>
                                <SmallTextFont>
                                    If not included in package, Cost: Rs. 1,488(=THB 250/Person)
                                </SmallTextFont>
                            </div>
                            <div>
                                <Title6>  <Iconimg src={hotelIcon}/> Additional Beds </Title6>
                                <SmallTextFont>
                                    2 Years old and under,<br />
                                    Max. 1 extra bed and 1 extra crib per room. Children can use extra beds for free.<br />
                                    Max. 1 extra bed and 1 extra crib per room. Adults can use extra beds for an additional charges of THB 700.0
                                </SmallTextFont>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="room-policy-div">   <Title6><Iconimg src={petIcon}/> No Smoking </Title6>
                            <Title6>  <Iconimg src={petIcon}/> Pets Allowed </Title6>
                            <div>
                                <Title6><Iconimg src={hotelIcon}/> Available Beds </Title6>
                                <SmallTextFont>
                                    3 Years old and under,<br />
                                    For each room,1 child can use existing beds for free
                                </SmallTextFont>
                            </div>
                        </div>
                    </Grid>
                   
                </Grid>
            </Box>
        </div>
    );
}

export default RoomPolicies;
