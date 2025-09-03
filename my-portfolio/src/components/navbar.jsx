function Navbar() {
  return (
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">MyPortfolio</h1>
            <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
</ul>
    </div>
  );
}
export default Navbar;