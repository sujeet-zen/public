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
import AddNewpropulsionType from "./AddNewPropulsionType";
import EditPropulsionType from "./EditPropulsionType";
// import '../../../../App.css'
// import FilterForm from "../../../../components/Table/FilterForm";
// import { toast } from "react-toastify";
// import API from "../../../Redux/axios";

const PropulsionType = () => {
  const [propulsionTypes, setPropulsionType] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [show, setShow] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [openTab, setOpenTab] = useState(1);
  const [loading, setLoading] = useState(true);

  const getPropulsionTypes = async () => {
    try {
      const res = await axios({
        url: API_URL + "/propulsion_type/",
      });
      if (res.status === 200) {
        // console.log("res", res);
        setPropulsionType(res?.data?.data);
      }
    } catch (err) {
      console.log(err?.response?.data);
      // toast.error(err?.response?.data?.message);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Type",
        accessor: "name",
        Filter: SelectColumnFilter,
      },      
      {
        Header: 'Created By',
        accessor: 'created_by',
      },
      {
        Header: 'Created On',
        accessor: 'created_on',
        Filter: SelectColumnFilter,
      },
      {
        Header: "Status",
        accessor: "status",        
        Cell: ({ value }) => (
          <span
            style={{
              display: 'inline-block',
              padding: '0.2em 0.6em',
              borderRadius: '9999px',
              backgroundColor: value === 'true' ? '#5cb85c' : '#d9534f',
              color: 'white',
            }}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Actions",
        api: "/pet_master/",
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
        const deletePropulsionType = await axios({
          url: `${API_URL}/propulsion_type/${rowId}/`,
          method: "DELETE",
        });
        if (deletePropulsionType) {
          getPropulsionTypes();
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getPropulsionTypes();
      setLoading(false);
    }, 3000)
  }, []);

  const data = useMemo(() => propulsionTypes, [propulsionTypes]);
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
                            Add New Pet Type
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
                  <AddNewpropulsionType onClose={() => setShow(false)} show={show} />
                  <EditPropulsionType onClose={handleClose} edit={edit} selectedRowData={selectedRowData} />                                  
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

export default PropulsionType;
