import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: log or inspect something
  console.log('Middleware running:', request.url);

  return NextResponse.next();
}
