import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GreenButton, RedButton, RegularFont, TextMutedFont, Title6 } from '../styledComponents/GlobalStyleLayout';
import PlusMinusInputField from './PlusMinusInput';
import './ChooseGuestModal.css';
import { Title } from '@mui/icons-material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <GreenButton onClick={handleOpen}>Proceed</GreenButton>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={style}>
                    <Title6 id="modal-modal-title" variant="h6" component="h2">
                        Confirm Guests
                    </Title6>
                    <RegularFont id="modal-modal-description" style={{ marginTop: '20px' }}>
                        You're Booking This Room For:
                    </RegularFont>
                    <div className="modal-input-div">
                        <div> <Title6>Adult :</Title6></div>
                        <div>  No. Of Adults </div>
                    </div>
                    <div className="modal-input-div">
                        <div> <Title6>Child :</Title6></div>
                        <div>  No. Of Children  </div>
                    </div>
                    <RegularFont>Is this correct? or Would you like to change
                        the number of guests
                    </RegularFont>


                    <div className="modal-input-div">
                        <div> <RedButton onClick={handleClose}>Change Guests</RedButton> </div>
                        <div> <GreenButton>Proceed </GreenButton>  </div>
                        
                    </div>

                </Box>
            </Modal>
        </React.Fragment>
    );
}









export default function ChooseGuestModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <GreenButton onClick={handleOpen}>Book Now</GreenButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Title6 id="modal-modal-title" variant="h6" component="h2">
                        Choose Guests
                    </Title6>
                    <RegularFont id="modal-modal-description" style={{ marginTop: '20px' }}>
                        Please define how many individuals want to book this room?
                    </RegularFont>
                    <div className="modal-input-div">
                        <div> <Title6>Adult :</Title6></div>
                        <div>  <PlusMinusInputField />  </div>
                    </div>
                    <div className="modal-input-div">
                        <div> <Title6>Child :</Title6></div>
                        <div>  <PlusMinusInputField />  </div>
                    </div>
                    <div className="modal-input-div">
                        <div> <ChildModal /> </div>
                        <div>  <RedButton>Cancel </RedButton>  </div>
                    </div>
                   
                </Box>
            </Modal>
        </div>
    );
}