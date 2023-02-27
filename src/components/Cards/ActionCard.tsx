/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const ActionCard = () => {
  return (
    <div>
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
          Those Who Want To Compete On Rivals Will Be able To Create Challenges,
          For Their Friends And Other Players From All Over The World. As Well
          As Complete other Players Challenges.
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
  )
}
