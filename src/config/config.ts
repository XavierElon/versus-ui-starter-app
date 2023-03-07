import dotenv from 'dotenv'

dotenv.config()


interface Config {
    DATABASE_URL: string
    NEXT_PUBLIC_APP_ID: string
    NEXT_PUBLIC_APP_KEY: string
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    GOOGLE_CLIENT_ID:string
    GOOGLE_CLIENT_SECRET:string
    FACEBOOK_APP_ID:string
    FACEBOOK_APP_SECRET:string
    NEXT_PUBLIC_UPLOAD_URL:string
    NEXT_PUBLIC_IMAGE_UPLOAD_URL:string
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:string
    STRIPE_SECRET_KEY:string
    OPENAI_API_KEY:string
    APP_URL:string
    WS_URL:string
  }

  let config: Config = {
      DATABASE_URL: process.env.DATABASE_URL || '',
      NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID || '',
      NEXT_PUBLIC_APP_KEY: process.env.NEXT_PUBLIC_APP_KEY || '',
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || '',
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || '',
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || '',
      FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || '',
      NEXT_PUBLIC_UPLOAD_URL: process.env.NEXT_PUBLIC_UPLOAD_URL || '',
      NEXT_PUBLIC_IMAGE_UPLOAD_URL: process.env.NEXT_PUBLIC_UPLOAD_URL || '',
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
      OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
      APP_URL: process.env.APP_URL || '',
      WS_URL: process.env.WS_URL || ''
  }
  
  export default config