import styled from 'styled-components';

// Fonts


const Title1 = styled.h1`
font-size:48px;
font-weight:600;
font-family:"poppins", sans-serif;
margin:0px;
`

const Title2 = styled.h2`
font-size:32px;
font-weight:600;
font-family:"poppins", sans-serif;
margin:0px;
`

const Title3 = styled.h3`
font-size:28px;
font-weight:600;
font-family:"poppins", sans-serif;
margin:0px;
`

const Title4 = styled.h4`
font-size:24px;
font-weight:600;
font-family:"poppins", sans-serif;
margin:0px;
`

const Title5 = styled.h5`
font-size:20px;
font-weight:600;
font-family:"poppins", sans-serif;
margin:0px;
`

const Title6 = styled.h6`
font-size:18px;
font-weight:600;
font-family:"poppins", sans-serif;
margin:0px;
`


const RegularFont = styled.p`
font-size:16px;
font-family: "poppins", sans-serif;
margin:0px;
`;

const TextMutedFont = styled.p`
font-size:14px;
font-weight:400;
font-family: "poppins", sans-serif;
margin:0px;
`;

const SmallTextFont = styled.p`
font-size:12px;
font-weight:400;
font-family: "poppins", sans-serif;
margin:0px;
`;

// Buttons

const Button = styled.button`
font-size:14px;
font-weight:600;
font-family: "poppins", sans-serif;
padding: 10px 35px;
border:none;
border-radius:5px;
cursor:pointer;

`

const GreenButton = styled(Button)`
color:white;
background-color: #2bb573;
border:1px solid #2bb473 ;
transition: 0.5s all;
&:hover {
    background-color: #429d72;
    transition:0.5s ease-in-out;
  }
`

const RedButton = styled(Button)`
color:white;
background-color: #fc2222;
border:1px solid #fc2222 ;
transition: 0.5s all;
&:hover {
    background-color: #d72323;
    transition:0.5s ease-in-out;
  }
`


const PlusMinusButton = styled(Button)`
color:white;
background-color: #2bb573;
padding: 10px 15px;
border-radius:0px;
`

const Iconimg = styled.img`
width:20px;
height:20px;
padding-right:5px;
`

const AmenitiesIconimg = styled.img`
width:25px;
height:23px;
padding-right:5px;
`
const LocationIconimg = styled.img`
width:12px;
height:16px;
padding-right:5px;
`
const ClockIconimg = styled.img`
width:20px;
height:20px;
padding-right:5px;
`
const InputMinusField = styled.input`
max-width:40px;
background-color:white;
padding: 9px 15px;
color:black;
border:1px solid gray;
text-align:center;

`
export { Title1, Title2, Title3, Title4, Title5, Title6,Iconimg,RedButton, RegularFont, TextMutedFont,SmallTextFont,InputMinusField,PlusMinusButton,GreenButton,AmenitiesIconimg,LocationIconimg,ClockIconimg}

