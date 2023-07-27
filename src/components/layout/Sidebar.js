import React, { useState } from "react";
import { Link } from "react-router-dom";
import controlPNG from "../../assets/images/control.png";
import barsSolid from "../../assets/images/bars-solid.svg";
import SidebarSingleComponent from "./SidebarSingleComponent";
import Header from "./Header";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [arrow, setArrow] = useState(false);
  const Menus = [{ path: "/users", title: "Users", imgSrc: "Chat" }];
  // const inner = (
  //   <ul
  //     className={
  //       arrow &&
  //       ` transition-tranction duration-500 delay-700 ease-in-out flex flex-col space-y-2 w-full h-28`
  //     }
  //   >
  //     <Link to={"/charterbookings"}  className="hover:text-white text-white">Charter Bookings</Link>
  //     <Link to={"/parcelbookings"} className="hover:text-white text-white">Parcel Bookings</Link>
  //     <Link to={"/passbookings"} className="hover:text-white text-white">Pass Bookings</Link>
  //     <Link to={"/ticketbookings"} className="hover:text-white text-white">Ticket Bookings</Link>
  //   </ul>
  // );

  const masterInner = (
    <ul
      className={
        arrow &&
        ` transition-tranction duration-500 delay-700 ease-in-out flex flex-col space-y-2 w-full h-58`
      }
    >
      <Link to={"/parceltype"} className="hover:text-white text-white">
        Parcel Types
      </Link>
      <Link to={"/ports"} className="hover:text-white text-white">
        Ports
      </Link>
      <Link to={"/routes"} className="hover:text-white text-white">
        Router
      </Link>
      <Link to={"/boatcategory"} className="hover:text-white text-white">
        Boat Category
      </Link>
      <Link to={"/boatentity"} className="hover:text-white text-white">
        Boat Entity
      </Link>
      <Link to={"/boattype"} className="hover:text-white text-white">
        Boat Type
      </Link>
      <Link to={"/pettype"} className="hover:text-white text-white">
        Pet Type
      </Link>
      <Link
        to={"/propulsiontype"}
        className="hover:text-white text-white"
      >
        Propulsion Type
      </Link>
      <Link
        to={"/valueaddservicemaster"}
        className="hover:text-white text-white"
      >
        Value Added Services
      </Link>
      <Link to={"/vehicletype"} className="hover:text-white text-white">
        Vehicle Type
      </Link>
    </ul>
  );

  const chev = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-3 h-3 ${arrow ? "rotate-90" : ""}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <>
      <Header />
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#2E5077] mt-20 p-5  pt-8 relative duration-300`}
      >
        <img
          src={barsSolid}
          className={`z-10 cursor-pointer top-9 w-9 border-[#2E5077]
         border-2 rounded-full `}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <ul className="pt-6 flex flex-col space-y-5">
          <SidebarSingleComponent open={open} title="Dashboard" />
          <SidebarSingleComponent open={open} title="Trips" />
          <SidebarSingleComponent open={open} title="Ticketings" />
          <SidebarSingleComponent open={open} title="Boats" />
          <SidebarSingleComponent open={open} title="Companies" />
          <SidebarSingleComponent open={open} title="Inventories" />
          <SidebarSingleComponent open={open} title="Approvals" />
          <SidebarSingleComponent open={open} title="Reports" />
          <SidebarSingleComponent open={open} title="Policies" />
          <SidebarSingleComponent open={open} title="CouponCode" />
          <SidebarSingleComponent open={open} title="PassInfo" />
          <SidebarSingleComponent
            open={open}
            title="Masters"
            inner={masterInner}
            chev={chev}
            setArrow={setArrow}
            arrow={arrow}
          />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
