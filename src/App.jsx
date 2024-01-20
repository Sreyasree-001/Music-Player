
import { Content } from "./Components/Content"
import List from "./Components/List"
import { Navbar } from "./Components/Navbar"
import music1 from "./assets/music1.mp3"


function App() {
  const handlePlay = () => {
    new Audio(music1).play()
  }

  return (
    <>
      <Navbar />
      <div className="flex md:my-2 lg:mx-5">
        <div className="bg-white w-1/3 hidden lg:block">
        <List/>
        </div>
          <Content/>
      </div>
    </>
  )
}

export default App
