import NavBar from "../componants/UI/NavBar"
import Contact from "../componants/Contact"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
      <header>
        <NavBar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Contact/>
      </footer>
      </body>
    </html>
  );
}
