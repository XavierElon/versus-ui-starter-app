/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header'
import Link from 'next/link'
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook
} from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
import Seo from '@/components/Seo'
import { Fragment, useState } from 'react'
import { Switch } from '@headlessui/react'
import Footer from '@/components/Footer'

export default function DashboardLayout() {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Seo
        title="Versus - The Next Evolution of Competitive Gaming"
        description="Versus allows users to play for real earnings. Players will compete against their rivals in solo head-to-head matches, team versus team events, and tournaments. Play with friends, earn, and experience the excitement of competitive gaming."
      />
      <Header />
      <div className="wrap">
        <div className="header-shooter mb-20 wf-section">
          <div className="container">
            <div className="center-block mb-60">
              <div className="text-highlight font-mono primary mb-40">
                Coming Soon...
              </div>
              {/* an Image for versus here */}
              <h5 className="text-white mb-40">
                The Next Evolution of Competitive Gaming
              </h5>
              <div className="button-group">
                <Link href="/" className="button primary mb-20 large w-button">
                  Download now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section pt-0 wf-section">
          <div className="container">
            <div className="center-block">
              <div className="text-highlight primary mb-20">Game modes</div>
              <h2 className="text-white">
                THE NEXT EVOLUTION
                <br />
                OF GAMING
              </h2>
              <p className="text-white-opacity text-large mb-40">
                Versus allows users to play for real earnings. Players will
                compete against their rivals in solo head-to-head matches, team
                versus team events, and tournaments. Play with friends, earn,
                and experience the excitement of competitive gaming.
              </p>
            </div>
            <div className="gamemodes-slides-container">
              <div
                data-duration-in={300}
                data-duration-out={100}
                data-easing="linear"
                data-current="Tab 1"
                className="gamemodes-slides w-tabs"
              >
                <div className="w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className="gamemodes-slides-tab w-tab-pane w--tab-active"
                  >
                    <div className="modal-action">
                      <div className="play-button-shooter" />
                      <img
                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 96vw"
                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1.jpg 1400w"
                        alt=""
                        className="image gamemodes-slides-image"
                      />
                    </div>
                    <div className="modal">
                      <div className="modal-close">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fad710da1566ac609c6c4cb_close-modal.svg"
                          loading="lazy"
                          width={20}
                          alt=""
                          className="modal-close-icon"
                        />
                      </div>
                      <div className="modal-content">
                        <div className="w-container">
                          <div
                            style={{ paddingTop: '56.17021276595745%' }}
                            className="w-embed-youtubevideo"
                          >
                            <iframe
                              src="https://www.youtube.com/embed/0vOpWqBGD8w?rel=0&controls=1&autoplay=0&mute=0&start=0"
                              frameBorder={0}
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'auto'
                              }}
                              allow="autoplay; encrypted-media"
                              title="Special Forces Motivation - Whatever it takes"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-tab="Tab 2"
                    className="gamemodes-slides-tab w-tab-pane"
                  >
                    <div className="modal-action">
                      <div className="play-button-shooter" />
                      <img
                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 96vw"
                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2.jpg 1400w"
                        alt=""
                        className="image gamemodes-slides-image"
                      />
                    </div>
                    <div className="modal">
                      <div className="modal-close">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fad710da1566ac609c6c4cb_close-modal.svg"
                          loading="lazy"
                          width={20}
                          alt=""
                          className="modal-close-icon"
                        />
                      </div>
                      <div className="modal-content">
                        <div className="w-container">
                          <div
                            style={{ paddingTop: '56.17021276595745%' }}
                            className="w-embed-youtubevideo"
                          >
                            <iframe
                              src="https://www.youtube.com/embed/L3a_kSTq09U?rel=0&controls=1&autoplay=0&mute=0&start=0"
                              frameBorder={0}
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'auto'
                              }}
                              allow="autoplay; encrypted-media"
                              title="Canadian Special Forces || JTF2 / CSOR / NTOG"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-tab="Tab 3"
                    className="gamemodes-slides-tab w-tab-pane"
                  >
                    <div className="modal-action">
                      <div className="play-button-shooter" />
                      <img
                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 96vw"
                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3.jpg 1400w"
                        alt=""
                        className="image gamemodes-slides-image"
                      />
                    </div>
                    <div className="modal">
                      <div className="modal-close">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fad710da1566ac609c6c4cb_close-modal.svg"
                          loading="lazy"
                          width={20}
                          alt=""
                          className="modal-close-icon"
                        />
                      </div>
                      <div className="modal-content">
                        <div className="w-container">
                          <div
                            style={{ paddingTop: '56.17021276595745%' }}
                            className="w-embed-youtubevideo"
                          >
                            <iframe
                              src="https://www.youtube.com/embed/Vgy0yr-lmio?rel=0&controls=1&autoplay=0&mute=0&start=0"
                              frameBorder={0}
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'auto'
                              }}
                              allow="autoplay; encrypted-media"
                              title="FIGHT LIKE THE DEVIL || Military Motivation"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gamemodes-slides-menu w-tab-menu">
                  <Link
                    data-w-tab="Tab 1"
                    className="gamemodes-slides-link w-inline-block w-tab-link w--current"
                    href={''}
                  >
                    <div className="gamemodes-slides-image-container">
                      <img
                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1.jpg"
                        loading="lazy"
                        height=""
                        sizes="100vw"
                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab3d2aa82eebf553e70f_gm1.jpg 1400w"
                        alt=""
                        className="gamemodes-slides-image"
                      />
                    </div>
                    <div className="gamemodes-slides-content">
                      <div className="mb-5">
                        <strong>MULTIPLAYER</strong>
                      </div>
                      <div className="text-small text-black-opacity">
                        Compete With friends Or Other Players From All Over The
                        World.{' '}
                      </div>
                    </div>
                    <div className="corner-black bottom-right small" />
                  </Link>
                  <Link
                    data-w-tab="Tab 2"
                    className="gamemodes-slides-link w-inline-block w-tab-link"
                    href={''}
                  >
                    <div className="gamemodes-slides-image-container">
                      <img
                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2.jpg"
                        loading="lazy"
                        height=""
                        sizes="100vw"
                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab74787b41e3e45446a2_gm2.jpg 1400w"
                        alt=""
                        className="gamemodes-slides-image"
                      />
                    </div>
                    <div className="gamemodes-slides-content">
                      <div className="mb-5">
                        <strong>BATTLE ROYALE</strong>
                      </div>
                      <div className="text-small text-black-opacity">
                        Massive MultiPlayer Competitions, With Friends Or Other
                        Players.{' '}
                      </div>
                    </div>
                    <div className="corner-black bottom-right small" />
                  </Link>
                  <Link
                    data-w-tab="Tab 3"
                    className="gamemodes-slides-link w-inline-block w-tab-link"
                    href={''}
                  >
                    <div className="gamemodes-slides-image-container">
                      <img
                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3.jpg"
                        loading="lazy"
                        height=""
                        sizes="100vw"
                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fb2ab8599a7f11d547cda75_gm3.jpg 1400w"
                        alt=""
                        className="gamemodes-slides-image"
                      />
                    </div>
                    <div className="gamemodes-slides-content">
                      <div className="mb-5">
                        <strong>CHALLENGES</strong>
                      </div>
                      <div className="text-small text-black-opacity">
                        Create Your Own Challenges, For Others To Prove They
                        Have What It Takes.{' '}
                      </div>
                    </div>
                    <div className="corner-black bottom-right small" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section dark seasonbg wf-section">
          <div className="container">
            <div className="flex-columns row w-row">
              <div className="w-col w-col-5">
                <h3 className="text-white">Season One Is Coming Soon</h3>
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                  loading="lazy"
                  alt=""
                  className="mb-20"
                />
                <div className="text-white-opacity mb-40">
                  Get Ready for the first Season of Versus, be one of the first
                  to play and build the future of competitive gaming.
                </div>
                <Link href="/season" className="button white w-button">
                  Learn More
                </Link>
              </div>
              <div className="align-right w-col w-col-7">
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880a2e4b412aaf789885d5_shooter-season%20(1).png"
                  loading="lazy"
                  width={541}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 55vw, 541px"
                  srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880a2e4b412aaf789885d5_shooter-season%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880a2e4b412aaf789885d5_shooter-season%20(1).png 813w"
                  alt=""
                  className="season-section-image"
                />
              </div>
            </div>
          </div>
          <div className="corner-black large top-left" />
          <div className="corner-black large bottom-right" />
        </div>
        <div className="section wf-section">
          <div className="container">
            <div className="flex-columns row w-row">
              <div className="w-col w-col-7">
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fc911347a6db9637bdf0e06_battle-pass.jpg"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fc911347a6db9637bdf0e06_battle-pass-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fc911347a6db9637bdf0e06_battle-pass-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fc911347a6db9637bdf0e06_battle-pass.jpg 2761w"
                  alt=""
                  className="battlepass-image"
                />
                <div className="battlepass-row-container">
                  <div className="battlepass-row w-row">
                    <div className="w-col w-col-3">
                      <div className="battlepass-item">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fca772c2d44362b6dfd66ac_bp1.jpg"
                          loading="lazy"
                          alt=""
                        />
                        <div className="battlepass-item-text blue">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fccd406f750a0f4f5105162_icons8-pennant-100%20(1).png"
                            loading="lazy"
                            width={25}
                            alt=""
                          />
                        </div>
                        <div className="battlepass-level">24</div>
                      </div>
                    </div>
                    <div className="w-col w-col-3">
                      <div className="battlepass-item">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fca773b700e863d669628c3_bp2.jpg"
                          loading="lazy"
                          alt=""
                        />
                        <div className="battlepass-level">25</div>
                        <div className="battlepass-item-text yellow">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fccd44908048e3de48ecead_icons8-pennant-100%20(2).png"
                            loading="lazy"
                            width={25}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-col w-col-3">
                      <div className="battlepass-item">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fca7746e70fe0273118b0db_bp3.jpg"
                          loading="lazy"
                          alt=""
                        />
                        <div className="battlepass-level">26</div>
                        <div className="battlepass-item-text purple">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fccd4518b7b95d085f9e16d_icons8-pennant-100.png"
                            loading="lazy"
                            width={25}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-col w-col-3">
                      <div className="battlepass-item">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fca7751d382074c609f1c36_bp4.jpg"
                          loading="lazy"
                          alt=""
                        />
                        <div className="battlepass-level">27</div>
                        <div className="battlepass-item-text blue">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fccd406f750a0f4f5105162_icons8-pennant-100%20(1).png"
                            loading="lazy"
                            width={25}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-5">
                <h3 className="text-white">Get Ready to Create Challenges!</h3>
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                  loading="lazy"
                  alt=""
                  className="mb-20"
                />
                <div className="text-white-opacity mb-40">
                  Those Who Want To Compete On Versus Will Be able To Create
                  Challenges, For Their Friends And Other Players From All Over
                  The World. As Well As Complete other Players Challenges.
                </div>
                <Link
                  href="/battle-pass"
                  className="custom-button primary w-inline-block"
                >
                  <div className="custom-button-hover white" />
                  <div className="corner-black small top-left" />
                  <div className="corner-black small bottom-right" />
                  <div className="custom-button-text">Join Now</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section black pt-0 wf-section">
          <div className="container">
            <div className="section-inner primary-bordered">
              <div className="corner-black bordered-primary top-left" />
              <div className="corner-black bordered-primary bottom-right large" />
              <h4 className="text-white">Get Ready!</h4>
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                loading="lazy"
                alt=""
                className="mb-40"
              />
              <div className="row w-row">
                <div className="mobile-mb-20 w-col w-col-6">
                  <h6 className="text-white">Versus Will...</h6>
                  <ul
                    role="list"
                    className="text-white-opacity text-small mb-0 w-list-unstyled"
                  >
                    <li>Support All Platforms</li>
                    <li>Allow Players To Compete With Anyone, Anytime</li>
                    <li>Allow Users To Create Unique Challenges</li>
                    <li>
                      Integrate Games From All Genres, To Make Each Players
                      Experience Unique To Them
                    </li>
                    <li>
                      Allow Users To Create Their Own Tournaments, And
                      Challenges, With Their Own Rules
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="corner-dark bottom-right large" />
        </div>
        <div className="section dark wf-section">
          <div className="container">
            <div className="flex-columns row mb-40 w-row">
              <div className="w-col w-col-5">
                <div className="text-highlight primary mb-20">Free to play</div>
                <h3 className="text-white">
                  <strong>A NEW WAY TO COMPETE</strong>
                  <br />
                </h3>
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                  loading="lazy"
                  alt=""
                  className="mb-20"
                />
                <div className="text-white-opacity mb-40">
                  Join other players all over the world to competive in the
                  best, new, competive gaming platform...
                </div>
                <Link
                  href="/buy-now/var-2"
                  className="custom-button primary mb-20 w-inline-block"
                >
                  <div className="custom-button-hover white" />
                  <div className="corner-dark top-left small" />
                  <div className="corner-dark bottom-right small" />
                  <div className="custom-button-text">Play now</div>
                </Link>
              </div>
              <div className="w-col w-col-7">
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1).png"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1)-p-800.png 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1).png 911w"
                  alt=""
                />
              </div>
            </div>
            <div className="section-inner _3col black">
              <div className="row w-row">
                <div className="w-col w-col-1">
                  <div className="subscribe-socials">
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
                  <h4 className="text-white">STAY CONNECTED</h4>
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                    loading="lazy"
                    alt=""
                    className="mb-20"
                  />
                  <p className="text-white text-extra-small">
                    Sign up today to receive the latest Versus news, updates,
                    offers, and more by email.
                  </p>
                </div>
                <div className="w-col w-col-6">
                  <div className="news-form w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
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
                          required={true}
                        />
                        <div className="corner-black small top-right" />
                        <div className="corner-black small bottom-left" />
                      </div>
                      <div className="text-extra-small text-white mb-20 text-white-opacity">
                        Versus will be responsible for your personal data. For
                        more information please check our{' '}
                        <Link target="_blank" href="/">
                          Privacy Policy
                        </Link>
                      </div>

                      <div className="py-1">
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          as={Fragment}
                        >
                          {({ checked }) => (
                            /* Use the `checked` state to conditionally style the button. */
                            <button
                              className={`${
                                checked ? 'bg-red-700' : 'bg-gray-200'
                              } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                              <span className="sr-only">
                                Enable notifications
                              </span>
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
                        information from Versus and I am 16 years old or older.
                      </span>

                      <div>
                        <input
                          type="submit"
                          defaultValue="Subscribe"
                          data-wait="Please wait..."
                          className="button small white7 w-button mt-2"
                        />
                      </div>
                    </form>
                    <div className="form-success w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="form-error w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="corner-dark bottom-left" />
              <div className="corner-dark top-right" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
