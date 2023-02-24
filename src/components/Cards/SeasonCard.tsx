import Link from 'next/link'

export const SeasonCard = () => {
  return (
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
              Get Ready for the first Season of Versus, be one of the first to
              play and build the future of competitive gaming.
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
  )
}
