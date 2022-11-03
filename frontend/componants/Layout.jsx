import NavBar from "./UI/NavBar"
import Contact from "./Contact"

export default function Layout({ children }) {
    return (<>
          <NavBar/>
          {children}
          <Contact/>
          </>
    );
  }