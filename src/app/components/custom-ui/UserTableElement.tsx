'use client';
import { UserType } from '@/types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import Dropdown from '../ui/Dropdown';
import { useRouter } from 'next/navigation';

const UserTableElement = ({ user }: { user: UserType }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <tr
      onClick={() => router.push(`/pt/${user.userId}`)}
      className="group grid grid-cols-5 gap-3 items-center border-b h-14 last:border-b-0 border-slate-200 py-1 px-3 hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg"
    >
      <td>
        <Image
          width={40}
          height={40}
          src={
            user.profilePicture ||
            'https://as2.ftcdn.net/v2/jpg/03/05/37/53/1000_F_305375322_2ZndLqWXETW0sgbm7LccoERzv6X7hNJZ.jpg'
          }
          alt="pro pic"
          className="rounded-lg object-cover"
          style={{ width: 'auto', height: 'auto' }}
        />
      </td>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.weightLbs} lbs</td>
      <td>{user.ptPackage}</td>
      <td className="items-center flex justify-between">
        {user.sessionsRemaining}
        <Dropdown
          onClose={() => setIsDropdownOpen(false)}
          open={() => setIsDropdownOpen(true)}
          isOpen={isDropdownOpen}
        />
      </td>
    </tr>
  );
};

export default UserTableElement;
