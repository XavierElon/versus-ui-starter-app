import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const AccountPage = () => {
    return (
<>
  <meta charSet="utf-8" />
  <title>Account | Nextgen - Webflow HTML website template</title>
  <meta
    content="JUST THE MOST ADVANCED GAMING TEMPLATE. EVER. Nextgen Webflow template is an ultimate multi-purpose video game, entertainment, and eSports Webflow Template & UI Kit which is responsive, feature-rich, and easily customizable."
    name="description"
  />
  <meta
    content="Account | Nextgen - Webflow HTML website template"
    property="og:title"
  />
  <meta
    content="JUST THE MOST ADVANCED GAMING TEMPLATE. EVER. Nextgen Webflow template is an ultimate multi-purpose video game, entertainment, and eSports Webflow Template & UI Kit which is responsive, feature-rich, and easily customizable."
    property="og:description"
  />
  <meta
    content="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d9ce461b025ec86ca5f8a7_og-img%20(1).jpg"
    property="og:image"
  />
  <meta
    content="Account | Nextgen - Webflow HTML website template"
    property="twitter:title"
  />
  <meta
    content="JUST THE MOST ADVANCED GAMING TEMPLATE. EVER. Nextgen Webflow template is an ultimate multi-purpose video game, entertainment, and eSports Webflow Template & UI Kit which is responsive, feature-rich, and easily customizable."
    property="twitter:description"
  />
  <meta
    content="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d9ce461b025ec86ca5f8a7_og-img%20(1).jpg"
    property="twitter:image"
  />
  <meta property="og:type" content="website" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="Webflow" name="generator" />
  <link
    href="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/css/next-gen.webflow.72504f242.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088070860c7a9c67abb1fe1_ng-fav%20(1).png"
    rel="shortcut icon"
    type="image/x-icon"
  />
  <link
    href="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608806d7990dc2369c574be1_ng-clip%20(1).png"
    rel="apple-touch-icon"
  />
  <div className="wrap">
    <div className="login-header wf-section">
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="navbar-container">
          <div className="navbar-container-left">
            <Link href="/" className="navbar-brand company w-nav-brand">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5f9ae92236f0d952faf1cf43_nextgen-simple.svg"
                loading="lazy"
                width={34}
                alt=""
              />
            </Link>
            <Link href="/" className="navbar-brand game w-nav-brand">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5f3a999de7bab841a0c0a9b3_logo%20text.svg"
                loading="lazy"
                width={120}
                alt=""
              />
            </Link>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div>
                <div data-hover="false" data-delay={0} className="w-dropdown">
                  <div className="nav-link dropdown w-dropdown-toggle">
                    <div className="nav-link-dropdown-icon w-icon-dropdown-toggle" />
                    <div>Games</div>
                  </div>
                  <nav className="nav-dropdown-games-list w-dropdown-list">
                    <div className="container">
                      <div className="align-right mb-10">
                        <Link href="/store" className="link text-extra-small">
                          Browse all games
                        </Link>
                      </div>
                      <div
                        data-delay={4000}
                        data-animation="slide"
                        className="slider games-nav-slider w-slider"
                        data-autoplay="false"
                        data-easing="ease"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-autoplay-limit={0}
                        data-nav-spacing={3}
                        data-duration={500}
                        data-infinite="true"
                      >
                        <div className="w-slider-mask">
                          <div className="w-slide">
                            <div className="row w-row">
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/fps"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">FPS</div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f06a2880cdb812caf7a30_ps.svg"
                                      loading="lazy"
                                      width={16}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f0875290455e5598ffd6f_xbox.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/shooter"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129c906ef5f0e1c08a0_games-shooter.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Shooter
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f06a2880cdb812caf7a30_ps.svg"
                                      loading="lazy"
                                      width={16}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f0875290455e5598ffd6f_xbox.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/mmo"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      MMORPG
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/rpg"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">RPG</div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f06a2880cdb812caf7a30_ps.svg"
                                      loading="lazy"
                                      width={16}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/moba"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">MOBA</div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f0875290455e5598ffd6f_xbox.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/survival"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Survival
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f06a2880cdb812caf7a30_ps.svg"
                                      loading="lazy"
                                      width={16}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f0875290455e5598ffd6f_xbox.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-slide">
                            <div className="row w-row">
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/sport"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129334f2d6fe673b0de_games-sport.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Sport
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f06a2880cdb812caf7a30_ps.svg"
                                      loading="lazy"
                                      width={16}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f0875290455e5598ffd6f_xbox.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/racing"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128a303e845c4c3589f_games-racing.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Racing
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f06a2880cdb812caf7a30_ps.svg"
                                      loading="lazy"
                                      width={16}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f0875290455e5598ffd6f_xbox.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/horror"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Horror
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f06a2880cdb812caf7a30_ps.svg"
                                      loading="lazy"
                                      width={16}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/strategy"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129ec00f7bf892ffb62_games-strategy.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Strategy
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/indie-platformer"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521286c627bb4875cf3e6_games-indie.jpg"
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Platformer
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                              <div className="w-col w-col-2 w-col-medium-4 w-col-small-6 w-col-tiny-6">
                                <Link
                                  href="/games/mobile"
                                  className="games-item nav w-inline-block"
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg"
                                    loading="lazy"
                                    sizes="100vw"
                                    srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg 818w"
                                    alt=""
                                  />
                                  <div className="nav-games-name">
                                    <div className="text-extra-small">
                                      Mobile
                                    </div>
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/606f0875290455e5598ffd6f_xbox.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                    <img
                                      src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d353068c89bbb0661f5b1d_windows.svg"
                                      loading="lazy"
                                      width={14}
                                      alt=""
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="games-item-hover" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="nav-slider-arrow left w-slider-arrow-left">
                          <div className="nav-slider-arrow-iocn w-icon-slider-left" />
                        </div>
                        <div className="nav-slider-arrow right w-slider-arrow-right">
                          <div className="nav-slider-arrow-iocn w-icon-slider-right" />
                        </div>
                        <div className="hidden w-slider-nav w-round" />
                      </div>
                    </div>
                  </nav>
                </div>
                <div data-hover="false" data-delay={0} className="w-dropdown">
                  <div className="nav-link dropdown w-dropdown-toggle">
                    <div className="nav-link-dropdown-icon w-icon-dropdown-toggle" />
                    <div>info</div>
                  </div>
                  <nav className="nav-dropdown w-dropdown-list">
                    <Link
                      href="/about/heroes"
                      className="nav-dropdown-link w-inline-block"
                    >
                      <div>Heroes</div>
                    </Link>
                    <Link
                      href="/about/weapon"
                      className="nav-dropdown-link w-inline-block"
                    >
                      <div>Weapon</div>
                    </Link>
                    <Link
                      href="/about/character"
                      className="nav-dropdown-link w-inline-block"
                    >
                      <div>CHaracters</div>
                    </Link>
                    <Link
                      href="/about/maps"
                      className="nav-dropdown-link w-inline-block"
                    >
                      <div>MAPS</div>
                    </Link>
                    <Link
                      href="/about/game-modes"
                      className="nav-dropdown-link w-inline-block"
                    >
                      <div>Game Modes</div>
                    </Link>
                    <Link
                      href="/about/features"
                      className="nav-dropdown-link w-inline-block"
                    >
                      <div>FEATURES</div>
                    </Link>
                  </nav>
                </div>
                <Link href="/news" className="nav-link w-nav-link">
                  News
                </Link>
                <Link href="/esports" className="nav-link w-nav-link">
                  Esports
                </Link>
                <Link href="/company" className="nav-link w-nav-link">
                  Company
                </Link>
                <div data-hover="false" data-delay={0} className="w-dropdown">
                  <div className="nav-link dropdown w-dropdown-toggle">
                    <div className="nav-link-dropdown-icon w-icon-dropdown-toggle" />
                    <div>MORE</div>
                  </div>
                  <nav className="nav-dropdown large w-dropdown-list">
                    <div className="row w-row">
                      <div className="w-col w-col-6">
                        <Link
                          href="/buy-now/var-1"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Buy Now 1</div>
                        </Link>
                        <Link
                          href="/buy-now/var-2"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Buy Now 2</div>
                        </Link>
                        <Link
                          href="/buy-now/var-3"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Buy nOW 3</div>
                        </Link>
                        <Link
                          href="/season"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Season</div>
                        </Link>
                        <Link
                          href="/battle-pass"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Battle pass</div>
                        </Link>
                        <Link
                          href="/patch-notes"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Patch notes</div>
                        </Link>
                        <Link
                          href="/style-guide"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Style guide</div>
                        </Link>
                        <Link
                          href="/404"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>404</div>
                        </Link>
                        <Link
                          href="/401"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Password</div>
                        </Link>
                      </div>
                      <div className="w-col w-col-6">
                        <Link
                          href="/team"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Team/Clan</div>
                        </Link>
                        <Link
                          href="/download"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Download</div>
                        </Link>
                        <Link
                          href="/specs"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>PC SPECS</div>
                        </Link>
                        <Link
                          href="/store"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Store</div>
                        </Link>
                        <Link
                          href="/store-game"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Store game</div>
                        </Link>
                        <Link
                          href="/account"
                          aria-current="page"
                          className="nav-dropdown-link w-inline-block w--current"
                        >
                          <div>Account</div>
                        </Link>
                        <Link
                          href="/image-licensing"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Licensing</div>
                        </Link>
                        <Link
                          href="/search"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Search Result</div>
                        </Link>
                        <Link
                          href="/"
                          className="nav-dropdown-link w-inline-block"
                        >
                          <div>Template Info</div>
                        </Link>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="navbar-container-right">
                <Link href="/store" className="nav-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60955bdd15d0e1617c77edb8_icons8-shopping-cart-100.png"
                    loading="lazy"
                    width={25}
                    alt=""
                  />
                </Link>
                <Link
                  href="/account"
                  aria-current="page"
                  className="nav-link w-inline-block w--current"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5f9af2cc613d21444310f3a7_icons8-account-100.png"
                    loading="lazy"
                    width={25}
                    alt=""
                  />
                </Link>
                <div className="nav-action fs-0">
                  <Link
                    href="/buy-now/var-3"
                    className="custom-button small white w-inline-block"
                  >
                    <div className="custom-button-hover primary" />
                    <div className="corner-black bottom-right small" />
                    <div className="corner-black top-left small" />
                    <div className="custom-button-text">PLAY NOW</div>
                  </Link>
                </div>
              </div>
            </nav>
            <div className="menu-button-container">
              <div className="menu-button w-nav-button">
                <img
                  src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60d5cfaf6fd9b785bd509105_icons8-squared-menu-100.png"
                  loading="lazy"
                  width={20}
                  alt=""
                  className="menu-button-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-header-container">
        <div className="login-header-left">
          <img
            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608826b95a17a50556d15f9d_fps-hero-img%20(1).png"
            loading="lazy"
            width={500}
            alt=""
          />
        </div>
        <div className="login-header-right">
          <div className="center-block _400">
            <h5>CREATE ACCOUNT</h5>
            <p className="text-extra-small text-black-opacity mb-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse varius enim.
            </p>
            <div className="align-left w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
              >
                <label htmlFor="email" className="input-label">
                  email
                </label>
                <input
                  type="email"
                  className="input custom w-input"
                  maxLength={256}
                  name="email"
                  data-name="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <label htmlFor="password" className="input-label">
                  password
                </label>
                <input
                  type="email"
                  className="input custom w-input"
                  maxLength={256}
                  name="password"
                  data-name="password"
                  placeholder="Enter your password"
                  id="password"
                />
                <div className="text-extra-small mb-10 text-center">
                  <strong>YOU CAN ALSO CREATE AN ACCOUNT WITH:</strong>
                </div>
                <div className="row mb-20 w-row">
                  <div className="w-col w-col-6">
                    <Link
                      href="https://www.google.com/"
                      className="social-auth google w-inline-block"
                    />
                  </div>
                  <div className="w-col w-col-6">
                    <Link
                      href="https://www.facebook.com/"
                      className="social-auth facebook w-inline-block"
                    />
                  </div>
                </div>
                <label className="w-checkbox custom-checkbox-group mb-20">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom custom-checkbox w--redirected-checked" />
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    data-name="Checkbox"
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                  />
                  <span
                    className="text-extra-small w-form-label"
                  >
                    Receive news, special offers, feedback surveys, and playtest
                    invitations.
                  </span>
                </label>
                <input
                  type="submit"
                  defaultValue="Create account"
                  data-wait="Please wait..."
                  className="submit-button w-button"
                />
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
  </div>
</>
    )}

export default AccountPage;