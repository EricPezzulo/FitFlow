import { usersDb } from '@db/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId;
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' });
    }

    const data = usersDb.find(
      (x) => JSON.stringify(x.userId) === JSON.stringify(userId)
    );

    if (!data) {
      return NextResponse.json({
        error: `There is no user with userId:${userId}`,
      });
    } else return NextResponse.json({ ok: true, status: 200, user: data });
  } catch (error) {
    console.error('There was an error fetching the user', error);
    NextResponse.json({ ok: false, status: 500, error });
  }
}
