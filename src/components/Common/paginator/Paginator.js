import React, { useState } from 'react'
import style from './Paginator.module.css'

const Paginator = ({ totalCount, itemsPerPage, butchSize, currentPage, onChangePage }) => {
  let pages = []
  const pageCount = Math.ceil(totalCount / itemsPerPage)
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  const butchCount = Math.ceil(pageCount / butchSize)
  const [butchNumber, setButchNumber] = useState(1)
  const next = butchNumber * butchSize
  const prev = (butchNumber - 1) * butchSize

  return (
    <div className={style.pagination}>
      {butchNumber > 1 && <button onClick={() => setButchNumber(butchNumber - 1)}>prev</button>}
      {pages
        .filter((page) => page >= prev && page <= next)
        .map((page) => (
          <span
            key={page}
            className={currentPage === page && style.pagination_selectedPage}
            onClick={() => {
              onChangePage(page)
            }}
          >
            {page}
          </span>
        ))}
      {butchNumber < butchCount && (
        <button onClick={() => setButchNumber(butchNumber + 1)}>next</button>
      )}
    </div>
  )
}
export default Paginator
