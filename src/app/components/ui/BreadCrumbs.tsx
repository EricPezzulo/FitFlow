'use client';

import { usersDb } from '@db/db';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const BreadCrumbs = () => {
  // create logic to dynamically render the correct breadcrumb trail
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  const userBreadCumbName = usersDb.find((x) => x.userId === pathnames[1]);
  console.log(pathnames);

  return (
    <div className="flex flex-row items-center">
      <Link href="/">
        <Home className="w-5 h-5" />
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <li key={to} className="flex items-center">
            <ChevronRight className="w-5 h-5" />
            <Link href="/pt">Users</Link>
            <ChevronRight className="w-5 h-5" />
            <Link className="text-blue-600" href={to}>
              {/* {value.charAt(0).toUpperCase() + value.slice(1)} */}
              {userBreadCumbName?.firstName} {userBreadCumbName?.lastName}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
