export const BorderedCard = () => {
  return (
    <div className="section-inner primary-bordered">
      <div className="corner-black bordered-primary top-left" />
      <div className="corner-black bordered-primary bottom-right large" />
      <h4 className="text-white">Get Ready!</h4>
      <img
        src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
        loading="lazy"
        alt=""
        className="mb-40"
      />
      <div className="row w-row">
        <div className="mobile-mb-20 w-col w-col-6">
          <h6 className="text-white">Rivals Will...</h6>
          <ul
            role="list"
            className="text-white-opacity text-small mb-0 w-list-unstyled"
          >
            <li>Support All Platforms</li>
            <li>Allow Players To Compete With Anyone, Anytime</li>
            <li>Allow Users To Create Unique Challenges</li>
            <li>
              Integrate Games From All Genres, To Make Each Players Experience
              Unique To Them
            </li>
            <li>
              Allow Users To Create Their Own Tournaments, And Challenges, With
              Their Own Rules
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
