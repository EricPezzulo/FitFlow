import { usersDb } from '@db/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const users = usersDb;
    return NextResponse.json({ ok: true, status: 200, data: users });
  } catch (error) {
    console.error(error, 'There was a internal server error fetching users.');
    return NextResponse.json({
      msg: 'There was an internal server error fetching users',
      error,
      status: 500,
    });
  }
}
export async function POST(request: Request) {
  try {
    const user = await request.json();
    usersDb.push(user);
    return NextResponse.json({
      ok: true,
      status: 201,
      data: user,
    });
  } catch (error) {
    console.error('There was an internal server error adding a user', error);
    return NextResponse.json({
      msg: 'There was an internal server error adding a user',
      status: 500,
      error,
    });
  }
}
