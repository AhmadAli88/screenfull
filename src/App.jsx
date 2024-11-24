
import './App.css'
import FullscreenElement from './components/FullscreenElement'
import FullscreenToggle from './components/FullscreenToggle'
import FullscreenVideoPlayer from './components/FullscreenVideoPlayer'
import FullscreenWithEvent from './components/FullscreenWithEvent'
import ImageSlideshow from './components/ImageSlideshow'

function App() {
  

  return (
    <div>
      <FullscreenToggle/>
      <FullscreenElement/>
      <FullscreenWithEvent/>
      <FullscreenVideoPlayer/>
      <ImageSlideshow/>
    </div>
  )
}

export default App
