import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = blog =>{
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark)
  }


  return (
    <>
      <Header></Header>
      <main>
        <div className='flex flex-col md:flex-row gap-5 container mx-auto mt-8'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <Bookmarks bookmark={bookmark}></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
