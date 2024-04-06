import React from 'react'
import { useParams } from "react-router-dom";

const CommentsSection = () => {
  const {postId} = useParams()
  return (
    <div>{postId}</div>
  )
}

export default CommentsSection