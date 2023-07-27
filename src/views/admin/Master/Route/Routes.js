import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../../../components/layout/Layout";
import Table, {
  AvatarCell,
  RowActions,
  SelectColumnFilter,
  StatusPill,
} from "../../../../components/Table/Table";
import { API_URL } from "../../../../Config";
import AddNewRoute from "./AddNewRoute";
import EditRoute from "./EditRoute";
// import '../../../../App.css'
// import FilterForm from "../../../../components/Table/FilterForm";
// import { toast } from "react-toastify";
// import API from "../../../Redux/axios";

const Router = () => {
  const [routesData, setRoutesData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [show, setShow] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [openTab, setOpenTab] = useState(1);
  const [loading, setLoading] = useState(true);

  const getRoutesData = async () => {
    try {
      const res = await axios({
        url: API_URL + "/routes/",
      });
      if (res.status === 200) {
        // console.log("res", res);
        setRoutesData(res?.data?.data);
      }
    } catch (err) {
      console.log(err?.response?.data);
      // toast.error(err?.response?.data?.message);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Source",
        accessor: "source",
        Filter: SelectColumnFilter,
        // status: StatusPill,
        // Cell: AvatarCell,
        // imgAccessor: "imgUrl",
        // emailAccessor: "email",
      },      
      {
        Header: 'Destination',
        accessor: 'destination',      
          },
      {
        Header: "Route Type",
        accessor: "route_type",
        Filter: SelectColumnFilter,
        Cell: ({ value }) => (
          <span
            style={{
              display: 'inline-block',
              padding: '0.2em 0.6em',
              borderRadius: '9999px',
              backgroundColor: value === 'Commute' ? '#5cb85c' : '#d9534f',
              color: 'white',
            }}
          >
            {value}
          </span>
        ),
      },    
      {
        Header: "Actions",        
        api: "/routes/",        
        Cell: ({ row }) => (
          <div>
            <button onClick={() => handleEdit(row)}>Edit</button>
            <button onClick={() => handleDelete(row)}>Delete</button>
          </div>
        ),
      },
    ],
    []
  );  

  const handleEdit = (row) => {
    setSelectedRowData(row.original);
    setEdit(true)
  };

  const handleClose = () => {
    setEdit(false);
    setSelectedRowData(null);
  };

  const handleDelete = async (row) => {
    const rowId = row.original.id;
    if (rowId) {
      try {
        const deletePort = await axios({
          url: `${API_URL}/routes/${rowId}/`,
          method: "DELETE",
        });
        if (deletePort) {
          getRoutesData();
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getRoutesData();
      setLoading(false);
    }, 3000)
  }, []);

  const data = useMemo(() => routesData, [routesData]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded-3xl">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div>
                <div className="container mx-auto ">
                  <div className=" flex-col items-center justify-center">
                    <ul className="flex justify-between space-x-2 border-b-solid border-b border-b-[#C1C7CE]">
                      <div className="flex flex-row">
                        <li className="">
                          <Link
                            to=""
                            onClick={() => setOpenTab(1)}
                            className={`${openTab === 1
                                ? "text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                              } inline-block px-4 py-2 text-sm`}
                          >
                            ALL
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            onClick={() => setOpenTab(2)}
                            className={` ${openTab === 2
                                ? " text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                              } inline-block px-4 py-2 text-sm`}
                          >
                            CURRENT
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            onClick={() => setOpenTab(3)}
                            className={` ${openTab === 3
                                ? "text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                              } inline-block px-4 py-2 text-sm`}
                          >
                            UPCOMING
                          </Link>
                        </li>

                        <li>
                          <Link
                            to=""
                            onClick={() => setOpenTab(4)}
                            className={` ${openTab === 4
                                ? "text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                              } inline-block px-4 py-2 text-sm`}
                          >
                            PAST
                          </Link>
                        </li>
                      </div>
                      <div className="flex flex-end">
                        <li>
                          <button
                            onClick={() => setShow(true)}
                            className="bg-[#0F8CB4] hover:bg-[#0F8CB4] p-1 rounded-3xl text-white font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded"
                          >
                            Add New Routes
                          </button>
                        </li>
                      </div>
                    </ul>
                    {/* <div className="p-3 mt-6 bg-white border">
                      <div className={openTab === 1 ? "block" : "hidden"}>
                        {" "}
                        React JS with Tailwind CSS Tab 1 Content show
                      </div>
                      <div className={openTab === 2 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 2 Content show
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 3 Content show
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 4 Content show
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-row">
                  <AddNewRoute onClose={() => setShow(false)} show={show} />
                  <EditRoute onClose={handleClose} edit={edit} selectedRowData={selectedRowData} />
                  {/* <div className="relative w-1/4 lg:max-w-sm mr-5">
                    <label>Route</label>
                    <select
                      id=""
                      class="block  w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option selected value="all">All</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="goa">Goa</option>
                      <option value="punjab">Punjab</option>
                    </select>
                  </div>

                  <div className="relative w-1/4  lg:max-w-sm mr-5">
                    <label>Boat Type</label>
                    <select
                      id=""
                      class="block w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option selected value="all">All</option>
                      <option value="belapur">Belapur</option>
                      <option two="mandwa">Mandwa</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                  <div className="relative w-1/4  lg:max-w-sm mr-5">
                    <label>Boat Owner</label>
                    <select
                      id=""
                      class="block w-full  p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option selected value="all">All</option>
                      <option value="one">Sanjay</option>
                      <option value="sohel">Sohel</option>
                      <option value="vikas">Vikas</option>
                    </select>
                  </div>                  */}
                </div>
                <Table columns={columns} data={data} label={"Ports"} loading={loading} />
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Router;
