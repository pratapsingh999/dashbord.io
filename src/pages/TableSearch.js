import React, { useState } from "react";
import Data from "./Date.json";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";




function Paginations() {
  const [search, setSearch] = useState("");

  const itemPerPage = 10;
  const numberOfPage = Math.ceil(Data.length / itemPerPage);
  const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);

  const [currentPage, setCurrentPage] = useState(0);
  const rows = Data.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage

  );
  function handelpagechange(pagenumber) {
    setCurrentPage(pagenumber);
  }

  // const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 10;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = Data.slice(firstIndex, lastIndex);
  // const numberOfPage = Math.ceil(Data.length / recordsPerPage);
  // const numbers = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);

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

        <table className="table" width={100}>
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </thead>
          <tbody>
            {/* {Data.filter((Data) => { */}
            {rows.filter((Data) => {
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

        <div>
          <button disabled={currentPage<1} onClick={() => handelpagechange(currentPage - 1)}>
            previous</button>
          {pageIndex
            .slice(
              Math.max(0, currentPage - 2),
              Math.min(numberOfPage, currentPage + 3)
            )
            .map((page) => (
              <button
                key={page}
                onClick={() => handelpagechange(page-1)}
                className={page === currentPage+1 ? "active" : ""}
              >
                {page}
              </button>
            ))}
          <button  onClick={() => handelpagechange(currentPage + 1)}>
            next
          </button>
        </div>

        {/* <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                previouspage
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" className="page-link" onClick={changeCPage}>
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Nextpage
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
  // function prePage() {
  //   if (currentPage !== firstIndex) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }
  // function changeCPage(id) {
  //   setCurrentPage(id);
  // }
  // function nextPage() {
  //   if (currentPage !== lastIndex) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }
}

export default Paginations;
