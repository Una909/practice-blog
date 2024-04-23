import React from 'react'
import PostItem from '../components/PostItem'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/placeh.jpg'

const PostDetail = () => {
  return (
    <section className="postDetail">
      <div className="container postDetailContainer">
        <div className="postDetailButtons">
          <Link to={`/posts/wewer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/wewer/delete`} className='btn sm danger'>Delete</Link>
        </div>
        <h1>This title post</h1>
        <div className="postDetailThumbnail">
          <img src={Thumbnail} alt="Post img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis quibusdam et, impedit minima incidunt quaerat est dicta modi nihil maxime placeat nemo? Omnis facilis illo fuga facere possimus magnam iusto sit voluptatum consequatur sequi totam sint, odit voluptas quidem.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quam mollitia deserunt. Maxime ex nihil dolore officia. Minus perferendis eaque unde alias molestias. Possimus saepe consectetur architecto nemo, quae, adipisci atque alias veniam repellendus praesentium maxime necessitatibus animi laboriosam ducimus eaque fugiat quos incidunt! Eum, voluptatem ab? Error tenetur aliquam explicabo sequi laboriosam iusto porro.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque facere, at animi architecto quae repudiandae itaque! Vitae nisi voluptatibus corrupti sed, doloremque animi voluptas ipsa laborum obcaecati provident incidunt dolores a ea aperiam temporibus cupiditate quis cum unde? Debitis rerum ipsa dicta cumque praesentium inventore provident at iste suscipit nemo dolore itaque laboriosam doloribus aliquam iure nobis fuga facilis veritatis natus alias, perspiciatis dolorum commodi libero! Aperiam libero totam corporis praesentium earum id eligendi vitae tenetur, quis deleniti unde doloribus in possimus rerum nulla, vero quos sed error? Quas, eos animi cumque cupiditate earum nam voluptatem voluptates maxime repudiandae assumenda atque officia suscipit dignissimos provident eum. Vero earum quam voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur, dolor exercitationem molestiae perspiciatis dicta doloremque cupiditate dignissimos soluta dolores!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur perferendis debitis eveniet reiciendis, neque voluptates odit sint minus aspernatur labore quam ad. Asperiores ullam voluptates fuga quia rerum deleniti atque id quasi culpa, facilis hic! Dolores perferendis dolore maxime, veniam id quas quibusdam voluptatem voluptate quidem! Necessitatibus doloribus et beatae enim. Ut recusandae molestiae aperiam amet quae dolor illum quia sint esse veritatis architecto, quasi accusantium a dignissimos animi delectus non autem. Repellat, asperiores culpa doloribus, cumque reiciendis excepturi ipsum placeat cupiditate ea architecto omnis quibusdam dignissimos dolore! Sint necessitatibus cupiditate libero nulla repudiandae tempora magnam placeat cum culpa nemo quisquam laboriosam blanditiis aliquam, fuga velit. Voluptatibus rem animi cum nobis, quos eum expedita eveniet neque rerum saepe dolorum voluptates inventore autem iste ipsa aspernatur quis excepturi nihil eos. Consequatur ex saepe tempora quasi odio voluptatibus neque amet quam, qui molestias mollitia, exercitationem, natus eligendi iure beatae! Fugit laborum qui placeat esse fugiat voluptatum quidem autem omnis vel aperiam animi officiis soluta modi architecto, vitae dolor adipisci mollitia tempore ea culpa unde itaque beatae. Fuga soluta accusamus cum esse nam atque vitae, ipsum doloribus rem culpa repellendus facilis totam commodi obcaecati repudiandae alias ipsam aspernatur quidem quasi reiciendis eum necessitatibus?</p>
      </div>
    </section>
  )
}

export default PostDetail
