import React from "react";
import { PaginateWrapper, Paginate } from "./PaginationStyles";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <PaginateWrapper>
      <Paginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        pageClassName={"page"}
        activeClassName={"active"}
      />
    </PaginateWrapper>
  );
};

export default Pagination;
