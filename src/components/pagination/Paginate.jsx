import React from "react";
import { HomePaginate } from "../../views";
import ReactPaginate from "react-paginate";
import usePaginate from "./usePaginate";

const Paginate = () => {
  const { handleChange, totalPages } = usePaginate();

  return (
    <>
      <HomePaginate />
      <ReactPaginate
        activeClassName={"item active"}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
        nextLabel="next >"
        onPageChange={handleChange}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        previousLinkClassName={"previousLinkClassName"}
        nextLinkClassName={"nextLinkClassName"}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
