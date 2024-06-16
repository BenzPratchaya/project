import React, { useState, useEffect } from "react";
import "./css/NavTab.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function NavTab() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/authen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") {
            setIsLoggedIn(true);
            fetchUserData(token);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchUserData = (token) => {
    fetch("http://localhost:3001/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setUser(data.user);
        } else {
          console.error("Failed to fetch user data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLogout = (event) => {
    setIsLoggedIn(false);
    event.preventDefault();
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <div className="NavTab">
      {/* ---------------------------------- NAVBAR ---------------------------------- */}
      <Navbar expand="lg" className="bg-body-tertiary fixed-top shadow-lg">
        <Container fluid className="container-nav">
          <Navbar.Brand className="ms-5">
            <img
              src="http://localhost:3000/images/image__firstaid__logo.png"
              alt="Logo"
              style={{
                width: "50px",
                margin: "0px -5px 2px 0px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Brand>ระบบรวบรวมข้อมูลการปฐมพยาบาลเบื้องต้น</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/home" className="Nav-Link mx-4">
                หน้าแรก
              </Nav.Link>
              <Nav.Link href="/firstaid" className="Nav-Link mx-4">
                การปฐมพยาบาล
              </Nav.Link>
              <Nav.Link href="/article" className="Nav-Link mx-4">
                บทความเพื่อสุขภาพ
              </Nav.Link>
              {/* <NavDropdown
                title="ตั้งค่า"
                id="navbarScrollingDropdown"
                className="Nav-Link mx-4"
              >
                <NavDropdown.Item href="">แก้ไขข้อมูลส่วนตัว</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">ออกจากระบบ</NavDropdown.Item>
              </NavDropdown> */}
              {user.role_id === 2 && (
                <Nav.Link href="/admin" className="Nav-Link mx-4">
                  แอดมิน
                </Nav.Link>
              )}
            </Nav>
            <Navbar.Brand className="ms-5" style={{ fontSize: "16px" }}>
              {user.fname} {user.lname}
            </Navbar.Brand>
            {isLoggedIn ? (
              <Button className="w3-button w3-padding-large w3-white w3-border me-auto mx-2 my-2 my-lg-0 Logout-Button" onClick={handleLogout}>
                ออกจากระบบ
              </Button>
            ) : (
              <Button href="/login" className="w3-button w3-padding-large w3-white w3-border me-auto mx-2 my-2 my-lg-0 Logout-Button">
                เข้าสู่ระบบ
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      {/* ---------------------------------- END NAVBAR ---------------------------------- */}
    </div>
  );
}

export default NavTab;
