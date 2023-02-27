import Link from 'next/link'

export const DownloadCard = () => {
  const email = 'test@gmail.com'
  return (
    <div className="header-shooter mb-20 wf-section">
      <div className="container">
        <div className="center-block mb-60">
          <div className="text-highlight font-mono primary mb-40">
            Coming Soon...
          </div>
          {/* an Image for Rivals here */}
          <h5 className="text-white mb-40">
            The Next Evolution of Competitive Gaming
          </h5>
          <div className="button-group">
            <Link
              href="/"
              onClick={() => console.log('test')}
              className="button primary mb-20 large w-button"
            >
              Download now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
