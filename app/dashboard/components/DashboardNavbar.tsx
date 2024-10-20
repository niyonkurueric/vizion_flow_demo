const DashboardNavbar = () => {
  return (
    <div className="navbar bg-white sticky top-0 z-[1000] flex justify-end shadow-sm">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
