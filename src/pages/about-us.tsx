/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
    return (
        <>
            <Header />
      <div
        data-duration-in={100}
        data-duration-out={100}
        data-current="Tab 1"
        data-easing="ease"
        className="header-company-tabs w-tabs"
      >
        <div className="header-company-tabs-content w-tab-content">
          <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
            <div className="header-company-tabs-content-slider _1">
              <div className="container">
                <div className="center-block">
                 {/* Logo Here */}
                  <h1 className="text-white">VERSUS</h1>
                  <p className="text-white mb-20">
            A New Era of Gaming, A New Era of Esports, Are You Ready?
                  </p>
                  <a href="#about" className="button white w-button">
                    Our Story
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 2" className="w-tab-pane">
            <div className="header-company-tabs-content-slider _2">
              <div className="container">
                <div className="center-block">
                  <div className="text-highlight primary mb-10">
                    Apr 25, 2021
                  </div>
                  <h1 className="text-white">THE INVITATIONAL 2021</h1>
                  <p className="text-white mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.{" "}
                  </p>
                  <a href="/news" className="button white w-button">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 3" className="w-tab-pane">
            <div className="header-company-tabs-content-slider _3">
              <div className="container">
                <div className="center-block">
                  <div className="text-highlight primary mb-10">CAREER</div>
                  <h1 className="text-white">WORK WITH US</h1>
                  <p className="text-white mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <a href="#career" className="button white w-button">
                    VIEW OPEN POSITIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-company-tabs-menu w-tab-menu">
          <a
            data-w-tab="Tab 1"
            className="header-company-tabs-menu-item w-inline-block w-tab-link w--current"
          >
            <div className="header-company-tabs-menu-content">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg"
                loading="lazy"
                width={60}
                height={80}
                srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg 1920w"
                sizes="(max-width: 479px) 25vw, 60px"
                alt=""
                className="header-company-tabs-menu-image"
              />
              <div className="header-company-tabs-menu-text">
                <div className="text-small">
                  <strong>Versus</strong> 
                </div>
                <div className="text-extra-small text-black-opacity">
                 A Competitive Gaming Platform For all Players.
                </div>
              </div>
            </div>
          </a>
          <a
            data-w-tab="Tab 2"
            className="header-company-tabs-menu-item w-inline-block w-tab-link"
          >
            <div className="header-company-tabs-menu-content">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg"
                loading="lazy"
                width={60}
                height={80}
                srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg 1920w"
                sizes="(max-width: 479px) 25vw, 60px"
                alt=""
                className="header-company-tabs-menu-image"
              />
              <div className="header-company-tabs-menu-text">
                <div className="text-small">
                  <strong>Founded 2023</strong>
                </div>
                <div className="text-extra-small text-black-opacity">
                  The Future Of Gaming, has Arrived.
                </div>
              </div>
            </div>
          </a>
          <a
            data-w-tab="Tab 3"
            className="header-company-tabs-menu-item w-inline-block w-tab-link"
          >
            <div className="header-company-tabs-menu-content">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg"
                loading="lazy"
                width={60}
                height={80}
                srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg 1920w"
                sizes="(max-width: 479px) 25vw, 60px"
                alt=""
                className="header-company-tabs-menu-image"
              />
              <div className="header-company-tabs-menu-text">
                <div className="text-small">
                  <strong>Join Our platform</strong>
                </div>
                <div className="text-extra-small text-black-opacity">
                                    <Link href="/sign-up">
                                        Sign Up
                                    </Link>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

    <div className="section light wf-section">
      <div className="container">
        <div className="center-block">
          <h2>Versus Platform Supports</h2>
          <p className="text-black-opacity mb-60">
            Versus Platform is a gaming platform that supports all types of games, And Will Continue To Support More Games In The Future.
          </p>
        </div>
        <div className="row w-row">
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/fps" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS FPS</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/shooter" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129c906ef5f0e1c08a0_games-shooter.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS SHOOTER</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/mmo" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS MMO</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/rpg" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS RPG</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row w-row">
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/moba" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS MOBA</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/survival" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS SURVIVAL</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/sport" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129334f2d6fe673b0de_games-sport.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS SPORT</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/racing" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128a303e845c4c3589f_games-racing.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS RACING</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row w-row">
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/horror" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS HORROR</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/strategy" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129ec00f7bf892ffb62_games-strategy.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS STRATEGY</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a
              href="/games/indie-platformer"
              className="games-item w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521286c627bb4875cf3e6_games-indie.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS INDIE</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <a href="/games/mobile" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, 22vw"
                srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg 818w"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">VERSUS MOBILE</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
            </div>
                     <div className="h-screen w-screen bg-zinc-900">
            <div className="flex flex-col justify-center items-center h-full">
      <div className="container">
        <div className="section-inner primary-bordered">
          <div className="corner-black bordered-primary top-left" />
          <div className="corner-black bordered-primary bottom-right large" />
                            <h2 className="text-white">OUR STORY</h2>
                               <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
              loading="lazy"
              alt=""
              className="mb-20"
            />
            <div className="mb-20">
              <p className="mb-20 text-white">
              Versus, where we up the ante in competitive gaming. Versus was co-founded by Jessie Sulecki, Robbie Sulecki, Kevin Gabriel and Xavier Hollingsworth. With the goal of reaching a worldwide audience of 3 billion gamers, Versus allows users to play for real earnings. Players will compete against their rivals in solo head-to-head matches, team versus team events, and tournaments. Play with friends, earn, and experience the excitement of competitive gaming.
              </p>
              <p className="text-black-opacity">
             {" "}
              </p>
                                </div>
                 
          </div>
        </div>
      </div>
    </div>
    <div id="contacts" className="section dark wf-section">
      <div className="container">
        <div className="center-block mb-60">
          <h2 className="text-white">CONTACT</h2>
          <p className="text-white-opacity mb-20">
           Reach Out To Versus, We Would Love To Hear From You!
          </p>
          <a
            href="/download"
            className="custom-button primary small w-inline-block"
          >
            <div className="custom-button-hover white" />
            <div className="corner-dark bottom-right small" />
            <div className="corner-dark top-left small" />
            <div className="custom-button-text">Get In Touch</div>
          </a>
        </div>
  
        <div className="contacts-row">
          <div className="row w-row">
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>General inquiries:</strong>
              </div>
              <div className="text-extra-small">
                <a href="mailto:support@versus.com" className="link">
                  support@versus.com
                </a>
              </div>
            </div>
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>Press and media:</strong>
              </div>
              <div className="text-extra-small">
                <a href="mailto:press@versus.com" className="link">
                  press@versus.com
                </a>
              </div>
            </div>
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>Career information:</strong>
              </div>
              <div className="text-extra-small">
                <a href="mailto:jobs@versus.com" className="link">
                  jobs@versus.com
                </a>
              </div>
            </div>
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>Business opportunities:</strong>
              </div>
              <div className="text-extra-small">
                <a href="mailto:business@versus.com" className="link">
                  business@versus.com
                </a>
              </div>
            </div>
          </div>
          <div className="corner-dark bottom-right" />
        </div>
      </div>
    </div>
    <div className="join-us-section wf-section">
      <div className="container">
        <div className="row w-row">
          <div className="join-us-text w-col w-col-6">
            <div className="text-large text-white-opacity">
              Join our community:
            </div>
          </div>
          <div className="w-col w-col-6">
            <div className="subscribe-socials community align-right">
              <a
                href="https://www.youtube.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf4e5fef4c8250dfad0a_icons8-play-button-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </a>
              <a
                href="https://www.twitch.tv/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf611d7ddd17ede45970_icons8-twitch-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf6c68320d38540f2da7_icons8-facebook-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </a>
              <a
                href="https://twitter.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf75efcb605c0a486228_icons8-twitter-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </a>
              <a
                href="http://instagram.com"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf87b9d25e13376ed3dc_icons8-instagram-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </a>
              <a
                href="https://discord.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf92393ed812979e445d_icons8-discord-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer />
</>
    )
}

