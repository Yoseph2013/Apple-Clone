import Hero from "./Components/Hero"
import HighLights from "./Components/HighLights"
import Navbar from "./Components/Navbar.jsx"


const App = () => {
  return (
    <main className="bg-black">
    <Navbar/>
    <Hero/>
    <HighLights/>
    </main>
  )
}
export default App