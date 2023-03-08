import React from 'react'
import './Pagination.css'

const Pagination = ({ postPerPage, totalPosts }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers)
    return (
        <div className="pagination">
            {pageNumbers.map((number) => (
                < a href='!#' className='page-link' >
                    {number}
                </a>
            ))}
        </div >
    )
}

export default Pagination