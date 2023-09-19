import React from "react";
import "./Pagination.css";

const Pagination = ({ postPerPage, totalPosts, paginate, currentpage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers, currentpage);
  return (
    <>
      {totalPosts && (
        <div className="pagination">
          <div
            className="flex "
            justifyContent="center"
            flexDirection="row"
            padding="15px"
          >
            <div spacing={4} overflowX="auto">
              {currentpage === 1 ? (
                <button disabled>Previous</button>
              ) : (
                <button
                  onClick={() => {
                    paginate(currentpage - 1);
                  }}
                >
                  Previous
                </button>
              )}

              {pageNumbers.map((number) => (
                <>
                  {currentpage === number ? (
                    <button
                      border="2px"
                      borderColor="green.500"
                      key={number}
                      onClick={() => {
                        paginate(number);
                      }}
                      href="!#"
                      x
                    >
                      {number}
                    </button>
                  ) : (
                    <button
                      key={number}
                      onClick={() => {
                        paginate(number);
                      }}
                      href="!#"
                      x
                    >
                      {number}
                    </button>
                  )}
                </>
              ))}
              {currentpage === pageNumbers.length ? (
                <button disabled>Next</button>
              ) : (
                <button
                  onClick={() => {
                    paginate(currentpage + 1);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
