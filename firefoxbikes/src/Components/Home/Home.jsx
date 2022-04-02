import './Home.css'
export const Home = () => {
  return (
    <>
      <div>
        <div className="front_div_" style={{ backgroundImage: "url(./scrool4.png)" }}>
          <div>
              <h1 className="go_booking">#GOBIKING</h1>
          </div>
          <div>
              
          </div>
        </div>
        {/* <div
          className="vimeoVideoUrl1"
          style={{ width: "100%", marginBottom: "-10px" }}
        >
          <video
            id="videoHomePage"
            height="759px"
            controls=""
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline=""
          >
            <source src="https://player.vimeo.com/progressive_redirect/playback/676196449/rendition/1080p?loc=external&amp;signature=31c86c10c351106050b77b47eff4e6e50c3ecbdaee1e0eeabd5a9c4f2bd79492" />
          </video>
        </div> */}
        <div>
          <img
            style={{ width: "100%", marginBottom: "-10px" }}
            src="homeimage1.png"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%", marginBottom: "-10px" }}
            src="homeimage2.png"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%", marginBottom: "-10px" }}
            src="https://www.firefoxbikes.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-HeroFirefox-Library/default/dw30403eca/Homepage_Firefox_edge/EMI-1920x933.jpg?sh=1000&sfrm=jpg&q=70"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%", marginBottom: "-10px" }}
            src="homeimage3.png"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%", marginBottom: "-10px" }}
            src="homeimage4.png"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%", marginBottom: "-10px" }}
            src="footer.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
