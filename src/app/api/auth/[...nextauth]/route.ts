import { authenticate } from '@/services/authService'
import NextAuth from 'next-auth'
import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        if (typeof credentials !== 'undefined') {
          const res = await authenticate(credentials.email, credentials.password)
          if (typeof res !== 'undefined') {
            return { ...res.user, apiToken: res.token }
          } else {
            return null
          }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth/signin'
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
