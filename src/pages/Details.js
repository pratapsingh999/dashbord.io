import React from "react";
import Sidebar from "../components/sidebar";
import Box from "@mui/material/Box";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Data from "../pages/Date.json";

// import Pagination from '@mui/material/Pagination';
import CustomPaginationActionsTable from './pagination'






function Detailes() {
  // const [pages, setPage] = useState(1);
  return (
    <>
    <div className="bgcolor">
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        <CustomPaginationActionsTable/>
          {/* <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Titles</TableCell>
                  <TableCell align="center">Body</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {Data.map((Data) => (
                  <TableRow
                    key={Data.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {Data.id}
                    </TableCell>
                    <TableCell align="center">{Data.title}</TableCell>
                    <TableCell align="center">{Data.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>

          <Box py={5} display="flex" justifyContent="center">
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            defaultpage={1}
            showFirstButton={true}
            showLastButton={true}
            // onChange={(e, value) => setPage(value)}
          />
        </Box> */}

        </Box>
      </Box>
      </div>
    </>
  );
}

export default Detailes;
