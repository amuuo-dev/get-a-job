import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Page from "./components/Page";
import BrowseJobs from "./components/BrowseJobs";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title=" Be a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <Page />
      <BrowseJobs />
    </>
  );
};

export default App;
