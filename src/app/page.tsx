import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <div className="grid gap-3">
        <button
          type="button"
          className="hover:cursor-pointer hover:bg-slate-100 hover:text-black duration-75 text-slate-700 ease-in flex items-center justify-center bg-white rounded-md border border-slate-200 w-44 h-20"
        >
          <p className="text-lg font-medium">Organizations</p>
        </button>
        <button
          type="button"
          className="hover:cursor-pointer hover:bg-slate-100 text-slate-700 hover:text-black duration-75 ease-in flex items-center justify-center bg-white rounded-md border border-slate-200 w-44 h-20"
        >
          <Link
            className="h-full w-full items-center justify-center flex"
            href="/pt"
          >
            <p className="font-medium text-lg">Personal Trainers</p>
          </Link>
        </button>
      </div>
    </main>
  );
}
