import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ian Kariuki's portfolio</title>
        <meta property="og:title" content="Quaint Ironclad Goldfish" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch to discuss your project needs.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">View Web Development Projects</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">App Development</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Web Development</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Web Development</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact Me</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">App Development</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact Me</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Explore my web development projects and skills.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Discover my app development projects and expertise.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Graphic Design</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Graphic Design</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              View my graphic design portfolio and capabilities.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Explore App Development Work</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">View Portfolio</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Welcome to Ian Kariuki&apos;s Portfolio
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Showcasing my skills as a Web Developer, App Developer, and
              Graphic Designer
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">Graphic Design</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Creative Designs</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">App Development</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Web Development</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Customized and Responsive Websites
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">App Development</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to take your digital presence to the next level?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let&apos;s work together to create stunning websites, innovative
              apps, and captivating graphics.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">
              Contact me now to discuss your project!
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Creative design skills to deliver visually appealing graphics for
              branding and marketing purposes using Adobe Creative Suite.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Expertise in creating responsive and user-friendly websites using
              HTML, CSS, and JavaScript.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">App Development</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Web Development</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Proficient in developing mobile applications for both Android and
              iOS platforms using React Native and Flutter.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Graphic Design</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">Ksh 10,000</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get Started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get Started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Responsive Design</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">UI/UX Design</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">Ksh 20,000</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Graphic Design Services</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Cross-Platform Compatibility</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">Ksh 20,000/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Brand Identity Creation</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Mobile App Development</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or Ksh 3,000 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">Ksh 20,000</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or Ksh 5,000 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or Ksh 2,500 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">Ksh 30,000/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">Ksh 300,000</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">Ksh 65,000/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">SEO Optimization</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">Ksh 100,000</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Custom Web Development</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">
              Print and Digital Assets Design
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                My prices are favourable and worth the services that I offer
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">Ksh 10,000</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              I specialize in creating responsive and user-friendly websites
              using HTML, CSS, and JavaScript.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              I have a keen eye for design and can create visually appealing
              graphics using tools like Adobe Photoshop and Illustrator.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">App Development</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              I have experience developing mobile applications for both Android
              and iOS platforms using languages such as Java and Swift.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Web Development</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">Graphic Design</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              View my portfolio to see examples of my work in web development,
              app development, and graphic design.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Portfolio Showcase</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">Marketing Manager, XYZ Inc.</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">CEO, Company ABC</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">Kelvin Macharia</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">Babri Villa</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              Ian is a talented graphic designer. He created stunning visuals
              for our marketing campaigns that truly captured our brand essence.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Ian Chege</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">Creative Director, Design Co.</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Jemmimah Wanjiku</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Ian did an amazing job developing our company website. His
              attention to detail and creativity exceeded our expectations.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">CTO, Tech Solutions Ltd.</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">5 stars - Excellent work!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Client Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              Working with Ian on our mobile app project was a breeze. His
              technical skills and problem-solving abilities are top-notch.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              Ian&apos;s expertise in web development helped us revamp our
              online presence. The results were beyond what we imagined.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Feel free to reach out to me for any inquiries or project
              collaborations.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Address: 123 Web Developer Street, Nairobi, Kenya
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Contact Me</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">Email: kariukiian174@gmail.com</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">Physical Address</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">Email</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
       
      ></Footer4>
    </div>
  )
}

export default Home
