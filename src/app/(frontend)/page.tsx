import { headers as getHeaders } from 'next/headers.js'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // Si hay usuario autenticado, ir al dashboard
  if (user) {
    redirect(payloadConfig.routes.admin)
  }
  
  // Si no hay usuario, ir al login
  redirect(`${payloadConfig.routes.admin}/login`)
}