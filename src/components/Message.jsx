import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=619" alt="avatar" />
        <span>just now</span>
      </div>
      <div className="messageContent">
      <p>hello</p>
      <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=619" alt="avatar" />
      </div>
    </div>
  )
}

export default Message