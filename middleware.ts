import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res});
    const { 
        data: { session },
    } = await supabase.auth.getSession();

    if(req.nextUrl.pathname.startsWith('/dashboard')) { //check whether user is authenticated before proceeding to dashboard.
        if(!session) {
            return NextResponse.redirect(new URL('/login', req.nextUrl)); //if not redirect user to login page
        }
    }

    const emailListError = 'Email link is invalid or expired';
    if(req.nextUrl.searchParams.get('error_description') === emailListError && req.nextUrl.pathname !== '/signup'
    ){
        return NextResponse.redirect(
            new URL(
                `/signup?error_description=${req.nextUrl.searchParams.get(
                    'error_description'
                  )}`, req.url
            )
        )
    }


    //If user is already signed in and redirect to dashboard
    if (['/login', '/signup'].includes(req.nextUrl.pathname)) {
        if (session) {
          return NextResponse.redirect(new URL('/dashboard', req.url));
        }
      }
      return res;

}