/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function PlayNow() {
    return (
        <>
  <div className="wrap">
    <div className="buy-now-header-3 wf-section">
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
                          aria-current="page"
                          className="nav-dropdown-link w-inline-block w--current"
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
                          className="nav-dropdown-link w-inline-block"
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
                <Link href="/account" className="nav-link w-inline-block">
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
                    aria-current="page"
                    className="custom-button small white w-inline-block w--current"
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
      <div className="container">
        <div className="section-inner white buy-now">
          <div className="buy-now-inner-row">
            <img
              src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd.jpg"
              loading="lazy"
              width={200}
              sizes="(max-width: 479px) 67vw, 200px"
              srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd.jpg 818w"
              alt=""
            />
            <div className="buy-now-inner-row-conent">
              <h4 className="mb-0">NEXTGEN RACING</h4>
              <div className="text-black-opacity text-small mb-10">
                Nextgen Studios‬
              </div>
              <div className="game-tags">
                <div className="game-tags-item">
                  <div className="text-highlight white mb-10 small">racing</div>
                </div>
                <div className="game-tags-item">
                  <div className="text-highlight white mb-10 small">
                    simulator
                  </div>
                </div>
                <div className="game-tags-item">
                  <div className="text-highlight white mb-10 small">
                    multiplayer
                  </div>
                </div>
              </div>
              <p className="text-extra-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo.{" "}
              </p>
              <ul role="list" className="text-small mb-0 w-list-unstyled">
                <li>
                  <strong>Publisher: </strong>NXTGN
                </li>
                <li>
                  <strong>Platforms:</strong> PC / PS / XBOX
                </li>
                <li>
                  <strong>Release date:</strong> Apr 25, 2022
                  <br />
                </li>
              </ul>
            </div>
            <div className="buy-now-inner-row-buttons">
              <Link
                href="https://store.steampowered.com/"
                className="buy-game-store steam w-inline-block"
              />
              <Link
                href="https://www.epicgames.com/store/"
                className="buy-game-store epic w-inline-block"
              />
              <Link
                href="https://store.playstation.com/"
                className="buy-game-store ps w-inline-block"
              />
              <Link
                href="https://www.xbox.com/"
                className="buy-game-store xbox w-inline-block"
              />
            </div>
          </div>
          <div className="corner-light bottom-right" />
        </div>
      </div>
    </div>
    <div className="section light buy-description wf-section">
      <div className="container">
        <div
          data-duration-in={300}
          data-duration-out={100}
          data-current="Tab 1"
          data-easing="ease"
          className="w-tabs"
        >
          <div className="buy-now-tabs-menu w-tab-menu">
            <Link
                    data-w-tab="Tab 1"
                    className="buy-now-tabs-menu-item w-inline-block w-tab-link w--current" href={""}            >
              <div>Overview</div>
            </Link>
            <Link
                    data-w-tab="Tab 2"
                    className="buy-now-tabs-menu-item w-inline-block w-tab-link" href={""}            >
              <div>System Requirements</div>
            </Link>
            <Link
                    data-w-tab="Tab 3"
                    className="buy-now-tabs-menu-item w-inline-block w-tab-link" href={""}            >
              <div>Reviews</div>
            </Link>
          </div>
          <div className="w-tab-content">
            <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
              <h6>Available on:</h6>
              <div className="hero-platforms mb-40">
                <div className="hero-platform">
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa19a81538a556f78baf748_playstation.svg"
                    loading="lazy"
                    height={20}
                    alt=""
                  />
                </div>
                <div className="hero-platform">
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa19a9c5573bb85f7b1f330_xbox.svg"
                    loading="lazy"
                    height={20}
                    alt=""
                  />
                </div>
                <div className="hero-platform">
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa19aa9fc1a045efff04026_windows.svg"
                    loading="lazy"
                    height={20}
                    alt=""
                  />
                </div>
              </div>
              <h6>Description:</h6>
              <div className="max-800 mb-40">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
              <h6 className="mb-20">Screenshots:</h6>
              <div
                data-delay={4000}
                data-animation="slide"
                className="slider buy-now mb-40 w-slider"
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
                      <div className="w-col w-col-4">
                        <Link href="#" className="mb-10 w-inline-block w-lightbox">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1).jpg"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1)-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1)-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1).jpg 2160w"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="w-col w-col-4">
                        <Link href="#" className="mb-10 w-inline-block w-lightbox">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1).jpg"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1)-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1)-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1).jpg 2160w"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="w-col w-col-4">
                        <Link href="#" className="mb-10 w-inline-block w-lightbox">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1).jpg"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1).jpg 2160w"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div className="row w-row">
                      <div className="w-col w-col-4">
                        <Link href="#" className="mb-10 w-inline-block w-lightbox">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1).jpg"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1)-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824ae0ed9271dd7e974c1_6077038a8c565039bc3ddf5d_macau-photo-agency-UhQSjxHb3mk-unsplashh%20(1).jpg 2160w"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="w-col w-col-4">
                        <Link href="#" className="mb-10 w-inline-block w-lightbox">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1).jpg"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1)-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1)-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/608824830bdd451213cc171a_6075d609b8a74f7ae5c5fa37_moritz-spahn-opK7XLRXdLE-unsplashh%20(1).jpg 2160w"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="w-col w-col-4">
                        <Link href="#" className="mb-10 w-inline-block w-lightbox">
                          <img
                            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1).jpg"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1)-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1)-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6088249f0e7cd48e85db53f0_6077036ff8ee22402c3c32e3_serge-kutuzov-1K9-TbJWs2U-unsplashh%20(1).jpg 2160w"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-left-bottom w-slider-arrow-left" />
                <div className="arrow-right-bottom w-slider-arrow-right" />
                <div className="hidden w-slider-nav w-round" />
              </div>
              <h6 className="mb-20">Trailer:</h6>
              <div className="max-500 mb-40">
                <div
                  style={{ paddingTop: "56.17021276595745%" }}
                  className="w-embed-youtubevideo"
                >
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/bHWgc5MPnPA?rel=0&controls=0&autoplay=0&mute=0&start=0"
                    frameBorder={0}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                      pointerEvents: "auto"
                    }}
                    allow="autoplay; encrypted-media"
                    title="Bugatti Vision GT vs Super Cars at Highlands"
                  />
                </div>
              </div>
              <h6 className="mb-20">Additional content:</h6>
              <div className="max-800 mb-40">
                <div className="buy-now-addon">
                  <img
                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd.jpg"
                    loading="lazy"
                    width={160}
                    sizes="(max-width: 479px) 67vw, 160px"
                    srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/609fd1882184673055ee792e_racing-game-dvd.jpg 818w"
                    alt=""
                  />
                  <div className="buy-now-addon-content">
                    <div className="text-highlight primary small mb-10">
                      Add-on
                    </div>
                    <h5>Nextgen Racing - Season Pass</h5>
                    <p className="text-small text-black-opacity mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="corner-light bottom-right" />
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 2" className="w-tab-pane">
              <div className="row w-row">
                <div className="mobile-mb-20 w-col w-col-6">
                  <h6>MINIMUM</h6>
                  <ul
                    role="list"
                    className="text-small text-black-opacity mb-0 w-list-unstyled"
                  >
                    <li>OS: 64-bit Windows 7, Windows 8.1 and Windows 10</li>
                    <li>Processor: AMD FX-8350 or Intel Core i5 6600K</li>
                    <li>Memory: 8GB RAM</li>
                    <li>
                      Graphics card: NVIDIA GeForce® GTX 660 2GB or AMD Radeon™
                      RX 560 2GB
                      <br />
                    </li>
                    <li>DirectX: 11.0 Compatible video card or equivalent</li>
                    <li>
                      Online Connection Requirements: 512 KBPS or faster
                      Internet connection
                    </li>
                    <li>Hard-drive space: 50GB</li>
                  </ul>
                </div>
                <div className="w-col w-col-6">
                  <h6>RECOMMENDED</h6>
                  <ul
                    role="list"
                    className="text-small text-black-opacity mb-0 w-list-unstyled"
                  >
                    <li>OS: 64-bit Windows 7, Windows 8.1 and Windows 10</li>
                    <li>Processor: AMD Ryzen 3 1300X or Intel Core i7 4790</li>
                    <li>Memory: 12GB RAM</li>
                    <li>
                      Graphics card: NVIDIA GeForce® GTX 1060 6GB or AMD Radeon™
                      RX 580 8GB
                      <br />
                    </li>
                    <li>DirectX: 11.0 Compatible video card or equivalent</li>
                    <li>
                      Online Connection Requirements: 512 KBPS or faster
                      Internet connection
                    </li>
                    <li>Hard-drive space: 50GB</li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 3" className="w-tab-pane">
              <div className="row flex full mb-40 w-row">
                <div className="w-col w-col-4">
                  <div className="feedback-card small white">
                    <div className="feedback-card-header">
                      <div className="feedback-card-score">10</div>
                      <div>
                        <div className="text-large">
                          <strong>Game Insider</strong>
                        </div>
                        <div className="text-extra-small text-black-opacity">
                          Mar 31, 2021
                        </div>
                      </div>
                    </div>
                    <p className="text-small mb-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </p>
                    <div className="feedback-card-footer">
                      <div className="text-extra-small text-black-opacity">
                        <strong>Full review:</strong>
                      </div>
                      <Link href="/" className="feedback-link w-inline-block">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6074717a07fbbb426e350766_gameinsider.svg"
                          loading="lazy"
                          height={20}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="corner-light bottom-right" />
                  </div>
                </div>
                <div className="w-col w-col-4">
                  <div className="feedback-card small white">
                    <div className="feedback-card-header">
                      <div className="feedback-card-score">9</div>
                      <div>
                        <div className="text-large">
                          <strong>PixelMeta</strong>
                        </div>
                        <div className="text-extra-small text-black-opacity">
                          Mar 12, 2021
                        </div>
                      </div>
                    </div>
                    <p className="text-small mb-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet.
                    </p>
                    <div className="feedback-card-footer">
                      <div className="text-extra-small text-black-opacity">
                        <strong>Full review:</strong>
                      </div>
                      <Link href="/" className="feedback-link w-inline-block">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6074720e4f4e2b367269ae75_pixelmeta.svg"
                          loading="lazy"
                          height={20}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="corner-light bottom-right" />
                  </div>
                </div>
                <div className="w-col w-col-4">
                  <div className="feedback-card small white">
                    <div className="feedback-card-header">
                      <div className="feedback-card-score">8</div>
                      <div>
                        <div className="text-large">
                          <strong>GDN</strong>
                        </div>
                        <div className="text-extra-small text-black-opacity">
                          Mar 25, 2021
                        </div>
                      </div>
                    </div>
                    <p className="text-small mb-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.{" "}
                    </p>
                    <div className="feedback-card-footer">
                      <div className="text-extra-small text-black-opacity">
                        <strong>Full review:</strong>
                      </div>
                      <Link href="/" className="feedback-link w-inline-block">
                        <img
                          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/6074726041a8c066c7b0ef1b_gdn.svg"
                          loading="lazy"
                          height={20}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="corner-light bottom-right" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="#" className="custom-button primary w-inline-block">
                  <div className="custom-button-hover black" />
                  <div className="corner-light bottom-right small" />
                  <div className="corner-light top-left small" />
                  <div className="custom-button-text">View all Reviews</div>
                </Link>
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
    )
}

