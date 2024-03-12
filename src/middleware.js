import { NextResponse } from "next/server";
import { useSelector } from "react-redux";

export function middleware(request) {
  
    const user = useSelector(state => state.user.currentUser);

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
   