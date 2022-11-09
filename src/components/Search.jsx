import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=619" alt="avatar" />
        <div className="userChatInfo">
          <span>Jane </span>
        </div>
      </div>
    </div>
  )
}

export default Search