import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Page from "./components/Page";
import BrowseJobs from "./components/BrowseJobs";
import ViewAll from "./components/ViewAll";
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
      <ViewAll />
    </>
  );
};

export default App;
