This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Connecting to ec2 instance

- Make sure you have the permissions file. It can be found in the s3 bucket 'versus-permissions'. The file is 'versus-website-next.pem'
- Once the permissions file is downloaded in your working directory run `ssh -o StrictHostKeyChecking=no -i "versus-website-next.pem" ec2-user@ec2-3-217-109-159.compute-1.amazonaws.com.compute-1.amazonaws.com`
- Once SSHed in run `sudo su`

example env
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_APP_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

First, run the development server:

NEXT_PUBLIC_UPLOAD_URL=
NEXT_PUBLIC_IMAGE_UPLOAD_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
APP_URL="http://localhost:3000"
WS_URL="ws://localhost:3001"
