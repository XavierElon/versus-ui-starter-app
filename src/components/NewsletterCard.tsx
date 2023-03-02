/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Switch } from '@headlessui/react'
import { createNewsletterUser } from '@/api/newsletter.api'
import { NewsletterUserData } from '@/models/interfaces'
import toast, { Toaster } from 'react-hot-toast'

export const NewsletterCard = () => {
  const [enabled, setEnabled] = useState(false)
  const [newsletterForm, setNewsletterForm] = useState<NewsletterUserData>({})
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(true)

  const handleNewletterSubmit = async (e: Event) => {
    e.preventDefault()
    setNewsletterForm({
      email: email,
      subscribed: subscribed
    })
    const succeeded = await createNewsletterUser(newsletterForm)
    if (succeeded) {
      toast.success('Succesfully subscribed')
    } else {
      toast.error('Did not subscribe successfully')
    }
  }
  return (
    <>
      <div className="section-inner _3col black">
        <div className="row w-row">
          <div className="w-col w-col-1">
            <div className="subscribe-socials">
              <Toaster position="bottom-center" reverseOrder={false} />
              <Link
                href="https://www.youtube.com/"
                className="footer-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf4e5fef4c8250dfad0a_icons8-play-button-100.png"
                  loading="lazy"
                  width={25}
                  alt=""
                />
              </Link>
              <Link
                href="https://www.twitch.tv/"
                className="footer-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf611d7ddd17ede45970_icons8-twitch-100.png"
                  loading="lazy"
                  width={25}
                  alt=""
                />
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="footer-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf6c68320d38540f2da7_icons8-facebook-100.png"
                  loading="lazy"
                  width={25}
                  alt=""
                />
              </Link>
              <Link
                href="https://twitter.com/"
                className="footer-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf75efcb605c0a486228_icons8-twitter-100.png"
                  loading="lazy"
                  width={25}
                  alt=""
                />
              </Link>
              <Link
                href="http://instagram.com"
                className="footer-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf87b9d25e13376ed3dc_icons8-instagram-100.png"
                  loading="lazy"
                  width={25}
                  alt=""
                />
              </Link>
              <Link
                href="https://discord.com/"
                className="footer-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf92393ed812979e445d_icons8-discord-100.png"
                  loading="lazy"
                  width={25}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="w-col w-col-5">
            <h4 className="text-white">Sign Up for Beta</h4>
            <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
              loading="lazy"
              alt=""
              className="mb-20"
            />
            <p className="text-white text-extra-small">
              Sign up today to receive the latest Rivals news, updates, offers,
              and more by email.
            </p>
          </div>
          <div className="w-col w-col-6">
            <div className="news-form w-form">
              <form
                onSubmit={(e) => {
                  handleNewletterSubmit(e)
                }}
                id="email-form"
                name="email-form"
                data-name="Email Form"
                // method="get"
              >
                <div className="input-group mb-20">
                  <input
                    type="email"
                    className="input dark mb-0 w-input"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder="Enter your email"
                    id="email"
                    onChange={(target) => setEmail(target.target.value)}
                    required={true}
                  />
                  <div className="corner-black small top-right" />
                  <div className="corner-black small bottom-left" />
                </div>
                <div className="text-extra-small text-white mb-20 text-white-opacity">
                  Rivals will be responsible for your personal data. For more
                  information please check our{' '}
                  <Link target="_blank" href="/">
                    Privacy Policy
                  </Link>
                </div>

                <div className="py-1">
                  <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
                    {({ checked }) => (
                      /* Use the `checked` state to conditionally style the button. */
                      <button
                        className={`${
                          checked ? 'bg-red-700' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            checked ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </button>
                    )}
                  </Switch>
                </div>
                <span className="text-extra-small text-white-opacity w-form-label mt-2">
                  I would like to receive news, special offers and other
                  information from Rivals and I am 16 years old or older.
                </span>

                <div>
                  <input
                    // ref={inputEl}
                    type="submit"
                    defaultValue="Subscribe"
                    data-wait="Please wait..."
                    className="button small white7 w-button mt-2"
                  />
                  {/* {form.state === Form.Loading ? (
                    <span>loading...</span>
                  ) : (
                    'Subscribe'
                  )} */}
                </div>
              </form>
              <div className="form-success w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="form-error w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="corner-dark bottom-left" />
        <div className="corner-dark top-right" />
      </div>
    </>
  )
}
