const Hero = (props) => {
  return (
    <section className="bg-blue-900 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mx-8">
            {props.title}
          </h1>
          <p className="my-4 text-sm text-white mx-8">{props.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
