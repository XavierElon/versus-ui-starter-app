/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  faqData,
  howToData,
  requirementsData,
  guideLineData
} from "@/data";
import { Accordion } from "@/components/Accordion";

export default function FAQ() {

  return (
    <>

      <Header />
      <div className="section wf-section">
        <div className="container">
          <div className="section-inner primary-bordered">
            <div className="corner-black bordered-primary top-left" />
            <div className="corner-black bordered-primary bottom-right large" />
            <h4 className="text-white text-center ">Frequently Asked Questions</h4>
            <div className="text-center">
             <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                loading="lazy"
                alt=""
                width={500}
              />
            </div>
            <div className=" px-2 row w-row">
      {faqData.map((item, index) => {
        return (
          <Accordion title={item.title} content={item.content} key={index} />
        );
      })}
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="container">
          <div className="section-inner primary-bordered">
            <div className="corner-black bordered-primary top-left" />
            <div className="corner-black bordered-primary bottom-right large" />
            <h4 className="text-white text-center ">Matches & tournaments</h4>
            <div className="text-center">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                loading="lazy"
                alt=""
                width={500}
              />
                      <div className=" px-2 row w-row">
      {howToData.map((item, index) => {
        return (
          <Accordion title={item.title} content={item.content} key={index} />
        );
      })}
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="container">
          <div className="section-inner primary-bordered">
            <div className="corner-black bordered-primary top-left" />
            <div className="corner-black bordered-primary bottom-right large" />
            <h4 className="text-white text-center ">Rules and Regulations</h4>
            <div className="text-center">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                loading="lazy"
                alt=""
                width={500}
              />
                      <div className=" px-2 row w-row">
      {guideLineData.map((item, index) => {
        return (
          <Accordion title={item.title} content={item.content} key={index} />
        );
      })}
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="container">
          <div className="section-inner primary-bordered">
            <div className="corner-black bordered-primary top-left" />
            <div className="corner-black bordered-primary bottom-right large" />
            <h4 className="text-white text-center ">Withdrawel and ID Requirements</h4>
            <div className="text-center">
              <img
                src="https://uploads-ssl.webflow.com/5f34eb6e935a5c1fa933ebe2/5fa58a341465890b77ce63ba_divider.svg"
                loading="lazy"
                alt=""
                width={500}
              />
                      <div className=" px-2 row w-row">
      {requirementsData.map((item, index) => {
        return (
          <Accordion title={item.title} content={item.content} key={index} />
        );
      })}
            </div>
            </div>
          </div>
        </div>
      </div>

      
      <Footer />

      </>
  );
}

