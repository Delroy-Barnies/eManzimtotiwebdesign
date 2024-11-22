import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header/Header'
import styles from './App.module.css';
import { Home } from './home/Home';
import Footer from './footer/Footer';
import { About } from './about/About';
import { Packages_grid } from './packages_grid/Packages_grid';
import { Projects } from './projects/Projects';
import Contact from './contact/Contact';
import { useParams } from "react-router-dom";
import { WebsiteDesignAndBuild } from './packages/WebsiteDesignAnd Build';
import { CustomWebsiteSolutions } from './packages/CustomWebsiteSolutions';
import { BugFixes } from './packages/BugFixes';

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
