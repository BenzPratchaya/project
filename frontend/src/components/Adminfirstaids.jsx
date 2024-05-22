import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import MenuIcon from "@mui/icons-material/Menu";
import AdminfirstaidAdd from "./Adminfirstaid_add";
import AdminfirstaidEdit from "./Adminfirstaid_edit";
//import Adminfirstaidupdate from "./Adminfirstaidupdate";

const menu = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
  { name: "Manage Users", icon: <PersonIcon />, path: "/admin/users" },
  {
    name: "Manage Firstaids",
    icon: <LocalHospitalIcon />,
    path: "/admin/firstaids",
  },
  { name: "Manage Articles", icon: <ArticleIcon />, path: "/admin/articles" },
  { name: "Back", icon: <ArrowBackIcon />, path: "/home" },
];

function Adminfirstaids() {
  const [firstaids, setFirstaids] = useState([]);
  const [open, setOpen] = useState(true);
  const [popupadd, setPopupAdd] = useState(false);
  const [popupedit, setPopupEdit] = useState(false);
  const [selectedFirstaidId, setSelectedFirstaidId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/firstaids")
      .then((res) => res.json())
      .then((result) => {
        setFirstaids(result);
      });
  }, []);

  const deleteFirstaid = (id) => {
    const confirmDelete = window.confirm("ต้องการลบข้อมูลหรือไม่?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3001/firstaid/delete/${id}`).then(
        (response) => {
          setFirstaids(
            firstaids.filter((firstaid) => {
              return firstaid.id !== id;
            })
          );
        }
      );
      console.log("ลบข้อมูล");
    } else {
      console.log("ยกเลิกการลบ");
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const changeUrlVideo = (url) => {
    const embedUrl = url;
    const imageUrl =
      embedUrl.replace(/www\.youtube\.com\/embed\//, "img.youtube.com/vi/") +
      "/maxresdefault.jpg";
      
    return imageUrl;
  };

  // สร้างฟังก์ชันสำหรับแปลงวันที่จากข้อความ ISO 8601 format เป็นวันที่ในรูปแบบที่เข้าใจง่าย
  const formatDate = (isoDateString) => {
    const dateObj = new Date(isoDateString);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return dateObj.toLocaleDateString("th-TH", options);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${open ? 240 : 0}px)`,
          ml: open ? `240px` : 0,
          transition: "width 0.3s", // เพิ่ม transition ในการเปลี่ยนความกว้างของ AppBar
        }}
      >
        <Toolbar style={{ background: "white" }}>
          <IconButton onClick={toggleDrawer} sx={{ color: "black" }}>
            <MenuIcon sx={{ width: "24", height: "24" }}></MenuIcon>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black" }}
          >
            Admin System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            background: `linear-gradient(rgb(84, 103, 225), rgb(71, 101, 236), rgb(73, 79, 243))`,
            display: "flex",
            transition: "transform 0.3s", // เพิ่ม transition ในการเปลี่ยนค่าการแสดงผล (transform) ของ sidebar
            transform: open ? "translateX(0)" : "translateX(-240px)", // เพิ่มการเปลี่ยนแปลงค่าการแสดงผล (transform) ของ sidebar
          },
        }}
        variant="permanent"
        anchor="left"
        open={open}
      >
        <Typography style={{ display: "flex" }}>
          <SupervisedUserCircleIcon
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "12px 5px -50px 5px",
              color: "white", // กำหนดสีให้กับ SVG
              width: "38",
              height: "38",
            }}
          ></SupervisedUserCircleIcon>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "12px 0px -50px 0px",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Admin System
          </Typography>
        </Typography>
        <Toolbar />
        <Divider />
        <List>
          {menu.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem
                disablePadding
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ minWidth: "30px", color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{ style: { fontSize: "17px" } }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          ml: open ? "240px" : "0px",
          width: open ? `calc(100% - 240px)` : "100%",
          transition: "margin-left 0.3s, width 0.3s",
        }}
      >
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Paper
            elevation={1}
            className="d-flex justify-content-between"
            sx={{ p: 3 }}
          >
            <Typography variant="h5">List of All Firstaids</Typography>
            <Button
              style={{
                background: "var(--blue1)",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => setPopupAdd(true)}
            >
              Create Firstaid +
            </Button>
          </Paper>
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Detail</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Video</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Edit</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {firstaids.map((firstaid) => (
                  <TableRow key={firstaid.id}>
                    <TableCell align="center">{firstaid.id}</TableCell>
                    <TableCell align="center">{firstaid.name}</TableCell>
                    <TableCell align="left">{firstaid.detail}</TableCell>
                    <TableCell align="center">
                      <img
                        src={`http://localhost:3001/image/${firstaid.image}`}
                        style={{ width: "50%" }}
                        alt=""
                      />
                    </TableCell>
                    <TableCell align="center">
                      {firstaid.video &&
                      (firstaid.video.startsWith("http://") ||
                        firstaid.video.startsWith("https://")) ? (
                        <a
                          href={firstaid.video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={changeUrlVideo(firstaid.video)}
                            alt="Video"
                            style={{ width: "50%" }}
                          />
                        </a>
                      ) : (
                        "ไม่มีวิดีโอ"
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {formatDate(firstaid.created_date)}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: "#e2b031",
                          color: "black",
                          "&:hover": {
                            backgroundColor: "#ba8705",
                            color: "black",
                          },
                        }}
                        onClick={() => {
                          setSelectedFirstaidId(firstaid.id);
                          setPopupEdit(true);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: "#d72e3e",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#fd2e2e",
                            color: "white",
                          },
                        }}
                        onClick={() => {
                          deleteFirstaid(firstaid.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <AdminfirstaidAdd
            popupadd={popupadd}
            setPopupAdd={setPopupAdd}
            setFirstaids={setFirstaids}
          />
          <AdminfirstaidEdit
            popupedit={popupedit}
            setPopupEdit={setPopupEdit}
            firstaidId={selectedFirstaidId}
            setFirstaidId={setSelectedFirstaidId}
            setFirstaids={setFirstaids}
          />
        </Box>
      </Box>
    </>
  );
}

export default Adminfirstaids;
