import Link from 'next/link'

export const CompeteCard = () => {
  return (
    <div className="flex-columns row mb-40 w-row">
      <div className="w-col w-col-5">
        <div className="text-highlight primary mb-20">Free to play</div>
        <h3 className="text-white">
          <strong>A NEW WAY TO COMPETE</strong>
          <br />
        </h3>
        <img
          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
          loading="lazy"
          alt=""
          className="mb-20"
        />
        <div className="text-white-opacity mb-40">
          Join other players all over the world to competive in the best, new,
          competive gaming platform...
        </div>
        <Link
          href="/buy-now/var-2"
          className="custom-button primary mb-20 w-inline-block"
        >
          <div className="custom-button-hover white" />
          <div className="corner-dark top-left small" />
          <div className="corner-dark bottom-right small" />
          <div className="custom-button-text">Play now</div>
        </Link>
      </div>
      <div className="w-col w-col-7">
        <img
          src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1).png"
          loading="lazy"
          sizes="100vw"
          srcSet="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1)-p-800.png 800w, https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/60880e01060be14af69bf1a2_shooter-buy-img%20(1).png 911w"
          alt=""
        />
      </div>
    </div>
  )
}
