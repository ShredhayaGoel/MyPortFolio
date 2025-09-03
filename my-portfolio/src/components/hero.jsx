function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold">Hi, I’m Shredhaya 👋</h1>
      <p className="mt-4 text-xl text-gray-600">
        A passionate developer building cool stuff with React + Tailwind.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;