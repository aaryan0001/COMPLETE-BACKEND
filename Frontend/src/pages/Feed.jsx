import React ,{useState , useEffect} from 'react'
import axios from 'axios'
const Feed=()=>{
    const[posts,setPosts]=useState([
    {
        _id:"1",
        image:"https://ik.imagekit.io/gren8hhlz/image__etnfGM6O.jpg",
        caption:"This is my first post"
    }
])
useEffect(()=>{
   axios.get('http://localhost:3000/posts')
   .then((res)=>{
    // console.log(res.data);
    setPosts(res.data.posts)
   })
},[])

    return(
        <section className='feed-section'>
            {
                posts.length>0?(
                    posts.map((post)=>{
                        return(
                            <div className='post' key={post._id}>
                                <img src={post.image} alt="post" />
                                <p>{post.caption}</p>
                            </div>
                        )
                    })
                ):(
                    <h1>No posts available</h1>
                )   
            }

            </section>
    )}

export default Feed
