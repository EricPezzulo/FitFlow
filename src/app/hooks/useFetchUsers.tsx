import { useQuery } from '@tanstack/react-query';

export function useFetchUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}
export const fetchUsers = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/users`, {
      method: 'GET',
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('There was an issue fetching users', error);
  }
};

export function useFetchUser(userId: string | number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
}
export const fetchUser = async (userId: string | number) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'GET',
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('There was an issue fetching user', error);
  }
};
