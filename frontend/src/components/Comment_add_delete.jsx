import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import { parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { th } from "date-fns/locale";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Comment_add({ articleId, user }) {
  const [comments, setComments] = useState([]);
  const [body, setBody] = useState("");
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/comments/${articleId}`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  }, [articleId, comments]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user || !user.id) {
      MySwal.fire({
        title: "คุณยังไม่ได้เข้าสู่ระบบ?",
        text: "Please log in or register to comment articles.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "เข้าสู่ระบบ",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
      return;
    }

    axios
      .post("http://localhost:3001/comment/create", {
        article_id: articleId,
        user_id: user.id,
        body,
        user_fname: user.fname,
        user_lname: user.lname,
      })
      .then((response) => {
        setComments([...comments, response.data]);
        setBody("");
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteComment = (id) => {
    MySwal.fire({
      title: "ต้องการลบความคิดเห็นหรือไม่?",
      text: "Do you want to delete this comment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ลบความคิดเห็น",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios
            .delete(`http://localhost:3001/comment/delete/${id}`)
            .then(() => {
              setComments(comments.filter((comment) => comment.id !== id));
            })
            .catch((error) => console.error(error));

          MySwal.fire({ title: "ลบความคิดเห็นสำเร็จ!", text: "Comment deleted successfully", icon: "success", confirmButtonText: "ยืนยัน" });
        } catch (error) {
          console.error("Error deleting comment:", error);
          MySwal.fire({ title: "ลบความคิดเห็นไม่สำเร็จ!", text: "Failed to delete comment", icon: "error", confirmButtonText: "ยืนยัน" });
        }
      }
    });
  };

  function formatDateTimeToThai(isoDateString) {
    if (!isoDateString) return "Invalid date";

    const timeZone = "Asia/Bangkok";
    const date = parseISO(isoDateString);
    try {
      const formattedDate = formatInTimeZone(date, timeZone, "dd MMMM yyyy HH:mm 'น.'", { locale: th });

      const buddhistYear = date.getFullYear() + 543;
      const formattedDateWithBuddhistYear = formattedDate.replace(/(\d{4})/, buddhistYear.toString());
      return formattedDateWithBuddhistYear;
    } catch (error) {
      console.error("Invalid date format:", isoDateString);
      return "Invalid date";
    }
  }

  return (
    <div>
      <div style={containerStyle}>
        <form onSubmit={handleSubmit}>
          <div style={headerStyle}>
            <AccountCircleIcon style={iconStyle} />
            <p style={pStyle}>
              {user.fname} {user.lname}
            </p>
          </div>
          <hr />
          <div style={contentStyle}>
            <h3>Comment</h3>
            <textarea name="comment" style={textStyle} cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)} />
            <button style={{ ...buttonStyle, ":hover": buttonHoverStyle }} type="submit">
              comment
            </button>
          </div>
        </form>
      </div>
      <ul style={{ padding: "15px" }}>
        {comments.map((comment) => (
          <div style={containerStyle} key={comment.id}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto", // เพิ่มส่วนของปุ่ม Delete เข้ามา
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountCircleIcon style={iconStyle} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p style={{ margin: 0 }}>
                  {comment.user_fname} {comment.user_lname}
                </p>
                <p style={{ margin: 0 }}>{formatDateTimeToThai(comment.created_date)}</p>
              </div>
              {user.id === comment.user_id && (
                <IconButton
                  style={{ deleteButtonStyle }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent", // เปลี่ยนสีใสเมื่อโฮเวอร์
                      color: "#333", // สีของไอคอนเมื่อโฮเวอร์
                    },
                  }}
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              )}
            </div>
            <br />
            <p>{comment.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Comment_add;

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "15px",
  marginBottom: "15px",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
};

const iconStyle = {
  width: "48px",
  height: "48px",
};

const pStyle = {
  marginLeft: "10px",
};

const contentStyle = {
  marginTop: "10px",
};

const textStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "3px",
  marginBottom: "10px",
  width: "100%",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
  backgroundColor: "gray",
  color: "#fff",
  transition: "all 0.2s ease-in-out",
};

const buttonHoverStyle = {
  backgroundColor: "#222",
};

const deleteButtonStyle = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  marginRight: "10px",
  backgroundColor: "transparent", // เปลี่ยนเป็นสีใส
  color: "#d72e3e", // สีของไอคอน
};
