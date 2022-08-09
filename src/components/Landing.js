import React, { useEffect } from "react";
import "./Landing.css";
import News from './News.js'
import logo from "../images/Nowhite.png";
import { DefaultApi } from 'finnhub-ts'

const Landing = () => {
  
//   const finnhubClient = new DefaultApi({
//   apiKey: 'cboo8taad3i94d2leidg',
//   isJsonMime: (input) => {
//     try {
//       JSON.parse(input)
//       return true
//     } catch (error) {}
//     return false
//   },
// });

// useEffect(() => {
//   finnhubClient.marketNews("forex").then((resp) => {
//     console.log(resp.data.slice(0,5));
//   });
// }, []);

// category: "forex"
// datetime: 1660007050
// headline: "Recap on the FBI search on Trump - and the other criminal investigations underway"
// id: 7151953
// image: "https://images.forexlive.com/images/trump%2029%20July%202022_id_d7fcaad8-9b49-4525-816c-92c37d540172_size900.jpg"
// related: ""
// source: "Forexlive"
// summary: "&lt;p&gt;While not directly applicable to forex, the news of a judge granting a search warrant to the FBI given probably cause of criminal behaviour is attracting a lot of interest. Given Trump&apos;s close links to Putin and other nefarious actors, his attempts at a coup, his leading of a violent cop-killing insurrection, and other activites, there could be more to this than meets the eye. I guess we&apos;ll find out in time. &lt;/p&gt;&lt;p&gt;Reuters have a recap up of all the legal investigations into former President Trump. Allegations include:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;boxes of White House documents from Trump&apos;s Florida home, some of which contained classified materials&lt;/li&gt;&lt;li&gt;trying to overturn his 2020 election defeat&lt;/li&gt;&lt;li&gt;obstruct any official proceeding&lt;/li&gt;&lt;li&gt;raised some $250 million from supporters to advance fraudulent claims in court that he won the election, but steered much of the money elsewhere&lt;/li&gt;&lt;li&gt;efforts to influence the Georgia&apos;s 2020 election results&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The list goes on, &lt;a href=&quot;https://www.reuters.com/world/us/trump-says-fbi-is-raiding-his-florida-estate-what-legal-woes-does-he-face-2022-08-08/&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;Reuters link is here for more. &lt;/a&gt;&lt;/p&gt;&lt;p&gt;The ex-Prez playing golf a few weeks ago. &lt;/p&gt;\n\nThis article was written by Eamonn Sheridan at www.forexlive.com."
// url: "https://www.forexlive.com/news/recap-on-the-fbi-search-on-trump-and-the-other-criminal-investigations-underway-20220809/"
// [[Prototype]]: Object

  return (
    <div id="landing">
      <div id="header">
        <div>
          <img id="logo" src={logo} alt="Kash Note Logo"/>
          <span id="kashnote">Kash Note</span>
        </div>
      </div>
      <main>
        <div className="login-container">
          <p className="quote">Beware of little expenses. 
          <br/>A small leak will sink a great ship.</p>
          <p className="person">— Benjamin Franklin</p>
          <div id="signIn">
            <div id="gmailSignIn"></div>
          </div>
          
        </div>
        <div className="news-container">
          <News/>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Landing;
