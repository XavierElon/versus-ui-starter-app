import Link from "next/link"
import { AiFillYoutube, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"
import { BsTwitch } from "react-icons/bs"

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
    return (
         <div className="section footer wf-section">
      <div className="container">
        <div className="text-center">
          <img
            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60ce076f36f3d28370d04f56_footer-logos.svg"
            loading="lazy"
            width={800}
            alt=""
            className="mb-60"
          />
        </div>
        <div className="row mb-40 w-row">
          <div className="w-col w-col-3">
            <Link href="https://www.esrb.org/" className="w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60ce098852531477a036bb70_esrb-rp-fob.svg"
                loading="lazy"
                width={200}
                alt=""
                className="mb-10"
              />
            </Link>
          </div>
          <div className="w-col w-col-9">
            <p className="text-extra-small align-left text-white-opacity mb-10">
              Versus, Inc. Are You Ready To Compete With Players From All Over The World? Join Our Community And Become A Part Of the best gaming experience ever!
            </p>
          </div>
        </div>
        <div className="divider mb-40" />
        <div className="footer-links">
          <div className="footer-lonks-left">
            <Link href="/" className="footer-logo w-inline-block">
              {/* Logo here */}
            </Link>
            <Link href="" className="footer-link">
              Support
            </Link>
            <Link href="" className="footer-link">
              About us
            </Link>
            <Link href="/" className="footer-link">
              licensing
              <br />
            </Link>
          </div>
          <div className="subscribe-socials community align-right">
            <Link
              href="https://www.youtube.com/"
              className="footer-social footer-link w-inline-block"
            >
               <AiFillYoutube />
            </Link>
            <Link
              href="https://www.twitch.tv/"
              className="footer-social footer-link w-inline-block"
            >
            <BsTwitch />
            </Link>
            <Link
              href="https://www.facebook.com/"
              className="footer-social footer-link w-inline-block"
            >
              <AiFillFacebook />
            </Link>
            <Link
              href="https://twitter.com/"
              className="footer-social footer-link w-inline-block"
            >
              <AiFillTwitterCircle
              />
            </Link>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Footer