const Header = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">Sujwal 👋</span>
      </h1>
      <button className="text-lg bg-red-600 text-white font-medium px-5 py-2 rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;
