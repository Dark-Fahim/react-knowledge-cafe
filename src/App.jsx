import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <div className='flex flex-col md:flex-row container mx-auto mt-8'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
