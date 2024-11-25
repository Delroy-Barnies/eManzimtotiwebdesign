import { useParams } from "react-router-dom";
import { About } from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Home } from './home/Home';
import { BugFixes } from './packages/BugFixes';
import { CustomWebsiteSolutions } from './packages/CustomWebsiteSolutions';
import { WebsiteDesignAndBuild } from './packages/WebsiteDesignAnd Build';
import { Packages_grid } from './packages_grid/Packages_grid';
import { Projects } from './projects/Projects';

function App() {
  const { section } = useParams();

  switch (section) {
    case "websitedesignandbuild":
      return (<>
        <Header />
        <WebsiteDesignAndBuild />
        <Packages_grid />
        <Footer />
      </>)

    case "customwebsitesolutions":
      return (<>
        <Header />
        <CustomWebsiteSolutions />
        <Packages_grid />
        <Footer />
      </>)

    case "bugfixes":
      return (<>
        <Header />
        <BugFixes />
        <Packages_grid />
        <Footer />
      </>)

    case "contact":
      return (<>
        <Header />
        <Contact />
        <Footer />
      </>)

    default:
      return (<>
        <Header />
        <Home />
        <About />
        <Packages_grid />
        <Projects />
        <Contact />
        <Footer />
      </>)
  }
}

export default App
