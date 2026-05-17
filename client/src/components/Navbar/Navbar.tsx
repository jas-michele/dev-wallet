
function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold">
        DevWallet
      </h1>

      <div className="flex gap-6">
        <button className="hover:text-gray-300">
          Projects
        </button>

        <button className="hover:text-gray-300">
          GitHub
        </button>

        <button className="hover:text-gray-300">
          Contact
        </button>
      </div>

    </nav>
  );
}

export default Navbar;