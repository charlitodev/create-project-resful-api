import React, { useEffect, useState, useContext } from "react";
import { HomePaginate } from "../../views";
import { CRUDContextProvider } from "../../context/CRUDContext";
import ReactPaginate from "react-paginate";

const Paginate = ({ itemsPerPage }) => {
  const { data } = useContext(CRUDContextProvider);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  console.log(currentItems);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <HomePaginate currentItems={currentItems} />
      <ReactPaginate
        // pageClassName="list"
        // previousClassName="previous__button"
        // nextClassName="next__button"
        // containerClassName="paginate"
        // previousLinkClassName="link__text"
        // nextLinkClassName="link__text"
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        previousLinkClassName={"previousLinkClassName"}
        nextLinkClassName={"nextLinkClassName"}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
