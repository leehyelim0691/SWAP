// import node module libraries
import React, { Fragment, useMemo, useLayoutEffect, useState } from "react";
import { useTable, useFilters, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import { Link } from "react-router-dom";
import { Dropdown, Image, Row, Col, Table, Button } from "react-bootstrap";
import { MoreVertical, Trash, Edit } from "react-feather";
import axios from "axios";

// import custom components
import GlobalFilter from "components/elements/advance-table/GlobalFilter";
import Pagination from "components/elements/advance-table/Pagination";
import DotBadge from "components/elements/bootstrap/DotBadge";

import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: #fe4f4f;
//   color: white;
//   padding: 0.22rem 0.75rem;
//   font-size: 0.75rem;
// `;

const DeletedUsersListItems = () => {
  const [userInfo, setUserInfo] = useState([]);

  const columns = useMemo(
    () => [
      { accessor: "id", Header: "ID", show: false },
      {
        accessor: "name",
        Header: "이름",
        Cell: ({ value, row }) => {
          return (
            <div className="d-flex align-items-center">
              <DotBadge bg="danger"></DotBadge>
              <h5 className="mb-0">{value}</h5>
            </div>
          );
        },
      },
      { accessor: "phone", Header: "연락처" },
      { accessor: "email", Header: "이메일" },

      // { accessor: "image", Header: "", show: false },
      {
        accessor: "student_id",
        Header: "학번",
        Cell: ({ value }) => {
          return (
            <Fragment>
              <Col> {value === 0 ? "" : value}</Col>
            </Fragment>
          );
        },
      },
      {
        accessor: "student_class",
        Header: "학년",
        Cell: ({ value }) => {
          return (
            <Fragment>
              <Col> {value === 0 ? "" : value + " 학년"}</Col>
            </Fragment>
          );
        },
      },
      {
        accessor: "semester",
        Header: "학기",
        Cell: ({ value }) => {
          return (
            <Fragment>
              <Col> {value === 0 ? "" : value + " 학기"}</Col>
            </Fragment>
          );
        },
      },
      {
        accessor: "department",
        Header: "학부",
      },
      {
        accessor: "major1",
        Header: "1전공",
      },
      {
        accessor: "major2",
        Header: "2전공",
      },
    ],
    []
  );

  const data = useMemo(() => userInfo);

  const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    state,
    gotoPage,
    pageCount,
    prepareRow,
    setGlobalFilter,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
        hiddenColumns: columns.map((column) => {
          if (column.show === false) return column.accessor || column.id;
          else return false;
        }),
      },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex, globalFilter } = state;

  useLayoutEffect(() => {
    readUser();
  }, []);

  const readUser = async () => {
    const response = await axios.get("http://localhost:8080/swap/user/deletedusers");
    setUserInfo(response.data);
  };

  // const createAdmin = async (e) => {
  //   var addAdminId = [];

  //   e.map((d) => addAdminId.push(d.original.id));

  //   var params = new URLSearchParams();
  //   params.append("id", addAdminId);

  //   if (window.confirm("관리자로 추가하시겠습니까?")) {
  //     const response = await axios.post("http://localhost:8080/swap/admin/add", params);
  //     alert("추가 되었습니다.");
  //     readUser();
  //   }
  // };

  const RestoreUser = async (e) => {
    var restoreUserId = [];

    e.map((d) => restoreUserId.push(d.original.id));

    var params = new URLSearchParams();
    params.append("id", restoreUserId);

    if (window.confirm("복구 하시겠습니까?")) {
      const response = await axios.post("http://localhost:8080/swap/user/restore", params);
      alert("복구 되었습니다.");
      readUser();
    }
  };

  return (
    <Fragment>
      <div className=" overflow-hidden">
        <Row className="justify-content-md-between m-3 mb-xl-0">
          <Col xl={8} lg={6} md={6} xs={12}>
            <div className="mb-2 mb-lg-4">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} placeholder="Search Users" />
            </div>
          </Col>
          <Col xxl={2} lg={6} md={6} xs={12} className="justify-content-between mb-2 mb-lg-4">
            <Button
              className="ms-8"
              onClick={() => {
                RestoreUser(selectedFlatRows);
              }}
            >
              복구하기
            </Button>
          </Col>
        </Row>
      </div>

      <div className="table-responsive ">
        <Table {...getTableProps()} className="text-nowrap">
          <thead className="table-light">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* Pagination @ Footer */}
      <Pagination previousPage={previousPage} pageCount={pageCount} pageIndex={pageIndex} gotoPage={gotoPage} nextPage={nextPage} />
    </Fragment>
  );
};

export default DeletedUsersListItems;