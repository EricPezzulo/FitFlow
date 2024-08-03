import { UserType } from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useAddUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['add-user'],
    mutationFn: addUser,
    onSuccess: () => {
      console.log('mutation successful');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
export const addUser = async (user: UserType) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
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
