import './App.css';
import VendorSidebar from './components/vendorSidebar';
import AdminSidebar from './components/adminSidebar';
import BookingScreen from './components/Booking';
import HotelCard from './components/Hotelcard';
import RoomDetailCard from './components/RoomDetailCard'
import PlusMinusInputField from './components/PlusMinusInput';
import wifiIcon from './assets/images/wifiIcon.png';
import HotelDetailCard from './components/HotelDetailCard';
import HotelDetailPage from './components/HotelDetailPage';
import ChooseGuestModal from './components/ChooseGuestModal';
import SlickSlider from './components/Slider';
function App() {
  return (
    <div className="App">
       {/* <HotelDetailCard Hoteltitle="Sawat" HotelAddress="118 , House no . 2219 near Jamnagar Street Karachi"
       HotelDescription=" Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
       sed diam nonummy nibh euismod tincidunt ut laoreet
       dolore magna aliquam erat volutpat. Ut wisi enim ad minim
       veniam, quis nostrud exerci tation ullamcorper suscipit
       lobortis nisl ut aliquip ex ea commodo consequat" HotelCheckInTime="6am" HotelCheckOutTime="9pm"
       AmenitiesIcon1={wifiIcon} Amenities1="Free Wifi" 
       AmenitiesIcon2={wifiIcon} Amenities2="Free Swimming" 
       AmenitiesIcon3={wifiIcon}  Amenities3= "Free Parking"
       AmenitiesIcon4={wifiIcon}  Amenities4= "Pet Allowed"
       AmenitiesIcon5={wifiIcon}  Amenities5= "Breakfast Available"
      AmenitiesIcon6={wifiIcon} Amenities6= "Bathtub Available"
       />  
   */}
  
  
       {/* <RoomDetailCard RoomName="Room 102" RoomLastBooked="Last Booked 8 hours ago" AdultCapacity="5" 
       ChildCapacity="3"
       AmenitiesIcon1={wifiIcon} Amenities1="Free Wifi" 
       AmenitiesIcon2={wifiIcon} Amenities2="Free Swimming" 
       AmenitiesIcon3={wifiIcon}  Amenities3= "Free Parking"
       AmenitiesIcon4={wifiIcon}  Amenities4= "Pet Allowed"
       AmenitiesIcon5={wifiIcon}  Amenities5= "Breakfast Available"
      AmenitiesIcon6={wifiIcon} Amenities6= "Bathtub Available"
       /> */}
     
     <BookingScreen/>
  <SlickSlider/>
    </div>
  );
}

export default App;
