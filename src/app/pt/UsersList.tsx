'use client';
import { UserType } from '@/types/types';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import Dialog from '@/components/ui/Dialog';
import { useRef, useState } from 'react';
import { useAddUser } from '@/hooks/useAddUser';

import { CirclePlus } from 'lucide-react';
import UserTableElement from '@/components/custom-ui/UserTableElement';
import BreadCrumbs from '@/components/ui/BreadCrumbs';

interface UserInfoType {
  firstName: HTMLInputElement | null;
  lastName: HTMLInputElement | null;
}

const UsersList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const userInfo = useRef<UserInfoType>({
    firstName: null,
    lastName: null,
  });
  const { data, isLoading, isError } = useFetchUsers();
  const { mutate: addUser } = useAddUser();

  if (isLoading) {
    return <div> loading users ...</div>;
  }
  if (isError || !data) {
    return <div>Error fetching users :|</div>;
  }

  const handleAddUser = (): void => {
    addUser({
      firstName: userInfo.current.firstName?.value,
      lastName: userInfo.current.lastName?.value,
    });
  };

  return (
    <div className="flex justify-center flex-col p-5">
      <BreadCrumbs />
      <div className="my-4 flex flex-row items-center justify-between">
        <p className="text-xl font-medium">List of users</p>
        <div className="justify-end flex">
          <button
            className="w-fit flex-row flex items-center bg-slate-900 text-white border-1 border-slate-400 font-medium px-2 py-1 rounded hover:bg-slate-700 duration-100 ease-in"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            <CirclePlus size={20} />
            <p className="hidden sm:block sm:pl-1">Add user</p>
          </button>
        </div>
      </div>

      <table className="flex flex-col border border-slate-300 rounded-lg">
        <thead className="h-10 flex items-center border-b border-slate-200">
          <tr className="grid grid-cols-5 place-items-start px-3 w-full">
            <th></th>
            <th>Name</th>
            <th>Weight</th>
            <th>PT Package</th>
            <th>Sessions</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user: UserType, index: number) => (
            <UserTableElement key={index} user={user} />
          ))}
        </tbody>
        <tfoot className="flex items-center h-10 px-5 border-t border-slate-200">
          <tr>
            <td className="text-sm">Showing 1-10 on page 1</td>
          </tr>
        </tfoot>
      </table>

      <Dialog
        onSubmit={handleAddUser}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      >
        <div className="flex flex-col">
          <p className="font-medium">Add user</p>
          <label htmlFor="firstName">First name</label>
          <input
            className="border border-1 border-slate-200 rounded p-1  bg-white m-1"
            type="text"
            name="firstName"
            ref={(e) => {
              userInfo.current.firstName = e;
            }}
          />

          <label htmlFor="lastName">Last name</label>
          <input
            ref={(e) => {
              userInfo.current.lastName = e;
            }}
            className="border border-1 border-slate-200 rounded p-1  bg-white m-1"
            type="text"
            name="lastName"
          />
        </div>
      </Dialog>
    </div>
  );
};

export default UsersList;
