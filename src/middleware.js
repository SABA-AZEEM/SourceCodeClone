import { NextResponse } from "next/server";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';

export function middleware(request) {
  
    const user = Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null;
    console.log(user);

    if(!user){
      return NextResponse.redirect(
        new URL('/login',request.url)
      )
    }

    return NextResponse.next();
  }

  export const config = {
    matcher: ['/student-dashboard','/student-courses']
  }
   