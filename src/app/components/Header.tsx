import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-row w-full items-center h-14 border border-b border-slate-200">
      <div className="flex flex-row w-full justify-between">
        <div className="pl-3">
          <Link href="/" className="font-medium">
            FitFlow
          </Link>
        </div>
        <div className="flex flex-row items-center pr-3">
          <button
            type="button"
            className="hover:cursor-pointer hover:bg-slate-200 duration-75 ease-in mr-2 rounded bg-slate-100 border border-slate-200 px-2"
          >
            <p className="text-sm font-medium">Sign in</p>
          </button>

          <button type="button">
            <p className="text-sm font-medium">Create account</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
