import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover_img: cover, author, author_img, post_date, reading_time, hashtags} = blog
    return (
        <div className='py-12 border-b'>
            <img className=' w-full rounded-lg' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='my-4 flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <figure>
                        <img src={author_img} alt="" className='w-12 rounded-full'/>
                    </figure>
                    <div>
                        <h3 className='text-lg font-bold'>{author}</h3>
                        <p className=' font-semibold text-[#11111199]'>{post_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-lg font-medium text-[#11111199]'>{reading_time} min read</span>
                    <button 
                        onClick={() => handleAddToBookmark(blog)}
                        className=' text-lg text-[#11111199]'
                    ><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-3xl font-semibold mb-3 leading-normal">{title}</h2>
            <p  className=' space-x-1 font-semibold text-[#11111199]'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>#{hash} </a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;