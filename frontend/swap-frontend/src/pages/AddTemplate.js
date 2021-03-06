// import node module libraries
import { Col, Row, Card, Tab, Form, Button, Container } from "react-bootstrap";
import { FormSelect } from "components/elements/form-select/FormSelect";
import React, { Fragment, useState, useLayoutEffect } from "react";
import axios from "axios";
import Element from "json/Element";
import ElementCreate from "json/ElementCreate";
import jsonSkeleton from "json/jsonSkeleton.json";
import FormBuilder from "./FormBuilder";
import { Link, useNavigate } from "react-router-dom";
import NavbarVertical from "layouts/dashboard/NavbarVertical";
import NavbarTop from "layouts/dashboard/NavbarTop";
const AddTemplate = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const [applicationName, setApplicationName] = useState();

  const { submit, previous } = props;
  const [readyJson, setReadyJson] = useState(false);
  const [createJson, setCreateJson] = useState(false);
  const [createElement, setCreateElement] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  const [json, setJson] = useState(null);
  const [elementOption, setElementOption] = useState(0);
  const [obj, setObj] = useState();
  const [individual, setIndividual] = useState(false);
  var formOption = 0;
  const [formContent, setFormContent] = useState();
  const [readyFormContent, setReadyFormContent] = useState(false);
  const [readyElementOption, setReadyElementOption] = useState(false);
  const [formData, setFormData] = useState({
    program_title: "Title",
    program_category: "1",
    program_description: "Hello, world!",
    program_quota: "0",
    program_img: "img",
    start_date: "",
    end_date: "",
    Applystart_date: "",
    Applyend_date: "",
    manager_name: "",
    manager_contact: "",
    application_form: "",
    poster: "",
  });

  //   const { handleChange } = props;
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const highFunction = (isSet) => {
    // console.log("isSet", isSet);
  };

  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const submitButton = (form) => {
    props.submit(form);
  };

  useLayoutEffect(() => {
    readApplication();
    readJson();
    setJson(jsonSkeleton);
  }, []);

  // const templateOptions = [
  //   { value: "1", label: "??????" },
  //   { value: "2", label: "??????" },
  //   { value: "3", label: "??????" },
  //   { value: "4", label: "?????????" },
  //   { value: "5", label: "??????" },
  //   { value: "6", label: "??????" },
  //   { value: "7", label: "????????????" },
  // ];
  const [templateOptions, setTemplateOptions] = useState([]);

  const elementOptions = [
    { value: "1", label: "Text" },
    { value: "2", label: "Email" },
    { value: "3", label: "Password" },
    { value: "4", label: "Textarea" },
    { value: "5", label: "Select" },
    { value: "6", label: "CheckButton" },
    { value: "7", label: "RadioButton" },
    { value: "8", label: "File" },
    { value: "9", label: "????????????????????????" },
  ];

  const handleChange2 = (event) => {
    formOption = event.target.value;
    handleChange(event);
    readJson();
  };

  const elementChange = (elementEvent) => {
    setCreateElement(false);
    setElementOption(elementEvent.target.value);
  };

  const save = (event) => {};

  //DB?????? Application ?????? ???????????? ??????
  const readApplication = async () => {
    setReadyElementOption(false);
    const response = await axios.get(process.env.REACT_APP_RESTAPI_HOST + "application/name");

    setTemplateOptions(response.data);
    setReadyElementOption(true);
  };

  // DB?????? Json ???????????? ??????
  const readJson = async () => {
    setReadyFormContent(false);

    setReadyJson(false);
    setCreateJson(false);
    setIndividual(false);
    var params = new URLSearchParams();

    params.append("category_id", formOption);

    const response = await axios.post(process.env.REACT_APP_RESTAPI_HOST +"application/json", params);
    var json_total = response.data[0].content;
    var json_sub = json_total.slice(1, json_total.length - 1);

    var arr = JSON.parse("[" + json_sub + "]");

    setFormContent(arr);
    setReadyFormContent(true);

    setReadyJson(true);
  };

  // selectbox?????? ????????? element??? value ?????? ?????? jsonData?????? ????????? ?????? ??????
  const addElement = () => {
    setJsonData((jsonData) => [...jsonData, elementOption]); // jsonData??? ????????? elementoption ?????? ?????????.
    setCreateElement(true);
  };

  return (
    <Fragment>
      <div id="db-wrapper" className={`${showMenu ? "" : "toggled"}`}>
        <div className="navbar-vertical navbar">
          <NavbarVertical showMenu={showMenu} onClick={(value) => setShowMenu(value)} />
        </div>
        <div id="page-content">
          <div className="header">
            <NavbarTop
              data={{
                showMenu: showMenu,
                SidebarToggleMenu: ToggleMenu,
              }}
            />
          </div>
          <div className="container-fluid p-4">
            <Tab.Container defaultActiveKey="grid">
              <Row>
                <Form>
                  {readyJson && readyElementOption ? (
                    <div className="d-flex justify-content-end">
                      <Form.Group className="mb-3 w-26 ">
                        <FormSelect options={templateOptions} id="application_form" name="application_form" onChange={handleChange2} placeholder="????????? ????????? ??????" />
                      </Form.Group>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-end">
                      <Form.Group className="mb-3 w-26 ">
                        <FormSelect options={templateOptions} id="application_form" name="application_form" onChange={handleChange2} placeholder="????????? ????????? ??????" />
                      </Form.Group>
                    </div>
                  )}

                  {readyJson && formContent ? (
                    <FormBuilder content={formContent} propFunction={highFunction} submit={submitButton} template="1" />
                  ) : (
                    <Card className="mb-3  border-0">
                      <Card.Header className="border-bottom px-4 py-3">
                        <h4 className="mb-0">???????????? ?????????</h4>
                      </Card.Header>
                      <Card.Body>
                        <h4>????????? ???????????? ?????????????????? :)</h4>
                      </Card.Body>
                    </Card>
                  )}
                </Form>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AddTemplate;
