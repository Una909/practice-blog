import React, { useState } from 'react'

import PostItem from './PostItem'
import { DUMMY } from '../data'

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY)
  return (
    <section className='posts'>
        {posts.length > 0 ? <div className="container postsContainer">
        {
            posts.map(({id, thumbnail, category, title, desc}) =>
            <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            desc={desc}
            />)
        }
        </div> : <h2 className='center'>No posts found</h2>}
    </section>
  )
}

export default Posts