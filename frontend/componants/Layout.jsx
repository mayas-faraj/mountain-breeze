import NavBar from "./NavBar";
import Contact from "./Contact"

const Layout = ({ children }) => {
    return (<>
          <NavBar />
          {children}
          <Contact/>
          </>
    );
}

  export default Layout;