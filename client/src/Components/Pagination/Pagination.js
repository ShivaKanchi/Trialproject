import React from 'react'

const Pagination = ({ postPerPage, totalPosts }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers)
    return (
        <div>Pagination
            <ul className="pagination">
                {pageNumbers.map(number => {
                    <li key={number} className='pageitem'>
                        <a href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Pagination