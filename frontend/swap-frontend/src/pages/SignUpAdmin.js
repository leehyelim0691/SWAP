// import node module libraries
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";

// import media files
import Logo from "assets/images/OnlyLogo.png";

const SignUp = () => {
  return (
    <Fragment>
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4">
                <Link to="/">
                  <Image src={Logo} width="50px" className="mb-4" alt="" />
                </Link>
                <h1 className="mb-1 fw-bold">Sign up</h1>
              </div>
              {/* Form */}
              <Form>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" id="username" placeholder="이름을 입력하세요 " value="정수산나" readOnly />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>이메일 </Form.Label>
                    <Form.Control type="email" id="email" placeholder="이메일을 입력하세요 " value="sanna422@handong.ac.kr" readOnly />
                  </Col>

                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>전화 </Form.Label>
                    <Form.Control type="tel" id="email" placeholder="전화번호를 입력하세요 " required />
                  </Col>

                  <Col lg={12} md={12} className="mb-3">
                    <Form.Check type="checkbox" id="check-api-checkbox">
                      <Form.Check.Input type="checkbox" required />
                      <Form.Check.Label>
                        <Link to="/pages/terms-and-conditions">서비스 이용약관 </Link> 및 <Link to="/pages/terms-and-conditions">개인정보취급방침</Link>
                        동의
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                  <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                    {/* Button */}
                    <Button variant="primary" type="submit">
                      회원가입
                    </Button>
                  </Col>
                </Row>
              </Form>
              <hr className="my-4" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignUp;