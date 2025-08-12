import React, { useState } from "react";

function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      <img src={image} alt={name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <footer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>{name}</h4>
          <h4 style={{ color: "green" }}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            style={{ marginLeft: "5px", color: "blue", cursor: "pointer", border: "none", background: "transparent" }}
          >
            {readMore ? "See less" : "Show more"}
          </button>
        </p>
        <button
          onClick={() => removeTour(id)}
          style={{
            background: "red",
            color: "#fff",
            padding: "5px 10px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Remove
        </button>
      </footer>
    </article>
  );
}

export default Tour;