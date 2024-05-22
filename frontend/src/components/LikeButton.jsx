import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./css/LikeButton.css";

function LikeButton(props) {
  const [liked, setLiked] = useState(props.article.liked);
  const [likes, setLikes] = useState(props.article.like_count);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setLiked(props.article.liked);
    setLikes(props.article.like_count);
  }, [props.article.liked, props.article.like_count]);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const handleLikeUnlike = () => {
    if (!props.user.id) {
      alert("Please log in or register to like articles.");
      return;
    }

    const endpoint = liked ? "updateunlike" : "updatelike";
    const method = "put";

    axios[method](
      `http://localhost:3001/article/${endpoint}/${props.article.article_id}`,
      { key: props.article.article_id }
    )
      .then((response) => {
        console.log(response.data);
        axios[method](
          `http://localhost:3001/like/${liked ? "unliked" : "liked"}/${
            props.article.article_id
          }/${props.user.id}`,
          { key: props.article.article_id }
        )
          .then((response) => {
            console.log(response.data);
            // ส่งข้อมูลผ่าน Socket.io เพื่ออัปเดตข้อมูลเมื่อมีการกด Like หรือ Unlike
            socket.emit("likeUpdated", { articleId: props.article.article_id });
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("likeUpdated", (data) => {
      if (data.articleId === props.article.article_id) {
        // รับข้อมูลจากเซิร์ฟเวอร์และอัปเดต state
        setLikes((prevLikes) => prevLikes + (liked ? -1 : 1));
        setLiked(!liked);
      }
    });

    return () => {
      socket.off("likeUpdated");
    };
  }, [socket, liked, props.article.article_id]);

  return (
    <div className="d-flex">
      <div onClick={handleLikeUnlike}>
        {liked ? (
          <img
            src="http://localhost:3000/images/red-heart-icon.svg"
            alt="Heart Icon"
            style={{
              marginTop: "5px",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        ) : (
          <img
            src="http://localhost:3000/images/heart-thin-icon.svg"
            alt="Heart Icon"
            style={{
              marginTop: "5px",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        )}
      </div>
      <h5 className="mx-2" style={{ marginTop: "6px" }}>
        {likes}
      </h5>
    </div>
  );
}

export default LikeButton;
