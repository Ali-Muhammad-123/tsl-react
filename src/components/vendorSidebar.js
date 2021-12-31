
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import HotelIcon from '@mui/icons-material/Hotel';
import BedIcon from '@mui/icons-material/Bed';
import ChaletIcon from '@mui/icons-material/Chalet';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import smallLogo from '../assets/images/logo-only.png'
import fullLogo from '../assets/images/MainLogo.png'

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const VendorSidebar = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <div className="logo-sidebar">{menuCollapse ? <img className="small-logo" src={smallLogo} /> : <img src={fullLogo} />}</div>
                        </div>
                        <div className="profile-sidebar">
                            <div className="profile-image-div-sidebar"></div>
                        </div>
                        <div className="profile-namerole-sidebar">
                            <p className="profile-name">Vendor Name</p>
                            <p className="profile-role">Profile Role</p>
                        </div>

                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>

                        <Menu iconShape="square">
                            <div className="sidebar-title-head">
                                Main Menu
                            </div>

                            {menuCollapse ? <MenuItem icon={<LibraryBooksIcon />}></MenuItem> :
                                <MenuItem icon={<LibraryBooksIcon />}>  Overview  </MenuItem>}


                            <div className="submenu-div">


                                {menuCollapse ? <MenuItem icon={<SupervisedUserCircleIcon />}>   </MenuItem>
                                    : <MenuItem icon={<SupervisedUserCircleIcon />}> Customer Overview   </MenuItem>
                                }

                            </div>



                            <div className="sidebar-title-head">
                                Hotels
                            </div>
                         {menuCollapse ? <MenuItem icon={<HotelIcon />}></MenuItem> : <MenuItem icon={<HotelIcon />}> Hotel </MenuItem> }  

                            <div className="submenu-div"> 
                            {menuCollapse ? <MenuItem icon={<CorporateFareIcon />}></MenuItem>: <MenuItem icon={<CorporateFareIcon />}>All Rooms</MenuItem>}   
                              {menuCollapse ?  <MenuItem icon={<ChaletIcon />}></MenuItem> : <MenuItem icon={<ChaletIcon />}>Add New Hotel</MenuItem>}  
                              {menuCollapse ? <MenuItem icon={<BedIcon />}> </MenuItem> : <MenuItem icon={<BedIcon />}>Add New Room</MenuItem>}  
                              {menuCollapse ? <MenuItem icon={<CalendarTodayIcon />}></MenuItem> : <MenuItem icon={<CalendarTodayIcon />}>Booking Schedule</MenuItem>}  

                            </div>

                            <div className="sidebar-title-head">
                                Orders
                            </div>
                          {menuCollapse ? <MenuItem icon={<PointOfSaleIcon />}> </MenuItem> :  <MenuItem icon={<PointOfSaleIcon />}> Orders</MenuItem>} 

                            <div className="submenu-div">
                              {menuCollapse ?<MenuItem icon={<CollectionsBookmarkIcon />}> </MenuItem> : <MenuItem icon={<CollectionsBookmarkIcon />}>Order Overview</MenuItem>}  
                              {menuCollapse ?  <MenuItem icon={<PendingActionsIcon />}></MenuItem> :  <MenuItem icon={<PendingActionsIcon />}>Refunds</MenuItem>} 
                            </div>

                           {menuCollapse ? <MenuItem icon={<CreditCardIcon />}> </MenuItem> : <MenuItem icon={<CreditCardIcon />}>  Withdrawal Request </MenuItem> } 
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                             {menuCollapse ?<MenuItem icon={<FiLogOut />}></MenuItem> : <MenuItem icon={<FiLogOut />}>Logout</MenuItem>}   
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default VendorSidebar;
