import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0)
  const handleBookmark = blog =>{
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark)
  }

  const handleMarAsRead = (time)=>{
    const newReadingTime = readTime + time;
    setReadTime(newReadingTime)
  } 


  return (
    <>
      <Header></Header>
      <main>
        <div className='flex flex-col md:flex-row gap-5 container mx-auto mt-8'>
          <Blogs handleBookmark={handleBookmark} handleMarAsRead={handleMarAsRead}></Blogs>
          <Bookmarks readTime={readTime} bookmark={bookmark}></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
