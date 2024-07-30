import { usersDb } from '@db/db';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useAddUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
export const addUser = async ({
  firstName,
  lastName,
  userId,
}: {
  firstName: string | undefined;
  lastName: string | undefined;
  userId: string | number;
}) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, userId }),
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
