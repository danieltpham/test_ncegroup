import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { host, pathname } = req.nextUrl;

  console.log(host);
  console.log(pathname);

  // Redirect from ncegroup.com.au/ to ncegroup.com.au/en
  if (pathname === '/') {
    return NextResponse.redirect('https://'+host+'/en');
  }
  
  return NextResponse.next();
}