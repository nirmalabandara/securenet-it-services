import { NextResponse } from 'next/server';
import { initialRequests } from '@/lib/constants';

// In-memory store for server-side requests fallback
let inMemoryRequests = [...initialRequests];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: inMemoryRequests,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const id = `SN-${String(2409 + inMemoryRequests.length).padStart(4, '0')}`;
    const newRequest = {
      ...body,
      id,
      status: 'New',
      created: 'Just now',
    };
    inMemoryRequests.unshift(newRequest);

    return NextResponse.json(
      {
        success: true,
        message: 'Request registered successfully',
        data: newRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function PATCH(request) {
  try {
    const { id, status } = await request.json();
    inMemoryRequests = inMemoryRequests.map((r) =>
      r.id === id ? { ...r, status } : r
    );

    return NextResponse.json({
      success: true,
      message: `Updated status for ${id}`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update request' },
      { status: 400 }
    );
  }
}
