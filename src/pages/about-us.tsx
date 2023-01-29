/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import Header from "@/components/Header"

export default function AboutUs(){
    return (
      <>
  <Header />
        <div className="header-company-tabs-content w-tab-content">
          <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
            <div className="header-company-tabs-content-slider _1">
              <div className="container">
                <div className="center-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5f9ae92236f0d952faf1cf43_nextgen-simple.svg"
                    loading="lazy"
                    width={100}
                    alt=""
                    className="mb-20"
                  />
                  <h1 className="text-white">NEXTGEN STUDIOS</h1>
                  <p className="text-white mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <Link href="#about" className="button white w-button">
                    OuR Story
                  </Link>
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
                  <Link href="/news" className="button white w-button">
                    Learn more
                  </Link>
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
                  <Link href="#career" className="button white w-button">
                    VIEW OPEN POSITIONS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-company-tabs-menu w-tab-menu">
          <Link
                                data-w-tab="Tab 1"
                                className="header-company-tabs-menu-item w-inline-block w-tab-link w--current" href={""}          >
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
                  <strong>Nextgen Studios</strong>
                </div>
                <div className="text-extra-small text-black-opacity">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
              </div>
            </div>
          </Link>
          <Link
                                data-w-tab="Tab 2"
                                className="header-company-tabs-menu-item w-inline-block w-tab-link" href={""}          >
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
                  <strong>The Invitational 2021</strong>
                </div>
                <div className="text-extra-small text-black-opacity">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
              </div>
            </div>
          </Link>
          <Link
                                data-w-tab="Tab 3"
                                className="header-company-tabs-menu-item w-inline-block w-tab-link" href={""}          >
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
                  <strong>Work with us</strong>
                </div>
                <div className="text-extra-small text-black-opacity">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
              </div>
            </div>
          </Link>
        </div>
  
    <div className="section light wf-section">
      <div className="container">
        <div className="center-block">
          <h2>NEXTGEN GAMES</h2>
          <p className="text-black-opacity mb-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="row w-row">
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/fps" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN FPS</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/shooter" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129c906ef5f0e1c08a0_games-shooter.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN SHOOTER</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/mmo" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN MMO</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/rpg" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN RPG</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row w-row">
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/moba" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN MOBA</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/survival" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN SURVIVAL</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/sport" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129334f2d6fe673b0de_games-sport.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN SPORT</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/racing" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128a303e845c4c3589f_games-racing.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN RACING</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row w-row">
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/horror" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN HORROR</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/strategy" className="games-item w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129ec00f7bf892ffb62_games-strategy.jpg"
                loading="lazy"
                alt=""
                className="game-item-image"
              />
              <div className="games-item-hover">
                <div>
                  <h6 className="text-white">NEXTGEN STRATEGY</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link
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
                  <h6 className="text-white">NEXTGEN INDIE</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-col w-col-3 w-col-small-6">
            <Link href="/games/mobile" className="games-item w-inline-block">
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
                  <h6 className="text-white">NEXTGEN MOBILE</h6>
                  <div className="text-white-opacity text-small">
                    Official Site
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div id="about" className="section white wf-section">
      <div className="container">
        <div className="mb-60 w-row">
          <div className="w-col w-col-6">
            <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a294c57483de500fd753af_logo-mask.png"
              loading="lazy"
              alt=""
              className="about-story-img"
            />
          </div>
          <div className="w-col w-col-6">
            <h2>OUR STORY</h2>
            <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
              loading="lazy"
              alt=""
              className="mb-40"
            />
            <div className="mb-20">
              <p className="text-black-opacity mb-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <p className="text-black-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.{" "}
              </p>
            </div>
            <Link href="#career" className="learn-more-link light mb-40">
              VIEW OPEN POSITIONS
            </Link>
          </div>
        </div>
      </div>
      <div className="slider company">
        <div
          data-delay={4000}
          data-animation="cross"
          className="slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit={0}
          data-nav-spacing={10}
          data-duration={500}
          data-infinite="true"
        >
          <div className="maps-slider-mask w-slider-mask">
            <div className="w-slide">
              <div className="row flex-columns hor-mob w-row">
                <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                  <div className="company-slider-left">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 37vw, (max-width: 5485px) 35vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
                  <div className="company-slider-center">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 69vw, (max-width: 991px) 62vw, (max-width: 3254px) 59vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                  <div className="company-slider-right">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 37vw, (max-width: 5485px) 35vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="row flex-columns hor-mob w-row">
                <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                  <div className="company-slider-left">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 37vw, (max-width: 5485px) 35vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
                  <div className="company-slider-center">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 69vw, (max-width: 991px) 62vw, (max-width: 3254px) 59vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                  <div className="company-slider-right">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 37vw, (max-width: 5485px) 35vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="row flex-columns hor-mob w-row">
                <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                  <div className="company-slider-left">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 37vw, (max-width: 5485px) 35vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a281bd0721c17e9e753a66_company-1.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
                  <div className="company-slider-center">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 69vw, (max-width: 991px) 62vw, (max-width: 3254px) 59vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28728c125151e5766cc73_company-3.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                  <div className="company-slider-right">
                    <img
                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 37vw, (max-width: 5485px) 35vw, 1920px"
                      srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a28514f3a6ee28a69c48b2_company-2.jpg 1920w"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-arrow-left w-slider-arrow-left" />
          <div className="slider-arrow-right w-slider-arrow-right" />
          <div className="maps-slider-nav w-slider-nav w-slider-nav-invert" />
        </div>
      </div>
    </div>
    <div id="career" className="section light wf-section">
      <div className="container">
        <div className="center-block">
          <h2>WORK WITH US</h2>
          <p className="text-black-opacity mb-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="text-center text-small mb-60 w-row">
          <div className="w-col w-col-4">
            <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a2a3342e3837929f6ca020_icons8-health-100.png"
              loading="lazy"
              width={50}
              alt=""
              className="mb-20"
            />
            <h6>Healthcare</h6>
            <p className="work-benefits-text text-black-opacity">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="w-col w-col-4">
            <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a2a35280424a26a8be6077_icons8-airplane-take-off-100.png"
              loading="lazy"
              width={50}
              alt=""
              className="mb-20"
            />
            <h6>Paid Time Off</h6>
            <p className="work-benefits-text text-black-opacity">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="w-col w-col-4">
            <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a2a35b3e2cf1f193754a0e_icons8-gift-100.png"
              loading="lazy"
              width={50}
              alt=""
              className="mb-20"
            />
            <h6>Donations</h6>
            <p className="work-benefits-text text-black-opacity">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
        <h6>
          <span className="text-black-opacity">Open Positions: </span>18
        </h6>
        <div
          data-duration-in={300}
          data-duration-out={100}
          data-current="Tab 1"
          data-easing="ease"
          className="w-tabs"
        >
          <div className="positions-tabs-menu w-tab-menu">
            <Link
                                    data-w-tab="Tab 1"
                                    className="positions-tabs-menu-item w-inline-block w-tab-link w--current" href={""}            >
              <div>All</div>
            </Link>
            <Link
                                    data-w-tab="Tab 2"
                                    className="positions-tabs-menu-item w-inline-block w-tab-link" href={""}            >
              <div>Dev</div>
            </Link>
            <Link
                                    data-w-tab="Tab 3"
                                    className="positions-tabs-menu-item w-inline-block w-tab-link" href={""}            >
              <div>Design</div>
            </Link>
            <Link
                                    data-w-tab="Tab 4"
                                    className="positions-tabs-menu-item w-inline-block w-tab-link" href={""}            >
              <div>Art</div>
            </Link>
            <Link
                                    data-w-tab="Tab 5"
                                    className="positions-tabs-menu-item w-inline-block w-tab-link" href={""}            >
              <div>QA</div>
            </Link>
          </div>
          <div className="positions-tabs-content w-tab-content">
            <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Data Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen FPS
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Dev
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>UX Designer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Shooter
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Animation Artist</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen MMO
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Art
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>QA Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen RPG
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      QA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Los Angeles, USA
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Manager, Quality Assurance</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Sport
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      QA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Game Designer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen MOBA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Manager, Game Design</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Racing
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Los Angeles, USA
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Network Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Survival
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Dev
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Senior Level Designer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Horror
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Software Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Strategy
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Dev
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>QA Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Mobile
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      QA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Los Angeles, USA
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Art Director</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Indie
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Art
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 2" className="w-tab-pane">
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Data Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen FPS
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Dev
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Network Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Survival
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Dev
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Software Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Strategy
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Dev
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 3" className="w-tab-pane">
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>UX Designer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Shooter
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Game Designer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen MOBA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Manager, Game Design</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Racing
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Los Angeles, USA
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Senior Level Designer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Horror
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Design
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 4" className="w-tab-pane">
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Animation Artist</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen MMO
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Art
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Kraków, Poland
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Art Director</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Indie
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Art
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 5" className="w-tab-pane">
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>QA Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Sport
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      QA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Shanghai, China
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row white">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>Manager, Quality Assurance</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen RPG
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      QA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Los Angeles, USA
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-row">
                <div className="row w-row">
                  <div className="w-col w-col-6">
                    <Link href="#" className="position-link">
                      <strong>QA Engineer</strong>
                    </Link>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Nextgen Mobile
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      QA
                      <br />
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div>
                      Los Angeles, USA
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contacts" className="section dark wf-section">
      <div className="container">
        <div className="center-block mb-60">
          <h2 className="text-white">CONTACTS</h2>
          <p className="text-white-opacity mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Link
            href="/download"
            className="custom-button primary small w-inline-block"
          >
            <div className="custom-button-hover white" />
            <div className="corner-dark bottom-right small" />
            <div className="corner-dark top-left small" />
            <div className="custom-button-text">Get press kit</div>
          </Link>
        </div>
        <div className="text-center">
          <img
            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a4fa1ea1fe123c342e4e15_map.svg"
            loading="lazy"
            alt=""
            className="contacts-map"
          />
        </div>
        <div className="contacts-row">
          <div className="row w-row">
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>General inquiries:</strong>
              </div>
              <div className="text-extra-small">
                <Link href="mailto:support@nextgen.com" className="link">
                  support@nextgen.com
                </Link>
              </div>
            </div>
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>Press and media:</strong>
              </div>
              <div className="text-extra-small">
                <Link href="mailto:press@nextgen.com" className="link">
                  press@nextgen.com
                </Link>
              </div>
            </div>
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>Career information:</strong>
              </div>
              <div className="text-extra-small">
                <Link href="mailto:jobs@nextgen.com" className="link">
                  jobs@nextgen.com
                </Link>
              </div>
            </div>
            <div className="mb-20 w-col w-col-3 w-col-medium-6">
              <div className="text-white text-small mb-10">
                <strong>Business opportunities:</strong>
              </div>
              <div className="text-extra-small">
                <Link href="mailto:business@nextgen.com" className="link">
                  business@nextgen.com
                </Link>
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
              <Link
                href="https://www.youtube.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf4e5fef4c8250dfad0a_icons8-play-button-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </Link>
              <Link
                href="https://www.twitch.tv/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf611d7ddd17ede45970_icons8-twitch-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf6c68320d38540f2da7_icons8-facebook-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </Link>
              <Link
                href="https://twitter.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf75efcb605c0a486228_icons8-twitter-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </Link>
              <Link
                href="http://instagram.com"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf87b9d25e13376ed3dc_icons8-instagram-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </Link>
              <Link
                href="https://discord.com/"
                className="footer-social community w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5faeaf92393ed812979e445d_icons8-discord-100.png"
                  loading="lazy"
                  width={30}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              Nextgen, NXGN Studios, Inc. All Rights Reserved. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare,
              eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <div className="divider mb-40" />
        <div className="footer-links">
          <div className="footer-lonks-left">
            <Link href="/" className="footer-logo w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5f9ae92236f0d952faf1cf43_nextgen-simple.svg"
                loading="lazy"
                width={40}
                alt=""
              />
            </Link>
            <Link href="https://craftengine.co/contact" className="footer-link">
              Support
            </Link>
            <Link href="https://craftengine.co/" className="footer-link">
              About us
            </Link>
            <Link href="/image-licensing" className="footer-link">
              licensing
              <br />
            </Link>
            <Link href="https://webflow.com/" className="footer-link">
              Powered by webflow
            </Link>
          </div>
          <div className="subscribe-socials community align-right">
            <Link
              href="https://www.youtube.com/"
              className="footer-social footer-link w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d09c43ea304032245df757_icons8-youtube-play-button-100.png"
                loading="lazy"
                width={25}
                alt=""
              />
            </Link>
            <Link
              href="https://www.twitch.tv/"
              className="footer-social footer-link w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d09c5404fb834cc977640e_icons8-twitch-100.png"
                loading="lazy"
                width={25}
                alt=""
              />
            </Link>
            <Link
              href="https://www.facebook.com/"
              className="footer-social footer-link w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d09c64a652432bdcc3866f_icons8-facebook-100.png"
                loading="lazy"
                width={25}
                alt=""
              />
            </Link>
            <Link
              href="https://twitter.com/"
              className="footer-social footer-link w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d09c70b10647f095430039_icons8-twitter-100.png"
                loading="lazy"
                width={25}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
      </>
    );
}
  
        