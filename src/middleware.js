import { NextResponse } from "next/server";

export function middleware(request) {

  const current = request.cookies.get('currentUser');
  console.log("sadfg",current)


  if (!current) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    );
  }

   // Redirect logged-in users from the login page
   if (request.url === '/login' && current) {
    return NextResponse.redirect(
      new URL('/student-dashboard', request.url)
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/student-dashboard', '/student-courses','/complaints','/profile','/quizes','/student-bookmarks','/student-courses','/student-dashboard','/student-experience','/student-friends-and-families','/student-payment','/student-setting'],
};




















