import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-1 md:grid-cols-3 justify-between gap-6'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
