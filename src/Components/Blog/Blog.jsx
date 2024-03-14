import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddBookmark,handleMarkAsrRead }) => {
const {title,cover,reading_time,author,author_img,posted_date,hashtags} = blog;
    return (
        <div className='mb-2-'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'> 
                <div className='flex'>
                    <img className='w-14' src={author_img} alt=""/>
                    <div className='ml-6'><h3>{author}</h3>
                    <h3>{posted_date}</h3>
                    </div>
                </div>
                <div>
                   <span>{reading_time} min read</span> 
                   <button onClick={() => {handleAddBookmark(blog)} }className='ml-2 text-red-600 text-2xl'> 
                   <FaBookmark /></button> 
                </div>
            </div>
          <h2 className="text-4xl mb-4">{title}</h2>  
          <p>{
            hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
}</p>
<button onClick={() => handleMarkAsrRead(reading_time)} className='text-purple-600'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmark : PropTypes.func,
    handleMarkAsrRead : PropTypes.func

}
export default Blog;