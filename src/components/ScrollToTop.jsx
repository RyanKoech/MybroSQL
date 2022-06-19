import React, {useRef} from "react";

const ScrollToTop = () => {

  const mybutton = useRef();

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.current.style.display = 'block';
    } else {
      mybutton.current.style.display = 'none';
    }
  }

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="inline-block p-3 bg-blue-700  hover:bg-blue-800 focus:ring-blue-300 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg  focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bottom-48 right-2 sm:bottom-24 sm:right-16 md:right-10 fixed hidden"
      ref={mybutton}
      onClick={backToTop}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="w-4 h-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </button>
  );
};

export default ScrollToTop;
