/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const ActionCard = () => {
  return (
    <div className="w-col w-col-5">
      <h3 className="text-white">Get Ready to Create Challenges!</h3>
      <img
        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
        loading="lazy"
        alt=""
        className="mb-20"
      />
      <div className="text-white-opacity mb-40">
        Those Who Want To Compete On Versus Will Be able To Create Challenges,
        For Their Friends And Other Players From All Over The World. As Well As
        Complete other Players Challenges.
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
  )
}
