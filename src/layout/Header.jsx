import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header" bis_skin_checked={1}>
        <div
          className="relative flex h-full flex-1 items-center"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 8px 0px" }}
          bis_skin_checked={1}
        >
          <div
            className="relative z-10 flex h-full w-60 flex-none items-center px-4 w-60"
            bis_skin_checked={1}
          >
            <button
              className="button button-m flex-none rounded-lg bg-layer5 size-10 p-0"
              type="button"
            >
              <div
                className="color_icon_img menu"
                style={{ transform: "scale(0.75)" }}
                bis_skin_checked={1}
              />
            </button>
            <img
              alt="logo"
              src={logo}
              className="h-8 cursor-pointer ml-5 w-auto"
            />
          </div>
          <div
            className="relative h-full w-full px-4 mx-auto max-w-[1248px]"
            bis_skin_checked={1}
          >
            <div
              className="absolute left-0 top-0 flex size-full items-center overflow-hidden px-3 justify-end"
              bis_skin_checked={1}
            >
              <button
                className="button button-m rounded-lg bg-layer5 size-10 p-0"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 fill-secondary"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.1018 16.3007C12.8835 17.2777 11.3369 17.8621 9.6537 17.8621C5.72399 17.8621 2.53833 14.6764 2.53833 10.7467C2.53833 6.81701 5.72399 3.63135 9.6537 3.63135C13.5834 3.63135 16.7691 6.81701 16.7691 10.7467C16.7691 12.4471 16.1726 14.0082 15.1775 15.2322L15.9161 15.9708L14.844 17.0429L14.1018 16.3007ZM14.502 10.7466C14.502 13.4242 12.3313 15.5948 9.65371 15.5948C6.9761 15.5948 4.80546 13.4242 4.80546 10.7466C4.80546 8.06896 6.9761 5.89833 9.65371 5.89833C12.3313 5.89833 14.502 8.06896 14.502 10.7466Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7113 21.0375C18.5768 21.172 18.3587 21.1717 18.2246 21.0368L14.7097 17.5C14.5763 17.3657 14.5766 17.1487 14.7105 17.0148L15.8997 15.8256C16.0342 15.6911 16.2524 15.6915 16.3864 15.8264L19.9013 19.3631C20.0348 19.4974 20.0345 19.7144 19.9006 19.8483L18.7113 21.0375Z"
                  />
                  <path d="M22.8805 4.7869C22.2731 5.03857 21.7882 5.26507 21.4258 5.46641C21.0667 5.66775 20.7866 5.8674 20.5852 6.06539C20.3872 6.26337 20.1876 6.54188 19.9862 6.90093C19.7849 7.25998 19.555 7.75158 19.2967 8.37572H19.0903C18.8286 7.75158 18.597 7.25998 18.3957 6.90093C18.1943 6.54188 17.9964 6.26337 17.8017 6.06539C17.6004 5.8674 17.3185 5.66775 16.9561 5.46641C16.5971 5.26507 16.1122 5.03857 15.5015 4.7869V4.58053C16.1155 4.32886 16.6021 4.10235 16.9612 3.90102C17.3236 3.69968 17.6038 3.50002 17.8017 3.30204C17.9964 3.10406 18.1943 2.82554 18.3957 2.46649C18.597 2.10744 18.8286 1.61584 19.0903 0.991699H19.2967C19.555 1.61584 19.7849 2.10744 19.9862 2.46649C20.1876 2.82554 20.3872 3.10406 20.5852 3.30204C20.7798 3.50002 21.0567 3.69968 21.4157 3.90102C21.7781 4.10235 22.2664 4.32886 22.8805 4.58053V4.7869Z" />
                </svg>
              </button>
              <button
                className="button button-m ml-3 h-10 rounded-lg border-solid px-4 text-base border-2 border-third"
                type="button"
              >
                Sign In
              </button>
              <button
                className="button button-brand button-m h-10 rounded-lg px-4 text-base ml-1 min-w-24"
                type="button"
              >
                Sign Up
              </button>
              <div
                className="relative ml-3 flex h-10 w-10 flex-none rounded-lg bg-layer5"
                bis_skin_checked={1}
              >
                <button className="button button-m size-10 p-0" type="button">
                  <div className="size-7 scale-90" bis_skin_checked={1}>
                    <div
                      className="color_icon_img chat"
                      bis_skin_checked={1}
                      style={{ transform: "scale(0.9)" }}
                    />
                  </div>
                </button>
              </div>
              <div
                className="relative ml-3 flex h-10 flex-none rounded-lg bg-layer5 w-auto"
                bis_skin_checked={1}
              >
                <button
                  className="button button-m relative size-10 p-0"
                  type="button"
                >
                  <svg className="icon size-6 text-secondary" viewBox="0 0 32 32">
                    <path d="M16 4C9.3726 4 4 9.3726 4 16C4 22.6274 9.3726 28 16 28C22.6274 28 28 22.6274 28 16C28 9.3726 22.6274 4 16 4ZM25.1671 12.0007C25.7022 13.2252 26.0008 14.578 26.0008 16.001C26.0008 17.424 25.7022 18.7768 25.1671 20.0013H20.6577C20.8782 18.7607 20.9984 17.412 20.9984 16.001C20.9984 14.59 20.8781 13.2413 20.6577 12.0007H25.1671ZM13.0018 16.001C13.0018 14.5641 13.112 13.2052 13.3125 12.0007H18.6857C18.8862 13.2052 18.9984 14.564 18.9984 16.001C18.9984 17.4381 18.8862 18.7969 18.6857 20.0014H13.3146C13.1142 18.7969 13.002 17.4381 13.002 16.001H13.0018ZM24.0007 10.0004H20.1927C19.7277 8.4392 19.0904 7.15453 18.3388 6.27668C20.6017 6.82169 22.6039 8.1385 24.0007 10.0004ZM16 7.00222C16.8878 7.00222 17.6875 8.16266 18.2367 10.0025H13.7634C14.3125 8.16073 15.1123 7.00222 16.0001 7.00222H16ZM13.6611 6.27879C12.9095 7.15458 12.2722 8.44329 11.8092 10.0025H8.0012C9.3974 8.14096 11.3989 6.82423 13.661 6.27879H13.6611ZM6.83291 12.0007H11.3423C11.1218 13.2413 11.0015 14.59 11.0015 16.001C11.0015 17.412 11.1219 18.7607 11.3423 20.0013H6.83286C6.28161 18.7398 5.99776 17.3777 5.99915 16.001C5.99915 14.578 6.29779 13.2252 6.83286 12.0007H6.83291ZM7.9994 22.0015H11.8074C12.2724 23.5627 12.9097 24.8474 13.6612 25.7253C11.3983 25.1802 9.3962 23.8634 7.9994 22.0015ZM16 24.9997C15.1122 24.9997 14.3125 23.8393 13.7633 21.9994H18.2366C17.6835 23.8412 16.8878 24.9997 15.9999 24.9997H16ZM18.3388 25.7233C19.0904 24.8475 19.7277 23.5588 20.1908 21.9995H23.9988C22.6025 23.8611 20.6011 25.1779 18.3389 25.7233H18.3388Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;