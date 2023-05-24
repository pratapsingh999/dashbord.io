import React, { useState } from "react";
import Data from "./Date.json";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";


function Paginations() {
  const [search, setSearch] = useState("");

  const [currentPage , setCurrentPage] = useState(1);

  return (
    <>
      <div className="bgcolor">
        <div>
          <Container>
            <h1 className="tex">Product Information </h1>
            <form>
              <InputGroup className="my-5">
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Titel"
                />
              </InputGroup>
            </form>
          </Container>
        </div>

        <table className="table"  width={100}>
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </thead>
          <tbody>
            {Data.filter((Data) => {
              return search.toLowerCase() === ""
                ? Data
                : Data.title.toLocaleLowerCase().includes(search);
            }).map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      </>
  );
}


export default Paginations;
