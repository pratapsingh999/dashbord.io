import React from "react";
import Sidebar from "../components/sidebar";
import Box from "@mui/material/Box";

// import CustomPaginationActionsTable from "../pages/pagination";
import Tablesearch from "./TableSearch";


function Detailes() {
  
  return (
    <>
    <div className="bgcolor">
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        {/* <CustomPaginationActionsTable/> */} 
         {/* mui pagination */}
        
        <Tablesearch/>  
         {/* manual pagination */} 

        </Box>
      </Box>
      </div>
    </>
  );
}

export default Detailes;
