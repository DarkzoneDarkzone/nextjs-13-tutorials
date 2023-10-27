'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Button } from 'antd'

const Page = (): React.ReactElement => {
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/'

  // const [formValues, setFormValues] = useState({
  //   email: '',
  //   password: ''
  // })

  const handlerSignIn = async (): Promise<any> => {
    await signIn('credentials', {
      redirect: true,
      email: 'darkzone@example.com',
      password: 'ASDqwe123',
      // email: formValues.email,
      // password: formValues.password,
      callbackUrl
    })
  }

  return (
    <div>
      {session !== null
        ? <>
          Signed in as {session?.user?.email} <br />
          <Button type="primary" className='bg-blue-500' onClick={async () => { await signOut() }}>Sign out</Button>
        </>
        : <>
          Not signed in <br />
          <Button type="primary" className='bg-blue-500' onClick={handlerSignIn}>Sign in</Button>
      </>}
    </div>
  )
}

export default Page
