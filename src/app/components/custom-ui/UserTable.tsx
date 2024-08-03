import React from 'react';
import UserTableElement from './UserTableElement';
import { UserType } from '@/types/types';

const UserTable = ({ user }: { user: UserType[] }) => {
  return (
    <table className="flex flex-col border border-slate-300 rounded-lg shadow">
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
        {user.map((user: UserType, index: number) => (
          <UserTableElement key={index} user={user} />
        ))}
      </tbody>
      <tfoot className="flex items-center h-10 px-5 border-t border-slate-200">
        <tr className="grid grid-cols-2  w-full">
          <td className="text-sm">Showing 1-10 on page 1</td>
          <td className="grid grid-cols-3 justify-items-end w-fit">
            <div className="w-6 h-6 rounded border border-slate-300 flex items-center justify-center bg-slate-50">
              1
            </div>
            <div className="w-6 h-6 rounded border border-slate-300 flex items-center justify-center bg-slate-50">
              2
            </div>
            <div className="w-6 h-6 rounded border border-slate-300 flex items-center justify-center bg-slate-50">
              3
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default UserTable;
