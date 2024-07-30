'use client';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import Dialog from '@/components/ui/Dialog';
import { useRef, useState } from 'react';
import { useAddUser } from '@/hooks/useAddUser';
import { CirclePlus } from 'lucide-react';
import BreadCrumbs from '@/components/ui/BreadCrumbs';
import UserTable from '@/components/custom-ui/UserTable';
import { v4 as uuidv4 } from 'uuid';

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
      userId: uuidv4(),
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

      <UserTable user={data.data} />
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
