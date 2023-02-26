import Link from 'next/link'

export const SlidesCard = () => {
  return (
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
          <div data-w-tab="Tab 2" className="gamemodes-slides-tab w-tab-pane">
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
          <div data-w-tab="Tab 3" className="gamemodes-slides-tab w-tab-pane">
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
                Compete With friends Or Other Players From All Over The World.{' '}
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
                Massive MultiPlayer Competitions, With Friends Or Other Players.{' '}
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
                Create Your Own Challenges, For Others To Prove They Have What
                It Takes.{' '}
              </div>
            </div>
            <div className="corner-black bottom-right small" />
          </Link>
        </div>
      </div>
    </div>
  )
}
