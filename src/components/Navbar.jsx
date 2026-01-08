function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-red-600 text-gray-100 border-b border-slate-700 sticky top-0 z-50">
      <span className="text-lg font-semibold">Dhiman Dasgupta</span>

      <div className="space-x-6 text-sm">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
