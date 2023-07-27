import { persistor, store } from "./Redux/store";
import "./App.css";
import User from "./views/admin/User";
import Login from "./views/auth/Login";
import Dashboard from "./views/admin/Dashboard";
import Users from "./views/admin/Users";
import Register from "./views/auth/Register";
import Vet from "./views/admin/Vet";
import Vets from "./views/admin/Vets";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,  
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import Students from "./views/admin/Students";
import Student from "./views/admin/Student";
import Trips from "./views/admin/Trip/Trips";
import Ticketings from "./views/admin/Ticketing/Ticketings";
import Boats from "./views/admin/Boat/Boats";
import Company from "./views/admin/Company/Company";
import Companies from "./views/admin/Company/Companies";
import Inventory from "./views/admin/Inventory/Inventory";
import Inventories from "./views/admin/Inventory/Inventories";
import Approval from "./views/admin/Approval/Approval";
import Approvals from "./views/admin/Approval/Approvals";
import Report from "./views/admin/Report/Report";
import Reports from "./views/admin/Report/Reports";
import Policy from "./views/admin/Policy/Policy";
import Policies from "./views/admin/Policy/Policies";
import Master from "./views/admin/Master/Master";
import Masters from "./views/admin/Master/Masters";
import ParcelType from "./views/admin/Master/ParcelType/ParcelType";
import ValueAddedServicesMaster from "./views/admin/Master/ValueAddedServices/ValueAddedServices";
import CouponCode from "./views/admin/CouponCode/CouponCode";
import PassInfo from "./views/admin/PassInfo/PassInfo";
import Ports from "./views/admin/Master/Port/Ports";
import EditPort from "./views/admin/Master/Port/EditPort";
import Router from "./views/admin/Master/Route/Routes";
import BoatCategory from "./views/admin/Master/BoatCategory/BoatCategory";
import BoatEntity from "./views/admin/Master/BoatEntity/BoatEntity";
import BoatType from "./views/admin/Master/BoatType/BoatType";
import PetType from "./views/admin/Master/PetType/PetType";
import PropulsionType from "./views/admin/Master/PropulsionType/PropulsionType";
import VehicleType from "./views/admin/Master/VehicleType/VehicleType";
import PrivateRoute from './views/auth/PrivateRoute'
// import { useState } from "react";

function App() { 

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />                        
              <Route path="dashboard" element={<PrivateRoute/>}>
              <Route index element={<Dashboard />} /> 
                </Route>                                                                
              {/* <Route  path="login" element={<Login />} /> */}
              {/* <Route  path="register" element={<Register />} />     */}
              {/* <Route exact path="trips" element={<PrivateRoute/>}> */}
              <Route  path="trips" element={<Trips />} />  
              {/* </Route>                      */}
              {/* <Route exact path="ticketings" element={<PrivateRoute/>}> */}
              <Route  path="ticketings" element={<Ticketings />} /> 
              {/* </Route>  */}
              {/* <Route exact path="boats" element={<PrivateRoute/>}>             */}
              <Route  path="boats" element={<Boats />} />    
              {/* </Route>       */}
              {/* <Route exact path="companies" element={<PrivateRoute/>}>    */}
              <Route  path="companies" element={<Companies />} />    
              {/* </Route> */}
              {/* <Route exact path="inventories" element={<PrivateRoute/>}>          */}
              <Route  path="inventories" element={<Inventories />} /> 
              {/* </Route>   */}
              {/* <Route exact path="approvals" element={<PrivateRoute/>}>    */}
              <Route  path="approvals" element={<Approvals />} />
              {/* </Route>                                       */}
              {/* <Route exact path="masters" element={<PrivateRoute/>}>      */}
              <Route  path="masters" element={<Masters />} />
              {/* </Route>                                                        */}
              {/* <Route exact path="reports" element={<PrivateRoute/>}> */}
              <Route  path="reports" element={<Reports />} />    
              {/* </Route>  */}
              {/* <Route exact path="policies" element={<PrivateRoute/>}> */}
              <Route  path="policies" element={<Policies />} />  
              {/* </Route> */}
              {/* <Route exact path="masters" element={<PrivateRoute/>}>     */}
              <Route  path="masters" element={<Masters />} /> 
              {/* </Route> */}
              {/* <Route exact path="couponcode" element={<PrivateRoute/>}> */}
              <Route  path="couponcode" element={<CouponCode />} />   
              {/* </Route> */}
              {/* <Route exact path="parceltypes" element={<PrivateRoute/>}>            */}
              <Route  path="parceltypes" element={<ParcelType />} /> 
              {/* </Route>   */}
              {/* <Route exact path="passinfo" element={<PrivateRoute/>}>                   */}
              <Route  path="passinfo" element={<PassInfo />} /> 
              {/* </Route> */}
              {/* <Route exact path="ports" element={<PrivateRoute/>}> */}
              <Route  path="ports" element={<Ports />} />   
              {/* </Route> */}
              {/* <Route exact path="routes" element={<PrivateRoute/>}>                                */}
              <Route  path="routes" element={<Router />} />
              {/* </Route> */}
              {/* <Route exact path="boatcategory" element={<PrivateRoute/>}> */}
              <Route  path="boatcategory" element={<BoatCategory />} />
              {/* </Route> */}
              {/* <Route exact path="boatentity" element={<PrivateRoute/>}> */}
              <Route  path="boatentity" element={<BoatEntity />} />
              {/* </Route> */}
              {/* <Route exact path="boattype" element={<PrivateRoute/>}> */}
              <Route  path="boattype" element={<BoatType />} />   
              {/* </Route> */}
              {/* <Route exact path="petType" element={<PrivateRoute/>}>      */}
              <Route  path="petType" element={<PetType />} /> 
              {/* </Route>  */}
              {/* <Route exact path="propulsiontype" element={<PrivateRoute/>}>  */}
              <Route  path="propulsiontype" element={<PropulsionType />} />  
              {/* </Route>      */}
              {/* <Route exact path="valueaddservicemaster" element={<PrivateRoute/>}> */}
              <Route path="valueaddservicemaster" element={<ValueAddedServicesMaster />}/>
              {/* </Route> */}
              {/* <Route exact path="vehicletype" element={<PrivateRoute/>}> */}
              <Route  path="vehicletype" element={<VehicleType />} />
              {/* </Route>  */}
            </Routes>
          </BrowserRouter>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
          />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
