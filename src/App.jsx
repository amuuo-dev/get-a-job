import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Page from "./components/Page";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title=" Be a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <Page />
    </>
  );
};

export default App;
