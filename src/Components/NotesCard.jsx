import React from "react";
import { Link } from "react-router-dom";

const NotesCard = (el) => {
  const { title,notesImage,_id} = el.data;
  console.log(el)
  return (
    <div key={_id}>
      <Link to={`/description/${_id}`}>
        <img src={notesImage} alt={title} className="card-image" />
      </Link>
      <h3 className="card-title">{title}</h3>

      <div className="card-buttons">
        <button className="edit-btn">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/Updatenotes/${_id}`}
          >
            Edit
          </Link>
        </button>
        <button className="delete-btn" onClick={() => Deletenotes(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
