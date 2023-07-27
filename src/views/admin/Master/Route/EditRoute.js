import React, { useEffect, useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
import closeIcon from "../../../../assets/images/CloseIcon.svg";
import axios from "axios";
import { API_URL } from "../../../../Config";

export default function EditRoute({ selectedRowData, edit, onClose}) {      
  
  const [portsData, setPortsData] = useState([]);
  const [routeData, setRouteData] = useState({    
    source: "",
    destination: "",
    route_type: "",
  });

  const updateHandler = async (selectedRowData) => {               
    if (selectedRowData) {
    try {
      const updatePort = await axios({
        url: `${API_URL}/routes/${selectedRowData.id}/`,
        method: "PUT",
        data: {
          ...routeData,
        },
      });
      if (updatePort.status==200) {        
        window.location.reload()        
      }
    } catch (error) {
        console.log('error', error);
    }  
  }
  else {
    window.alert("Required Fields Missing");
  } 
 };

 const getPortsData = async () => {
  try {
    const res = await axios({
      url: API_URL + "/ports/",
    });
    if (res.status === 200) {
      // console.log("res", res);
      setPortsData(res?.data?.data);
    }
  } catch (err) {
    console.log(err?.response?.data);
    // toast.error(err?.response?.data?.message);
  }
};

  useEffect(() => {
    if (edit && selectedRowData) {
      setRouteData(selectedRowData);
    }    
    getPortsData();
  }, [edit, selectedRowData]);

  if (!edit) {
    return null
  }

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="max-w-lg md:flex mx-auto my-6 relative w-auto">
          <div className="bg-white border-0 flex flex-col focus:outline-none outline-none relative rounded-3xl rounded-lg shadow-lg w-full">
            <div className="border-b border-slate-200 border-solid flex items-center items-start justify-between p-2 px-5 rounded-t text-center">
              <h3 className="text-base font-semibold text-black">
                Edit Routes
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <div>
                  <img src={closeIcon} alt="" />
                </div>
              </button>
            </div>
            <div className="relative p-5 flex-auto">
              <form className="">
                <div class="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    {" "}
                    <label htmlFor="grid-password" className="text-sm text-[#646464]">
                      Source
                    </label>
                  </div>
                  <div>
                    {" "}                   
                     <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => { setRouteData({ ...routeData, source: e.target.value, }); }}
                      // value={routeData?.source}
                    >
                      <option value="">{routeData.source}</option>
                      {portsData?.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.port_name}
                          </option>
                        );
                      })}                     
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    {" "}
                    <label htmlFor="grid-password" className="text-sm text-[#646464]">
                      Destination
                    </label>
                  </div>
                  <div>
                    {" "}
                    <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => { setRouteData({ ...routeData, destination: e.target.value, }); }}
                      value={routeData?.destination}
                    >
                      <option value="">{routeData.destination}</option>
                      {portsData?.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.port_name}
                          </option>
                        );
                      })} 
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    {" "}
                    <label htmlFor="grid-password" className="text-sm text-[#646464]">
                      Route Type
                    </label>
                  </div>
                  <div>
                    {" "}                   
                    <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => {setRouteData({...routeData,route_type: e.target.value,});}}
                      // value={routeData?.route_type}
                    >                    
                      {portsData?.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.port_name}
                          </option>
                        );
                      })} 
                  </select>
                  </div>
                </div>                
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 ">
              <button
                className="border border-blue-500 font-semibold px-4 py-2 rounded rounded-3xl w-72 text-[#0F8CB4]"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                class="bg-[#0F8CB4] w-72 ml-4 hover:bg-[#0F8CB4] rounded-3xl text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => {
                  // handleSubmit();
                  edit ? updateHandler(selectedRowData) : onClose();
                  console.log('edit', edit);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
