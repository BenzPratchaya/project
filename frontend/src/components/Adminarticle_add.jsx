import React, { useState, useEffect } from "react";
import axios from "axios";
import { CssBaseline, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Typography, MenuItem, Select } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Adminarticle_add({ popupadd, setPopupAdd, setArticles }) {
  const MySwal = withReactContent(Swal);
  const [articletype, setArticleType] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "", image: null, type_id: "0" });

  useEffect(() => {
    if (popupadd) {
      setFormData({
        title: "",
        content: "",
        image: null,
        type_id: "0",
      });
    }
  }, [popupadd]);

  useEffect(() => {
    fetch("http://localhost:3001/articletype")
      .then((res) => res.json())
      .then((result) => {
        setArticleType(result);
      });
  }, []);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setPopupAdd(false);

    MySwal.fire({
      title: "ต้องการสร้างข้อมูลใช่หรือไม่?",
      text: "Do you want to create this article entry?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "สร้างข้อมูล",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const data = new FormData();
          data.append("title", formData.title);
          data.append("content", formData.content);
          data.append("image", formData.image); // ใช้ formData.image ไม่ใช่ formData.file
          data.append("type_id", formData.type_id);

          await axios.post("http://localhost:3001/article/create", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          // อัปเดตรายการ articles ใหม่
          axios
            .get("http://localhost:3001/articles")
            .then((res) => {
              setArticles(res.data);
            })
            .catch((error) => {
              console.error("Error fetching articles: ", error);
            });

          MySwal.fire({
            title: "สร้างข้อมูลสำเร็จ!",
            text: "Article created successfully",
            icon: "success",
            confirmButtonText: "ยืนยัน",
          });
        } catch (error) {
          console.error("Error creating article:", error);
          MySwal.fire({
            title: "สร้างข้อมูลไม่สำเร็จ!",
            text: "Failed to create article",
            icon: "error",
            confirmButtonText: "ยืนยัน",
          });
        }
      } else {
        setPopupAdd(true);
      }
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* โค้ดสำหรับ Popup */}
      <Dialog open={popupadd} onClose={() => setPopupAdd(false)} fullWidth maxWidth="md">
        <form onSubmit={handleSubmit}>
          <DialogTitle sx={{ fontFamily: "'Kanit', sans-serif" }}>Create Article</DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography sx={{ fontFamily: "'Kanit', sans-serif" }}>Title</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Title"
                  fullWidth
                  value={formData.title}
                  onChange={handleInputChange}
                  name="title"
                  InputProps={{
                    sx: {
                      borderRadius: 3,
                      fontFamily: "'Kanit', sans-serif",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "'Kanit', sans-serif",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontFamily: "'Kanit', sans-serif" }}>Type</Typography>
                <Select
                  variant="outlined"
                  fullWidth
                  value={formData.type_id}
                  onChange={(event) => setFormData({ ...formData, type_id: event.target.value })}
                  sx={{
                    borderRadius: 3,
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  <MenuItem value="0" disabled sx={{ fontFamily: "'Kanit', sans-serif" }}>
                    * เลือกประเภทบทความ
                  </MenuItem>
                  {articletype.map((type) => (
                    <MenuItem key={type.id} value={type.id} sx={{ fontFamily: "'Kanit', sans-serif" }}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "'Kanit', sans-serif" }}>Content</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Content"
                  fullWidth
                  multiline
                  value={formData.content}
                  onChange={handleInputChange}
                  name="content"
                  InputProps={{
                    sx: {
                      borderRadius: 3,
                      fontFamily: "'Kanit', sans-serif",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "'Kanit', sans-serif",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "'Kanit', sans-serif" }}>Image</Typography>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{
                    fontSize: "16px",
                    color: "#333",
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "12px",
                    outlineColor: "#007bff",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                />
                {formData.image && (
                  <div>
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        margin: "10px 0",
                      }}
                      src={URL.createObjectURL(formData.image)}
                      alt="Selected"
                    />
                  </div>
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              style={{
                background: "var(--blue1)",
                color: "white",
                fontFamily: "'Kanit', sans-serif",
              }}
              onClick={() => setPopupAdd(false)}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              style={{
                background: "var(--blue1)",
                color: "white",
                fontFamily: "'Kanit', sans-serif",
              }}
              onClick={handleSubmit}
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

export default Adminarticle_add;
