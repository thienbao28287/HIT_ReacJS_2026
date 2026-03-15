import img from "../../assets/week1/background1.jpg";
import phone1 from "../../assets/week1/phone_1.png";
import phone2 from "../../assets/week1/phone_2.png";
import "./Banner.css";
function Banner() {
  return (
    <div className="background">
      <div className="overLay"></div>
      <div className="main-content">
        <div className="bgr__content">
          <h2>Promote Your App with SoftLand</h2>
          <p>
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="bgr__active">
            <div className="ggPlay btn">
              <i className="fa-brands fa-google-play"></i>
              <span>Google Play</span>
            </div>
            <div className="apple btn">
              <i class="fa-brands fa-apple"></i>
              <span>App Store</span>
            </div>
          </div>
        </div>
        <div className="bgr__img">
          <div className="img1">
            <img src={phone1} alt="" />
          </div>
          <div className="img2">
            <img src={phone2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
