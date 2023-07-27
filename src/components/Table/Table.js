import React, { useMemo, useState } from "react";
import "../Table/TableStyle.css";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  LoginIcon,
} from "@heroicons/react/solid";
import { Button, PageButton } from "./Button";
import { classNames } from "./Utils";
import { SortIcon, SortUpIcon, SortDownIcon } from "./Icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Config";
import GlobalFilter from "./Search";
import "../../App.css";

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <>
      <span className="">{render("Header")}: </span>
      <select
        className="block  w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      </>
  );
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("mumbai") ? "bg-green-100 text-green-800" : null,
        status.startsWith("goa") ? "bg-yellow-100 text-yellow-800" : null,
        status.startsWith("kerala") ? "bg-red-100 text-red-800" : null
      )}
    >
      {status}
    </span>
  );
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">
          {row.original[column.emailAccessor]}
        </div>
      </div>
    </div>
  );
}
const deleteItem = (dbId, api) => {
  const deleteEntry = window.confirm("Delete this Entry");
  console.log("deleteEntry", deleteEntry);
  if (deleteEntry) {
    axios.delete(API_URL + "/" + api + "/" + dbId).then(
      (response) => {
        console.log("/api/" + api + "", response.data);
      },
      (error) => {
        console.log({ ...error });
      }
    );
  }
};
export function RowActions(props) {
  const { value, column, row } = props;
  return (
    <>
      <Link to={"/" + column.route + "/" + value}>
        <span className="bg-[#0F8CB4] border border-blue-500 font-semibold hover:bg-[#0F8CB4] hover:border-transparent hover:text-white px-4 py-2 rounded rounded-3xl text-white cursor-pointer">
          Edit
        </span>
      </Link>
      <span
        className="bg-[#fff] text-[#0F8CB4]  border border-[#0F8CB4] cursor-pointer font-semibold hover:border-[#0F8CB4]  hover:bg-[#fff] hover:border-transparent hover:text-[#0F8CB4] ml-4 px-4 py-2 rounded rounded-3xl"
        onClick={() => deleteItem(value, column.api)}
      >
        Delete
      </span>
    </>
  );
}
function Table({ columns, data, label, loading }) {
  // const [data, setData] = useState([]);

  // const columns = useMemo(() => columns , []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="col-span-3" key={column.id}>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}

        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
          label={label}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 ">
            <div className="shadow MainTable border-b border-gray-200 sm:rounded-lg">
              {loading ? (
                <div className="loader">Loading...</div>
              ) : (
                <table
                  {...getTableProps()}
                  className="min-w-full divide-y divide-gray-200"
                >
                  <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            scope="col"
                            className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            <div className="flex items-center justify-between">
                              {column.render("Header")}
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <SortDownIcon className="w-4 h-4 text-gray-400" />
                                  ) : (
                                    <SortUpIcon className="w-4 h-4 text-gray-400" />
                                  )
                                ) : (
                                  <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                )}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-gray-200"
                  >
                    {page.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-6 py-4 whitespace-nowrap"
                                role="cell"
                              >
                                {cell.column.Cell.name === "defaultRenderer" ? (
                                  <div className="text-sm text-gray-500">
                                    {cell.render("Cell")}
                                  </div>
                                ) : (
                                  cell.render("Cell")
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Next</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
