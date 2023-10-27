import { withAuth } from 'next-auth/middleware'

const legacyPrefixes = ['/auth/signin', '/auth/register']

// middleware is applied to all routes, use conditionals to select
export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const { pathname } = req.nextUrl
        const allowPath: boolean = legacyPrefixes.some((prefix) => pathname.startsWith(prefix))
        if (!allowPath && token === null) {
          return false
        }
        return true
      }
    }
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /icons (icons file in public folder)
     */
    '/((?!api|_next/static|_next/image|icons/|favicon.ico).*)'
  ]
}
