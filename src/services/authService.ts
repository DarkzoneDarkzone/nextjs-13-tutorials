import apiAdmin from '@/utils/apiAdmin'

export const authenticate = async (email: string, password: string): Promise<any> => {
  const formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)
  return await apiAdmin.post('api/login', formData)
}
