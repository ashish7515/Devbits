import React from 'react'
import '../App.css'
import './Stocklist.css'



const Stocklist = () => {
  return (
    <>
      <div className="stocks-list">
        <div className="head">
          <h1>MAKING THE WORLD SMARTER, HAPPIER, AND RICHER</h1>
          <h2>Through expert investment guidance</h2>
        </div>
        <div className="container_heading">
          <h2 id='heading-1'>Investing Solutions Designed To Make Money Over The Long Term</h2>
          <p id='heading-2'>Become a member today</p>
        </div>
        <div className="home-cards">
          <div className="card-body">
            {/*  */}
            <div className="card-struct">
              <div className="card-head-upper">
                <div className="sub-head">
                  <i class='fab fa-typo3' id='card-icon' />
                  <h2 id='sub-head-h2'>Stock Advisor</h2>
                </div>
                <div className="card-head-content">
                  <p>Our base-level-membership giving you the foundation of a Foolish portfolio</p>
                </div>

              </div>
              <div className="card-head-lower">
                <h3>Our Goal</h3>
                <p>Help you identify which investments should be used for retirement accounts and non-retirement accounts. Help members earn a positive return and build the foundations of a portfolio backed by Motley Fool principles.</p>
                <br /><hr /><br />
                <h3>Designed for</h3>
                <p>Individuals who are seeking easy-to-use guidance on investing in more familiar-named companies.</p>
                <br /><hr /><br />
                <h3>RECOMMENDED MINIMUM PORTFOLIO SIZE</h3>
                <p>$5,000 +</p>
                <br /><hr /><br />
                <h2>KEY FEATURES</h2>
                <p> - Monthly stock recommendations (usually large and mid-cap stocks)</p>
                <p> - Portfolio allocation guidance via The Motley Fool's Allocator tool</p>
                <p> - On-going coverage of prior recommendations</p>
                <p> - Access to Motley Fool Live video stream weekdays from 9 a.m. - 12 p.m. ET and 3 p.m. - 5 p.m. ET</p>
                <br /><hr />
                <div className="card-button">
                  Join Stock Advisor
                </div>
                <br />
              </div>

            </div>
            {/*  */}
            <div className="card-struct">
              <div className="card-head-upper">
                <div className="sub-head">
                  <i class='fab fa-typo3' id='card-icon' />
                  <h2 id='sub-head-h2'>Epic Bundle</h2>
                </div>
                <div className="card-head-content">
                  <p>A bundled membership that combines our four foundational stock-investing services into one</p>
                </div>

              </div>
              <div className="card-head-lower">
                <h3>Our Goal</h3>
                <p>Help members outperform the benchmark by gaining exposure to a wider variety of stocks and investments.</p>
                <br /><hr /><br />
                <h3>Designed for</h3>
                <p>Individuals who are regularly adding new money to their brokerage accounts, interested in business, and want to spend more time learning the art of investing.</p>
                <br /><hr /><br />
                <h3>RECOMMENDED MINIMUM PORTFOLIO SIZE</h3>
                <p>$25,000 +</p>
                <br /><hr /><br />
                <h2>KEY FEATURES</h2>
                <p> - Includes access to Stock Advisor + Rule Breakers + Everlasting Stocks + Real Estate Winners</p>
                <p> - Weekly stock recommendations (ranging from small to large-cap stocks)</p>
                <p> - Portfolio allocation guidance via The Motley Fool's Allocator tool</p>
                <p> - On-going coverage of prior recommendations from all included services</p>
                <p> - Access to Motley Fool Live video stream weekdays from 9 a.m. - 12 p.m. ET and 3 p.m. - 5 p.m. ET</p>
                <br /><hr />
                <div className="card-button">
                  Join The Epic Bundle
                </div>
                <br />
              </div>

            </div>
            {/*  */}
            <div className="card-struct">
              <div className="card-head-upper">
                <div className="sub-head">
                  <i class='fab fa-typo3' id='card-icon' />
                  <h2 id='sub-head-h2'>Backstage</h2>
                </div>
                <div className="card-head-content">
                  <p>Our premier membership tier unlocked by joining one of our 20+ portfolio-building services</p>
                </div>

              </div>
              <div className="card-head-lower">
                <h3>Our Goal</h3>
                <p>Help members outperform the benchmark and build lasting wealth with a complete financial gameplan.</p>
                <br /><hr /><br />
                <h3>Designed for</h3>
                <p>Individuals with established (and growing) portfolios, passionate about business, and regularly spend time following the markets each week.</p>
                <br /><hr /><br />
                <h3>RECOMMENDED MINIMUM PORTFOLIO SIZE</h3>
                <p>$50,000 +</p>
                <br /><hr /><br />
                <h2>KEY FEATURES</h2>
                <p> - Twice monthly stock recommendations (ranging from micro to large-cap stocks) from our Chief Investment Officer</p>
                <p> - Access to powerful tools like Watchlist</p>
                <p> - Portfolio allocation guidance via The Motley Fool's Allocator tool</p>
                <p> - On-going coverage of prior recommendations from all included services</p>
                {/* <p> - Access to Motley Fool Live video stream weekdays from 9 a.m. - 12 p.m. ET and 3 p.m. - 5 p.m. ET</p> */}
                <br /><hr />
                <div className="card-button">
                  Join Backstage
                </div>
                <br />
              </div>

            </div>
            {/*  */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Stocklist