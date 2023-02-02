/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FAQ() {
    return (
        <>
            <Header />
            <div className="section black mt-6 pt-0 wf-section">
      <div className="container">
        <div className="section-inner primary-bordered">
          <div className="corner-black bordered-primary top-left" />
          <div className="corner-black bordered-primary bottom-right large" />
          <h4 className="text-white">Frequently Asked Questions!</h4>
          <img
            src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
            loading="lazy"
            alt=""
            className="mb-40"
          />
          <div className="row w-row">
            <div className="mobile-mb-20 w-col w-col-6">
              <h6 className="text-white">Common Questions And Answers...</h6>
              <ul
                role="list"
                className="text-white-opacity text-small mb-0 w-list-unstyled"
              >
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>
                4
                </li>
                                    <li>
                                        5
               </li>
              </ul>
            </div>

          </div>
                    </div>
                </div>
            </div>
      
                    <Footer />
                    
        </>
    )
}
