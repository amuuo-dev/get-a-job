import Hero from "../components/Hero";
import Page from "../components/Page";
import BrowseJobs from "../components/BrowseJobs";
import ViewAll from "../components/ViewAll";
const HomePage = () => {
  return (
    <>
      <Hero
        title=" Be a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <Page />
      <BrowseJobs isHome={true} />
      <ViewAll />
    </>
  );
};

export default HomePage;
