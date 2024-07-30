'use client';
import { useFetchUser } from '@/hooks/useFetchUsers';
import React from 'react';

const UserPageComponent = ({ userId }: { userId: string | number }) => {
  const { data, isLoading, isError } = useFetchUser(userId);

  if (isLoading) return <div>Loading user</div>;
  if (isError || !data) return <div>error </div>;
  return (
    <div>
      <p>userId:{data.user.userId}</p>
      <p>
        {data.user.firstName} {data.user.lastName}
      </p>
      <p>{data.user.phoneNumber}</p>
      <p>{data.user.weight}</p>
    </div>
  );
};

export default UserPageComponent;
