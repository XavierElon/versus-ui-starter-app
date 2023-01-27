/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const StorePage = () => {
    return (
        <>
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
                <div className="store-header wf-section">
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
                                                        <Link
                                                            href="/store"
                                                            aria-current="page"
                                                            className="link text-extra-small w--current"
                                                        >
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
                                                            aria-current="page"
                                                            className="nav-dropdown-link w-inline-block w--current"
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
                                        <Link
                                            href="/store"
                                            aria-current="page"
                                            className="nav-link w-inline-block w--current"
                                        >
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
                    <div className="container">
                        <div
                            data-duration-in={300}
                            data-duration-out={100}
                            data-current="Tab 2"
                            data-easing="ease"
                            className="store-header-tabs w-tabs"
                        >
                            <div className="store-header-tabs-content w-tab-content">
                                <div
                                    data-w-tab="Tab 2"
                                    className="store-header-tabs-content-item _1 w-tab-pane w--tab-active"
                                >
                                    <div className="store-header-tabs-content-item-text">
                                        <div className="max-500">
                                            <h5 className="text-white">NEXTGEN FPS</h5>
                                            <div className="text-highlight small mb-10 white">
                                                PRE-PURCHASE AVAILABLE
                                            </div>
                                            <p className="text-small text-white mb-40">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Suspendisse varius enim in eros elementum tristique. Duis
                                                cursus, mi quis viverra ornare, eros dolor interdum.
                                            </p>
                                            <p className="text-extra-small text-white">
                                                <strong>STARTING AT USD 59.00</strong>
                                            </p>
                                            <Link href="/store-game" className="button primary w-button">
                                                PREORDER now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-w-tab="Tab 3"
                                    className="store-header-tabs-content-item _2 w-tab-pane"
                                >
                                    <div className="store-header-tabs-content-item-text">
                                        <div className="max-500">
                                            <h5 className="text-white">NEXTGEN SHOOTER</h5>
                                            <div className="text-highlight small mb-10 white">
                                                OUT NOW
                                            </div>
                                            <p className="text-small text-white mb-40">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Suspendisse varius enim in eros elementum tristique. Duis
                                                cursus, mi quis viverra ornare, eros dolor interdum.
                                            </p>
                                            <p className="text-extra-small text-white">
                                                <strong>FREE</strong>
                                            </p>
                                            <Link href="/store-game" className="button primary w-button">
                                                PLAY now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-w-tab="Tab 4"
                                    className="store-header-tabs-content-item _3 w-tab-pane"
                                >
                                    <div className="store-header-tabs-content-item-text">
                                        <div className="max-500">
                                            <h5 className="text-white">NEXTGEN RPG</h5>
                                            <div className="text-highlight small mb-10 white">
                                                AVAILABLE NOW
                                            </div>
                                            <p className="text-small text-white mb-40">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Suspendisse varius enim in eros elementum tristique. Duis
                                                cursus, mi quis viverra ornare, eros dolor interdum.
                                            </p>
                                            <p className="text-extra-small text-white">
                                                <strong>STARTING AT USD 39.00</strong>
                                            </p>
                                            <Link href="/store-game" className="button primary w-button">
                                                BUY now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-w-tab="Tab 5"
                                    className="store-header-tabs-content-item _4 w-tab-pane"
                                >
                                    <div className="store-header-tabs-content-item-text">
                                        <div className="max-500">
                                            <h5 className="text-white">NEXTGEN MMO</h5>
                                            <div className="text-highlight small mb-10 white">
                                                NEW CONTENT UPDATE
                                            </div>
                                            <p className="text-small text-white mb-40">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Suspendisse varius enim in eros elementum tristique. Duis
                                                cursus, mi quis viverra ornare, eros dolor interdum.
                                            </p>
                                            <Link href="/store-game" className="button primary w-button">
                                                LEARN MORE
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-w-tab="Tab 6"
                                    className="store-header-tabs-content-item _5 w-tab-pane"
                                >
                                    <div className="store-header-tabs-content-item-text">
                                        <div className="max-500">
                                            <h5 className="text-white">NEXTGEN MOBA</h5>
                                            <div className="text-highlight small mb-10 white">SALES</div>
                                            <p className="text-small text-white mb-40">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Suspendisse varius enim in eros elementum tristique. Duis
                                                cursus, mi quis viverra ornare, eros dolor interdum.
                                            </p>
                                            <p className="text-extra-small text-white">
                                                <strong>FREE</strong>
                                            </p>
                                            <Link href="/store-game" className="button primary w-button">
                                                GET IT now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="store-header-tabs-menu w-tab-menu">
                                <Link
                                    data-w-tab="Tab 2"
                                    className="store-header-tabs-menu-link w-inline-block w-tab-link w--current" href={""}                                >
                                    <img
                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                                        loading="lazy"
                                        width={50}
                                        alt=""
                                        className="store-header-tabs-menu-link-image"
                                    />
                                    <div className="text-small">Nextgen FPS</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 3"
                                    className="store-header-tabs-menu-link w-inline-block w-tab-link" href={""}                                >
                                    <img
                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129c906ef5f0e1c08a0_games-shooter.jpg"
                                        loading="lazy"
                                        width={50}
                                        alt=""
                                        className="store-header-tabs-menu-link-image"
                                    />
                                    <div className="text-small">Nextgen Shooter</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 4"
                                    className="store-header-tabs-menu-link w-inline-block w-tab-link" href={""}                                >
                                    <img
                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                                        loading="lazy"
                                        width={50}
                                        alt=""
                                        className="store-header-tabs-menu-link-image"
                                    />
                                    <div className="text-small">Nextgen RPG</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 5"
                                    className="store-header-tabs-menu-link w-inline-block w-tab-link" href={""}                                >
                                    <img
                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                                        loading="lazy"
                                        width={50}
                                        alt=""
                                        className="store-header-tabs-menu-link-image"
                                    />
                                    <div className="text-small">Nextgen MMO</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 6"
                                    className="store-header-tabs-menu-link last w-inline-block w-tab-link" href={""}                                >
                                    <img
                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                                        loading="lazy"
                                        width={50}
                                        alt=""
                                        className="store-header-tabs-menu-link-image"
                                    />
                                    <div className="text-small">Nextgen MOBA</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-50 wf-section">
                    <div className="container">
                        <div className="store-tabs-title">
                            <div className="store-tabs-title-left">
                                <form action="/search" className="search mb-0 w-form">
                                    <input
                                        type="search"
                                        className="input dark mb-0 w-input"
                                        maxLength={256}
                                        name="query"
                                        placeholder="Search"
                                        id="search"
                                    />
                                    <input
                                        type="submit"
                                        defaultValue=""
                                        className="search-button w-button"
                                    />
                                </form>
                            </div>
                            <div className="store-tabs-title-right">
                                <img
                                    src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60c2310b1570b1573e8ea4b8_icons8-slider-100.png"
                                    loading="lazy"
                                    width={20}
                                    alt=""
                                    className="filters-icon"
                                />
                                <div className="text-white text-small">Filters</div>
                            </div>
                        </div>
                        <div
                            data-duration-in={300}
                            data-duration-out={100}
                            data-current="Tab 1"
                            data-easing="ease"
                            className="store-tabs w-tabs"
                        >
                            <div className="store-tabs-content w-tab-content">
                                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen FPS</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129c906ef5f0e1c08a0_games-shooter.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Shooter</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>FREE</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MMO</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store"></div>
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen RPG</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 59.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MOBA</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>
                                                                    <div>FREE</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Survival</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129334f2d6fe673b0de_games-sport.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Sport</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128a303e845c4c3589f_games-racing.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Racing</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 39.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Horror</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129ec00f7bf892ffb62_games-strategy.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Strategy</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521286c627bb4875cf3e6_games-indie.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Indie</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg"
                                                        loading="lazy"
                                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 22vw, 15vw"
                                                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg 818w"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Mobile</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>
                                                                    <div>FREE</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 2" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen FPS</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Survival</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129334f2d6fe673b0de_games-sport.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Sport</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Horror</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129ec00f7bf892ffb62_games-strategy.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Strategy</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521286c627bb4875cf3e6_games-indie.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Indie</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 3" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen FPS</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129c906ef5f0e1c08a0_games-shooter.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Shooter</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>FREE</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MOBA</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>
                                                                    <div>FREE</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 4" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521286c627bb4875cf3e6_games-indie.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Indie</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg"
                                                        loading="lazy"
                                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 22vw, 15vw"
                                                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg 818w"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Mobile</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>
                                                                    <div>FREE</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MMO</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen RPG</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 59.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 5" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521286c627bb4875cf3e6_games-indie.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Indie</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 6" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Horror</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Survival</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 7" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MMO</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 8" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MOBA</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>
                                                                    <div>FREE</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 9" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52127dc29ed24367afab6_games-mmo.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MMO</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen RPG</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 59.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128a303e845c4c3589f_games-racing.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Racing</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 39.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 10" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521286c627bb4875cf3e6_games-indie.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Indie</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg"
                                                        loading="lazy"
                                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 22vw, 15vw"
                                                        srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128356bb7e9f7f69e16_games-mobile.jpg 818w"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Mobile</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>
                                                                    <div>FREE</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 11" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128a303e845c4c3589f_games-racing.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Racing</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 39.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 12" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Survival</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129ec00f7bf892ffb62_games-strategy.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Strategy</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128334f2d6c0b73b0dd_games-moba.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen MOBA</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>
                                                                    <div>FREE</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212982e1ccb14583cfc8_games-rpg.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen RPG</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 59.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 13" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521296c627b950f5cf3e7_games-fps.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen FPS</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129c906ef5f0e1c08a0_games-shooter.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Shooter</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>FREE</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Horror</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 14" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129334f2d6fe673b0de_games-sport.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Sport</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52128a303e845c4c3589f_games-racing.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Racing</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div>USD 39.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 15" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a52129ec00f7bf892ffb62_games-strategy.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Strategy</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 99.00</div>
                                                                <div>USD 79.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -20%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 16" className="w-tab-pane">
                                    <div>
                                        <div className="row w-row">
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a521289883839064a433b7_games-horror.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Horror</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6">
                                                <Link
                                                    href="/store-game"
                                                    className="games-item store w-inline-block"
                                                >
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60a5212a130594391a49a4fd_games-survive.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                    <div className="games-item-hover store" />
                                                    <div className="game-info">
                                                        <div className="store-game-name">Nextgen Survival</div>
                                                        <div className="store-game-company">
                                                            NXGN Games Studio
                                                        </div>
                                                        <div className="store-game-price">
                                                            <div>
                                                                <div className="old-price">USD 39.00</div>
                                                                <div>USD 19.00</div>
                                                            </div>
                                                            <div className="text-highlight small mb-10 primary">
                                                                -50%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-col w-col-3 w-col-small-6" />
                                            <div className="w-col w-col-3 w-col-small-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="store-tabs-menu w-tab-menu">
                                <Link
                                    data-w-tab="Tab 1"
                                    className="store-tabs-menu-item w-inline-block w-tab-link w--current" href={""}                                >
                                    <div>All games</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 2"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>SALES</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 3"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Action</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 4"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Adventure</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 5"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Indie</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 6"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Horror</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 7"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>MMORPG</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 8"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>MOBA</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 9"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Open World</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 10"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Platformer</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 11"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Racing</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 12"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>RPG</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 13"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Shooter</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 14"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Sport</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 15"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Strategy</div>
                                </Link>
                                <Link
                                    data-w-tab="Tab 16"
                                    className="store-tabs-menu-item w-inline-block w-tab-link" href={""}                                >
                                    <div>Survival</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="join-us-section wf-section">
                    <div className="container">
                        <div className="w-row">
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
            </div>
        </>

    )
}

export default StorePage;