// import node module libraries
import { Fragment, useLayoutEffect, useState } from "react";
import { Menu, Search } from "react-feather";
import { Link } from "react-router-dom";
import { Nav, Navbar, InputGroup, Dropdown, Form, ListGroup, Row, Col, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import axios from "axios";

// import custom components

// import media files
import Avatar1 from "assets/images/avatar/avatar-1.jpg";
import NavbarProfile from "layouts/marketing/navbars/NavbarProfile";

// import data files

const NavbarTop = (props) => {
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [userInformationLoading, setUserInformationLoading] = useState(false);

  useLayoutEffect(() => {
    var ID = readUserInformation(window.sessionStorage.getItem("id"));
    readUserInformation(ID);
  }, []);

  const readUserInformation = async (id) => {
    setUserInformationLoading(false);
    const response = await axios.get(process.env.REACT_APP_RESTAPI_HOST + "user/loggedinUser/" + id);
    setUserName(response.data[0].name);
    setUserEmail(response.data[0].email);
    setUserInformationLoading(true);
  };

  return (
    <Fragment>
      <Navbar expanded="lg" className="navbar-default">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Link id="nav-toggle" to="#" onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}>
              <Menu size="18px" />
            </Link>
            {/* <div className="ms-lg-3 d-none d-md-none d-lg-block">
              <Form className=" d-flex align-items-center">
                <InputGroup className="input-group-merge search-bar" bsPrefix="group-of-input">
                  <InputGroup.Text className="ps-2 pe-1 mx-2 my-1 h-40 position-absolute search-icon border-0">
                    <Search size="12px" className="text-secondary" />
                  </InputGroup.Text>
                  <Form.Control type="search" className="form-control form-control-sm ps-6" placeholder="전체 검색하기" />
                </InputGroup>
              </Form>
            </div>*/}
          </div>

          <Nav className="navbar-nav navbar-right-wrap ms-auto d-flex align-items-center nav-top-wrap">
            <NavbarProfile />
          </Nav>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default NavbarTop;
