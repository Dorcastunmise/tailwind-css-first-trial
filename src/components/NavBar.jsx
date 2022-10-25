const NavBar = () => {
  return (
    <>
        <nav className="flex justify-center space-x-4 my-5 bg-transparent">
            <a href="#" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="#" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
            <a href="#" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
            <a href="#" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
        </nav>
        <hr className="my-4 mx-auto w-48 h-1 bg-violet-200 rounded border-0 md:my-10 dark:bg-violet-200"/>
    </>
  );
};

export default NavBar;