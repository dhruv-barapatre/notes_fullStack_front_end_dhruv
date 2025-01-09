import React, { useEffect, useState } from "react";
import NotesCard from "../Components/NotesCard";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Notespage = () => {
  const [state, setstate] = useState([]);
  const navigate = useNavigate();
  const Fetchdata = () => {
    axios
      .get("http://localhost:8080/notes/getAllNote", {
        withCredentials: true,
      })
      .then((data) => {
        setstate(data.data.data);
        toast.success(data.data.message);
      })
      .catch((err) => {
        if (err.response.data.message == "You are not Login..Login First....") {
          navigate("/sign-in");
        }
        toast.error(err.response.data.message);
      });
  };
  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <div>
      <h1>Notes</h1>
      <div
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {state.length > 0 ? (
          state.map((el) => <NotesCard key={el._id} data={el} />)
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
};

export default Notespage;
