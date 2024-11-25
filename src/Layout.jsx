import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { AppRoutes } from "./routes/AppRoutes"

function Layout() {


  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default Layout
