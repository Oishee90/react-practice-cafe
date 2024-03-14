
import './App.css'
import Headers from './Components/Header/Headers'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {
  const[bookmarks,setBookmarks] = useState([]);
  const[readingTime,setReadingTime] = useState(0);


  const handleAddBookmark = blog =>{
  const newBookMarks = [...bookmarks, blog]
  setBookmarks(newBookMarks);
 
  }

   const handleMarkAsrRead = time =>{
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime)
   }
  return (
    <>
<Headers></Headers>
<div className='md:flex mx-auto max-w-7xl'>
<Blogs handleAddBookmark={handleAddBookmark}
handleMarkAsrRead={handleMarkAsrRead}></Blogs>
<Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
</div>
    
     
    </>
  )
}

export default App
