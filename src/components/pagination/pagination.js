import React from "react";
import Pagination from "@material-ui/lab/Pagination";

function PaginationComponent(props) {
  console.log(props);
  return (
    <Pagination
      count={props.total}
      size="small"
      onChange={props.onChange}
      variant="outlined"
      color="primary"
    />
  );
}

export default PaginationComponent;
