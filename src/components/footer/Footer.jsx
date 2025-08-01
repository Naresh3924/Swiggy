import React from "react";

const Footer = () => {
  return (
    <div className="bg-white ">
      <div className="flex justify-center py-5 my-5 border-2">
        <h1 className="font-bold text-2xl  py-5 ">
          For better experience,download the Swiggy app now
        </h1>
        <div
          data-testid="playstorelink"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1"
            )
          }
        >
          <img
            className="w-72 h-20 px-5"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="social"
          />
        </div>
        <div
          data-testid="appstorelink"
          onClick={() =>
            window.open(
              "https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
            )
          }
        >
          <img
            className="w-60 h-20"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="social"
          />
        </div>
      </div>
      <div className="flex  justify-between py-5 mx-28">
        <div>
          <img
            className="w-44"
            src="https://companieslogo.com/img/orig/SWIGGY.NS_BIG-f0e9f79a.png?t=1731987060"
            alt="swiggy-log"
          />
          <div className="text-slate-500 text-sm font-bold my-3">
            <p> @ 2025 Swiggy Limited</p>
          </div>
          <div className="my-2">
            <h1 className="font-bold text-1xl">Social Links</h1>
            <div className="flex my-5 justify-between">
              <div
                data-testid="facebookicon"
                onClick={() =>
                  window.open("https://www.facebook.com/swiggy.in/")
                }
              >
                <img
                  className="w-8"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HMj9JwubMnKgb_XIB58v1HqmgjjG1fH7Mg&s"
                  alt="fb-icon"
                />
              </div>
              <div
                data-testid="instagramicon"
                onClick={() =>
                  window.open("https://www.instagram.com/swiggyindia/?hl=en")
                }
              >
                <img
                  className="w-8"
                  src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png"
                  alt="insta-icon"
                />
              </div>
              <div
                data-testid="twittericon"
                onClick={() =>
                  window.open(
                    "https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  )
                }
              >
                <img
                  className="w-8"
                  src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png"
                  alt="twitter-icon"
                />
              </div>
              <div
                data-testid="pinteresticon"
                onClick={() =>
                  window.open("https://in.pinterest.com/swiggyindia/")
                }
              >
                <img
                  className="w-8"
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536559.png"
                  alt="pinterest-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-1xl">Company</h1>
          <div className="text-slate-500 text-base">
            <p>About US</p>
            <p>Swiggy Corporate</p>
            <p>Careers</p>
            <p>Teams</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Dineout</p>
            <p>Swiggy Genie</p>
            <p>Minis</p>
            <p>Pyng</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-1xl">Contact us</h1>
          <div className="text-slate-500">
            <p>About US</p>
            <p>Swiggy Corporate</p>
            <p>Careers</p>
            <p>Teams</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-1xl">Contact us</h1>
          <div className="text-slate-500 text-base">
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-1xl">Available in:</h1>
          <div className="text-slate-500 text-base">
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyederabad</p>
            <p>Chennai</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-1xl">Legal</h1>
          <div className="text-slate-500 text-base">
            <p>Terms & Condiiton</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
            <p>Teams</p>
            <p>Investor Relations</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-1xl">Life at Swiggy</h1>
          <div className="text-slate-500 text-base">
            <p>Explore with Swiggy</p>
            <p>Swiggy News</p>
            <p>Snackables</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
