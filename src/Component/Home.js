import React from "react";
import "./Home.css";

function Home() {
  const copy = () => {
    navigator.clipboard.writeText("imahadsajjad@gmail.com");
    alert("My email has been copied to your clipboard");
  };
  return (
    <main className="home-main">
      <h2>
        <span className="lg">Hi, I'm Ahad Sajjad</span>
        <br />
        &emsp;and I am a <span className="sp">Graphic Designer</span>
      </h2>
      <div className="socials">
        <h3>Hit me up</h3>
        <ul>
          <li>
            <a href="http://www.linkedin.com/in/ahad-sajjad127" target="blank">
              <img
                alt=""
                src="https://img.icons8.com/bubbles/100/000000/linkedin.png"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/im_ahad_sajjad/" target="blank">
              <img
                alt=""
                src="https://img.icons8.com/bubbles/100/000000/instagram-new--v2.png"
              />
            </a>
          </li>
          <li>
            <button id="email" onClick={copy}>
              <img
                alt=""
                src="https://img.icons8.com/fluency/96/000000/email-open.png"
              />
            </button>
          </li>
        </ul>
      </div>
      <img
        src="https://res.cloudinary.com/dm7rm8goc/image/upload/v1650361323/Media/portfolio_main_page_not_final_qeq3e23_fqzeyd.png"
        alt=""
        className="bg-img"
      />
    </main>
  );
}

export default Home;
