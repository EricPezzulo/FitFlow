'use client';
import { useFetchUser } from '@/hooks/useFetchUsers';

const UserPageComponent = ({ userId }: { userId: string | number }) => {
  const { data, isLoading, isError, error } = useFetchUser(userId);

  if (isLoading) return <div>Loading user</div>;
  if (isError || data.error) return <div>{data.error}</div>;

  return (
    <div>
      <div className="shadow w-96 h-96 rounded-lg m-5 border border-slate-200 p-5">
        <p className="text-lg">Name</p>
        <input
          type="text"
          className="border border-slate-300 rounded p-2"
          defaultValue={`${data.user.firstName} ${data.user.lastName}`}
        />
        <p>Phone number</p>
        <input
          type="text"
          className="border border-slate-300 rounded p-2"
          defaultValue={`${data.user.phoneNumber || null}`}
        />
        <p>Age: {data.user.age || 0}</p>
        <p>Weight: {data.user.weightLbs || 0} lbs</p>
      </div>
    </div>
  );
};

export default UserPageComponent;
