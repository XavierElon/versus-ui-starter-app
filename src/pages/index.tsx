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
import { NewsletterUserData } from '@/models/interfaces'
import { ActionCard } from '@/components/Cards/ActionCard'
import { DownloadCard } from '@/components/Cards/DownloadCard'
import { CompeteCard } from '@/components/Cards/CompeteCard'
import { BorderedCard } from '@/components/Cards/BorderedCard'
import { SlidesCard } from '@/components/Cards/SlidesCard'
import { SeasonCard } from '@/components/Cards/SeasonCard'

const DashboardLayout = () => {
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

        <div className="section dark wf-section">
          <div className="container">
            <NewsletterCard></NewsletterCard>
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
            <SlidesCard></SlidesCard>
          </div>
        </div>
        <SeasonCard></SeasonCard>
        <div className="section wf-section">
          <div className="container">
            <div className="flex-columns row w-row">
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
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout
