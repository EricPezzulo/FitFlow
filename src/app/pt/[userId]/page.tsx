import UserPageComponent from '@/components/SSR-Page-Children/UserPageComponent';
import { fetchUser } from '@/hooks/useFetchUsers';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function UserPage({
  params,
}: {
  params: { userId: string | number };
}) {
  const { userId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserPageComponent userId={userId} />
    </HydrationBoundary>
  );
}
