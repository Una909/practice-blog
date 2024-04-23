import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({postID, category, title, desc, thumbnail}) => {
  const shortDesc = desc.length > 145 ? desc.substr(0, 145) + '...' : desc;
  const shortTitle = title.length > 145 ? title.substr(0, 145) + '...' : title;
  return (
    <article className="post">
      <div className="postThumbnail">
        <img src={thumbnail} alt="title" />
      </div>
      <div className="postContent">
        <Link to={`/posts/${postID}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDesc}</p>
        <div className="postFooter">
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem