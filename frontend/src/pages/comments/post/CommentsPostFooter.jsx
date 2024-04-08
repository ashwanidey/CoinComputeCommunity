import React from 'react'

const CommentsPostFooter = ({post}) => {
  function convertToIST(timestamp) {
    const date = new Date(timestamp);
    const options = {
        timeZone: 'Asia/Kolkata', // Set the time zone to IST
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    return date.toLocaleString('en-US', options);
}
  return (
    <div>{convertToIST(post.createdAt)}</div>
  )
}

export default CommentsPostFooter