// import jwtDecode from 'jwt-decode'
// import { NextResponse, type NextRequest } from 'next/server'
// import type Token from '@/types/Token'

// const legacyPrefixes = ['/login', '/register']

// export function middleware (request: NextRequest): NextResponse {
//   const response = NextResponse.next()
//   const { pathname } = request.nextUrl

//   const allowPath: boolean = legacyPrefixes.some((prefix) => pathname.startsWith(prefix))
//   if (allowPath) {
//     return response
//   }

//   const cookie: Token | undefined = request.cookies.get('_token')
//   if ((!request.cookies.has('_token') || cookie === undefined)) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
//   if (cookie !== undefined) {
//     try {
//       jwtDecode(cookie.value)
//       // const jwt = jwtDecode(cookie.value)
//       // console.log(jwt)
//     } catch {
//       return NextResponse.redirect(new URL('/login', request.url))
//     }
//   }

//   return response
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)'
//   ]
// }
