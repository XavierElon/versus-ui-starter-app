/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header'
import Link from 'next/link'
import Seo from '@/components/Seo'
import { Fragment, useState } from 'react'
import { Switch } from '@headlessui/react'
import Footer from '@/components/Footer'
import { Form, useSubscribe } from '@/hooks/useSubscribe'
import { NewsletterCard } from '@/components/NewsletterCard'
import { createNewsletterUser } from '@/api/newsletter.api'
import { ActionCard } from '@/components/Cards/ActionCard'
import { DownloadCard } from '@/components/Cards/DownloadCard'
import { CompeteCard } from '@/components/Cards/CompeteCard'
import { BorderedCard } from '@/components/Cards/BorderedCard'
import { SlidesCard } from '@/components/Cards/SlidesCard'

const DashboardLayout = () => {
  const [enabled, setEnabled] = useState(false)
  const [email, setEmail] = useState('xavier@gmail.com')
  const { form, subscribe, inputEl } = useSubscribe()

  return (
    <>
      <Seo
        title="Versus - The Next Evolution of Competitive Gaming"
        description="Versus allows users to play for real earnings. Players will compete against their rivals in solo head-to-head matches, team versus team events, and tournaments. Play with friends, earn, and experience the excitement of competitive gaming."
      />
      <Header />
      <div className="wrap">
        <DownloadCard></DownloadCard>
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
            <SlidesCard></SlidesCard>
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
              <ActionCard></ActionCard>
            </div>
          </div>
        </div>
        <div className="section black pt-0 wf-section">
          <div className="container">
            <BorderedCard></BorderedCard>
          </div>
          <div className="corner-dark bottom-right large" />
        </div>
        <div className="section dark wf-section">
          <div className="container">
            <CompeteCard></CompeteCard>
            <NewsletterCard></NewsletterCard>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout
