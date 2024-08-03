'use client';

import { usersDb } from '@db/db';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BreadCrumbs = () => {
  // create logic to dynamically render the correct breadcrumb trail
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  const userId = pathnames[1];

  const [userBreadCrumbName, setUserBreadCrumbName] = useState<string | null>();
  useEffect(() => {
    let user = usersDb.find((x) => x.userId === userId);
    if (user) {
      setUserBreadCrumbName(`${user?.firstName} ${user?.lastName}`);
    }
    // console.log(userBreadCrumbName);
  }, [userBreadCrumbName, userId]);

  return (
    <div className="flex flex-row items-center p-2">
      <Link href="/">
        <Home className="w-6 h-6 text-slate-700 hover:text-slate-500 duration-75 ease-in" />
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isUserSegment = index === 1 && userBreadCrumbName;

        return (
          <li key={to} className="flex items-center ">
            <ChevronRight className="w-6 h-6 text-slate-700" />
            {index === 0 ? (
              <Link
                href="/pt"
                className="font-medium text-slate-700 hover:text-slate-500 duration-75 ease-in"
              >
                Users
              </Link>
            ) : (
              <Link
                className="text-slate-700 font-medium hover:text-slate-500 duration-75 ease-in"
                href={to}
              >
                {isUserSegment
                  ? userBreadCrumbName
                  : value.charAt(0).toUpperCase() + value.slice(1)}
                {/* {userBreadCrumbName} */}
              </Link>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
