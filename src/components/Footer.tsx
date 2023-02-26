import Link from 'next/link'
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillTwitterCircle
} from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <div className="flex items-center justify-center pb-40, pt-20">
      <div className="max-w-1200px px-20">
        <div className="text-center">
          <img
            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60ce076f36f3d28370d04f56_footer-logos.svg"
            loading="lazy"
            width={800}
            alt=""
            className="mb-60"
          />
        </div>
        <div className="text-center flex-col-reverse md:flex-row flex justify-center">
          <p className="text-extra-small align-left text-white-opacity mt-5 pb-10">
            Versus, Inc. Are You Ready To Compete With Players From All Over The
            World?
            <br />
            Join Our Community And Become A Part Of the best gaming experience
            ever!
          </p>
        </div>
        <div className="divider mb-40" />
        <div className="text-white">
          <div className="flex justify-center space-x-10 mb-40">
            <Link href="/" className="text-white no-underline">
              {/* Logo here */}
            </Link>
            <Link
              href="https://docs.google.com/document/d/1dDu1g0eifOj_AAkLqCvHuCfhQR316-zc/export?format=pdf"
              className="text-white no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://docs.google.com/document/d/1eW_9C13b27oEj4jP9-gR8RwzvkPJkqYB/export?format=pdf"
              className="text-white no-underline"
            >
              Cookie Policy
            </Link>
            <Link
              href="https://docs.google.com/document/d/1vGgzrIXg2rSwPzZVVUdfJFl0SRAo4Skp/export?format=pdf"
              className="text-white no-underline"
            >
              Terms & Conditions
              <br />
            </Link>

            <div className="flex text-center justify-center space-x-10 py-1 mb-40">
              <Link href="https://www.youtube.com/" className="w-25 text-white">
                <AiFillYoutube />
              </Link>
              <Link href="https://www.twitch.tv/" className="w-25 text-white">
                <BsTwitch />
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="w-25 text-white"
              >
                <AiFillFacebook />
              </Link>
              <Link href="https://twitter.com/" className="w-25 text-white">
                <AiFillTwitterCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
