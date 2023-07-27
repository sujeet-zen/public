import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import Table, {
  AvatarCell,
  RowActions,
  SelectColumnFilter,
  StatusPill,
} from "../../../components/Table/Table";
import { API_URL } from "../../../Config";
import AddNewCompany from "./AddNewCompany";


const Companies = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const [show,setShow] = React.useState(false);
  const [openTab, setOpenTab] = useState(1);
  const getCompaniesData = async () => {
    try {
      const res = await axios({
        url: API_URL + "/boat_owner/",
      });
      if (res.status === 200) {
        console.log("res", res);
        setCompaniesData(res?.data?.data);
      }
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  // const getCompaniesData = async () => {
  //   try {
  //     const res = await fetch("http://ec2-35-154-71-27.ap-south-1.compute.amazonaws.com/api/boat_owner/")
  //     // https://jsonplaceholder.typicode.com/posts
  //     .then((res) => res.json())
  //     .then((data) => setCompaniesData(data))     

  //     if (res.status === 200) {
  //       console.log("res", res);  
  //       // setCompaniesData(res?.data?.results);
  //     }
  //   } catch (err) {
  //     console.log('err',err);
  //     // toast.error(err?.response?.data?.message);      
  //   }
  // };

  const columns = useMemo(
    () => [
      {
        Header: "SubCompany Name",
        accessor: "sub_company_name",
        // userId
      },
      {
        Header: "Owner Name",
        accessor: "owner_name",
        // title
      },
      {
        Header: "GST Number",
        accessor: "gst_number",
        // body
      },
      {
        Header: "Bank Account Number",
        accessor: "bank_account_number",
      },
      {
        Header: "Rebank Account Number",
        accessor: "re_bank_account_number",
      },
      {
        Header: "IFSC Code",
        accessor: "ifsc_code",
      },
      {
        Header: "Account Holder Name",
        accessor: "account_holder_name",
      },
      {
        Header: "Pan Number",
        accessor: "pan_number",
      },
      {
        Header: "Name Pan Number",
        accessor: "name_pan_number",
      },
      {
        Header: "Company Address",
        accessor: "company_address",
      },
      {
        Header: "Company Mobile",
        accessor: "company_mobile",
      },
      {
        Header: "Company Email",
        accessor: "company_email",
      },
      {
        Header: "Status",
        accessor: "status",
        // Cell: StatusPill,
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: RowActions,
        api: "/boat_owner/",
        route: "company",
      },
    ],
    []
  );
  useEffect(() => {
    getCompaniesData();
  }, []);

  const data = useMemo(() => companiesData, [companiesData]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded-2xl">
         
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
                            className={`${
                              openTab === 1
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
                            className={` ${
                              openTab === 2
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
                            className={` ${
                              openTab === 3
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
                            className={` ${
                              openTab === 4
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
                            Add New Comapany
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
                  <AddNewCompany onClose={() => setShow(false)} show={show} />

                  <div className="relative w-1/4 lg:max-w-sm mr-5">
                    <label>Route</label>
                    <select
                      id=""
                      class="block  w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option value="grapefruit">All</option>
                      <option value="lime">One</option>
                      <option selected value="coconut">
                        Two
                      </option>
                      <option value="mango">Three</option>
                    </select>
                  </div>

                  <div className="relative w-1/4  lg:max-w-sm mr-5">
                    <label>Boat Type</label>
                    <select
                      id=""
                      class="block w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option value="grapefruit">All</option>
                      <option value="lime">One</option>
                      <option selected value="coconut">
                        Two
                      </option>
                      <option value="mango">Three</option>
                    </select>
                  </div>
                  <div className="relative w-1/4  lg:max-w-sm mr-5">
                    <label>Boat Owner</label>
                    <select
                      id=""
                      class="block w-full  p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option value="grapefruit">All</option>
                      <option value="lime">One</option>
                      <option selected value="coconut">
                        Two
                      </option>
                      <option value="mango">Three</option>
                    </select>
                  </div>
                  <div className="">
                    {/* <GlobalFilter 
                      preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={globalFilter}
                      setGlobalFilter={setGlobalFilter}
                      label={label}
                  /> */}
                  </div>
                </div>
                <Table columns={columns} data={data} label={"Companies"} />
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Companies;
