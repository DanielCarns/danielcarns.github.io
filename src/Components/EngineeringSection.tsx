import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function AboutSection() {
  return (
    <div className="content px-5">
      <h2 className="numbered-heading">Engineering</h2>
      <p className="summary">
        I've worked for a variety of clients including CoachMePlus, HowardHanna,
        Horizontal Wireline, and more. My areas of expertise are in mobile
        development (both native and React Native), Node, Docker, and AWS
        infrastructure.
      </p>
      <p>
        I'm interested in diving deeper into backend technologies so I am
        currently building some Node microservices which I will deploy using
        Kubernetes. After that's done I'll add Prometheus and Graphana to
        monitor my services.
      </p>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5vw"
          height="5vw"
          viewBox="0 0 24 24"
          style={{ color: "#9d9494" }}
          className="tech-svg"
        >
          <title>react</title>
          <rect width="24" height="24" fill="none" color="#9d9494" />
          <path
            fill="currentColor"
            d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5vw"
          height="5vw"
          viewBox="0 0 16 16"
          className="tech-svg"
        >
          <path
            d="M9.449 9.15a.283.283 0 01.067.006l.003-.004 1.734.293a3.435 3.435 0 01-1.388 1.744l-.673-1.626.002-.002a.294.294 0 01.255-.41zm-2.732.073a.294.294 0 01.085.344l.005.006-.666 1.61A3.448 3.448 0 014.757 9.45l1.72-.292.002.004a.288.288 0 01.238.06zm1.433.681a.293.293 0 01.108.113h.006l.848 1.532a3.443 3.443 0 01-2.218-.002l.845-1.529h.002a.293.293 0 01.409-.114zM9.633 7.63l1.3-1.163c.4.647.575 1.408.502 2.164l-1.684-.485-.002-.007a.294.294 0 01-.115-.504V7.63zm-1.067-.884a.294.294 0 01-.048-.149h-.002l-.099-1.744a3.46 3.46 0 011.995.961L8.99 6.824l-.005-.003a.294.294 0 01-.418-.075zm-1.409.137a.294.294 0 01-.146-.055l-.003.001-1.433-1.015a3.43 3.43 0 012.008-.961l-.1 1.746-.007.004a.294.294 0 01-.319.28zm-.775 1.185a.294.294 0 01-.135.08l-.001.005-1.677.484a3.429 3.429 0 01.487-2.17l1.308 1.17-.002.006a.293.293 0 01.02.425zM8 8.893l-.483-.232-.12-.519.334-.416h.536l.333.417-.12.519-.48.231z"
            fill="#9d9494"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6 3.714l1.375 5.97a1.049 1.049 0 01-.04.595 1.041 1.041 0 01-.166.298l-3.85 4.789a1.05 1.05 0 01-.372.29c-.026.013-.054.024-.082.035a1.086 1.086 0 01-.377.071l-6.175.002a1.096 1.096 0 01-.778-.338l-.007-.007c-.016-.017-.032-.034-.047-.053L.231 10.58a1.101 1.101 0 01-.167-.3 1.067 1.067 0 01-.039-.593l1.373-5.971A1.073 1.073 0 011.973 3L7.537.341a1.072 1.072 0 01.923 0l5.564 2.657a1.074 1.074 0 01.576.716zm-4.341 8.427a1.123 1.123 0 01-.056-.134 4.334 4.334 0 001.92-2.415l.142.025a.263.263 0 01.186-.07c.2.039.394.096.581.172.098.044.197.082.299.115l.053.012.033.006.007.002.004.001a.334.334 0 10.148-.649 1.946 1.946 0 01-.034-.008l-.063-.015a2.81 2.81 0 00-.319-.025 3.112 3.112 0 01-.597-.098.374.374 0 01-.144-.145l-.134-.039a4.327 4.327 0 00-.694-2.997 10.898 10.898 0 01.118-.106.263.263 0 01.063-.188c.153-.132.32-.249.495-.348.095-.049.188-.103.277-.162a1.449 1.449 0 00.073-.06.335.335 0 10-.415-.52l-.02.016c-.018.014-.039.03-.053.043a2.746 2.746 0 00-.22.233c-.137.15-.287.286-.45.406a.37.37 0 01-.201.022l-.127.09A4.364 4.364 0 008.367 3.97l-.008-.148a.265.265 0 01-.11-.167 3.12 3.12 0 01.039-.604c.021-.105.036-.21.045-.317v-.095a.334.334 0 10-.666.01v.085c.009.107.024.212.045.317.032.2.044.402.037.604a.363.363 0 01-.108.172l-.008.141a4.283 4.283 0 00-2.778 1.336 6.015 6.015 0 01-.12-.086.263.263 0 01-.198-.019 3.107 3.107 0 01-.449-.406 2.78 2.78 0 00-.219-.232 1.792 1.792 0 00-.059-.048l-.015-.011a.397.397 0 00-.232-.088.32.32 0 00-.265.118.353.353 0 00.082.49l.005.004.018.015.05.04c.09.06.182.114.277.162.176.1.342.216.495.348a.37.37 0 01.067.192l.107.095a4.31 4.31 0 00-.68 3.004l-.14.041a.46.46 0 01-.143.145 3.108 3.108 0 01-.596.098 2.78 2.78 0 00-.32.025l-.062.015-.027.006h-.003l-.005.002a.334.334 0 10.148.649h.005l.005-.002h.002a2.7 2.7 0 01.025-.006l.061-.014a2.71 2.71 0 00.299-.115 3.12 3.12 0 01.58-.17.37.37 0 01.192.067l.145-.025a4.334 4.334 0 001.92 2.398l-.06.145a.33.33 0 01.03.188c-.084.19-.185.372-.302.542a2.773 2.773 0 00-.179.266l-.03.063-.012.027a.334.334 0 10.601.285v-.001a3.145 3.145 0 01.042-.085c.038-.1.07-.201.096-.305.057-.21.144-.412.258-.598a.27.27 0 01.143-.07l.076-.137a4.31 4.31 0 003.073.008 10.147 10.147 0 01.07.128.26.26 0 01.17.103 3.1 3.1 0 01.23.56c.026.104.058.206.096.306l.03.063.011.022a.333.333 0 00.568.106.335.335 0 00.034-.39l-.012-.026-.031-.064a2.774 2.774 0 00-.179-.266 3.098 3.098 0 01-.295-.528.26.26 0 01.026-.197z"
            fill="#9d9494"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5vw"
          height="5vw"
          viewBox="-252 343.9 106.1 106.1"
          className="tech-svg"
        >
          <path
            fill="#9d9494"
            d="M-145.9 373.3v-3.2c-.1-2.3-.2-4.7-.6-7-.4-2.3-1.1-4.5-2.2-6.6-1.1-2.1-2.4-4-4.1-5.6-1.7-1.7-3.6-3-5.6-4.1-2.1-1.1-4.3-1.8-6.6-2.2-2.3-.4-4.6-.6-7-.6h-53.7c-.6 0-1.2 0-1.7.1-1.7.1-3.5.2-5.2.5-1.7.3-3.4.8-5 1.4-.5.2-1.1.5-1.6.7-1.6.8-3 1.8-4.4 2.9-.4.4-.9.8-1.3 1.2-1.7 1.7-3 3.6-4.1 5.6-1.1 2.1-1.8 4.3-2.2 6.6-.4 2.3-.5 4.6-.6 7v53.7c.1 2.3.2 4.7.6 7 .4 2.3 1.1 4.5 2.2 6.6 1.1 2.1 2.4 4 4.1 5.6 1.7 1.7 3.6 3 5.6 4.1 2.1 1.1 4.3 1.8 6.6 2.2 2.3.4 4.6.6 7 .6h53.7c2.3-.1 4.7-.2 7-.6 2.3-.4 4.5-1.1 6.6-2.2 2.1-1.1 4-2.4 5.6-4.1 1.7-1.7 3-3.6 4.1-5.6 1.1-2.1 1.8-4.3 2.2-6.6.4-2.3.6-4.6.6-7v-3.2V377v-3.7z"
          />
          <path
            fill="#FFF"
            d="M-168 409.4l.3-1.2c4.4-17.5-6.3-38.3-24.5-49.2 8 10.8 11.5 23.9 8.4 35.3-.3 1-.6 2-1 3-.4-.3-.9-.6-1.6-.9 0 0-18.1-11.2-37.7-30.9-.5-.5 10.5 15.7 22.9 28.8-5.9-3.3-22.2-15.2-32.6-24.6 1.3 2.1 2.8 4.2 4.4 6.1 8.6 11 19.9 24.5 33.4 34.9-9.5 5.8-22.9 6.3-36.2 0-3.3-1.5-6.4-3.4-9.3-5.5 5.6 9 14.3 16.8 24.9 21.4 12.6 5.4 25.2 5.1 34.5.1 0 0 .1 0 .1-.1.4-.2.8-.5 1.2-.7 4.5-2.3 13.3-4.6 18.1 4.6 1.4 2.1 3.9-9.9-5.3-21.1z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5vw"
          height="5vw"
          viewBox="0 0 1024 1024"
          className="tech-svg"
        >
          <circle cx="512" cy="512" r="512" style={{fill: "#9d9494"}} />
          <path
            d="M400.3 479.1c0 6.3.7 11.4 1.9 15.1 1.4 3.8 3.1 7.9 5.5 12.3.9 1.3 1.2 2.7 1.2 3.9 0 1.7-1 3.4-3.2 5.1l-10.7 7.1c-1.3.9-2.8 1.5-4.4 1.5-1.7 0-3.4-.9-5.1-2.4-2.3-2.5-4.3-5.1-6.1-8-1.9-3.3-3.7-6.6-5.3-10-13.3 15.7-30 23.5-50.1 23.5-14.3 0-25.7-4.1-34-12.2-8.3-8.2-12.6-19.1-12.6-32.7 0-14.5 5.1-26.2 15.5-35.1 10.4-8.9 24.2-13.3 41.7-13.3 5.8 0 11.8.5 18 1.4 6.3.9 12.8 2.2 19.6 3.8v-12.4c0-12.9-2.7-22-8-27.2-5.4-5.3-14.6-7.8-27.7-7.8-6 0-12.1.7-18.4 2.2s-12.4 3.4-18.4 5.8c-1.9.9-3.9 1.6-6 2.2-.9.3-1.8.4-2.7.5-2.4 0-3.6-1.7-3.6-5.3v-8.3c0-2.7.3-4.8 1.2-6 1.3-1.5 2.9-2.8 4.8-3.6 6-3.1 13.1-5.6 21.4-7.7 8.7-2.2 17.6-3.3 26.6-3.2 20.3 0 35.1 4.6 44.6 13.8 9.4 9.2 14.1 23.1 14.1 41.9v55.2l.2-.1zM331.2 505c5.6 0 11.4-1 17.5-3.1 6.1-2 11.6-5.8 16.2-10.9 2.7-3.2 4.8-6.8 5.8-10.9 1-4.1 1.7-9 1.7-14.8v-7.1c-5.2-1.3-10.4-2.2-15.7-2.9-5.3-.7-10.7-1-16-1-11.4 0-19.8 2.2-25.4 6.8-5.6 4.6-8.3 11.1-8.3 19.6 0 8 2 14 6.3 18 4.1 4.3 10 6.3 17.9 6.3zm136.7 18.4c-3.1 0-5.1-.5-6.5-1.7-1.4-1-2.6-3.4-3.6-6.6l-40-131.6c-.8-2.2-1.3-4.5-1.5-6.8 0-2.7 1.4-4.3 4.1-4.3h16.7c3.2 0 5.4.5 6.6 1.7 1.4 1 2.4 3.4 3.4 6.7l28.6 112.7 26.6-112.7c.9-3.4 1.9-5.6 3.2-6.7 2-1.3 4.4-1.9 6.8-1.7H526c3.2 0 5.5.5 6.8 1.7 1.3 1 2.6 3.4 3.2 6.7l26.9 114.1 29.5-114.1c1-3.4 2.2-5.6 3.4-6.7 2-1.3 4.3-1.9 6.6-1.7h15.9c2.7 0 4.3 1.4 4.3 4.3 0 .9-.2 1.7-.4 2.7-.3 1.5-.7 2.9-1.2 4.3l-41 131.6c-1 3.4-2.2 5.6-3.6 6.6-1.9 1.2-4.2 1.8-6.5 1.7h-14.7c-3.2 0-5.4-.5-6.8-1.7-1.3-1.2-2.5-3.4-3.2-6.8l-26.4-109.8L492.6 515c-.9 3.4-1.9 5.6-3.2 6.8-1.4 1.2-3.8 1.7-6.8 1.7l-14.7-.1zm218.8 4.6c-8.9 0-17.7-1-26.2-3.1-8.5-2-15.1-4.3-19.6-6.8-2.7-1.5-4.6-3.2-5.3-4.8-.7-1.5-1-3.1-1-4.8v-8.7c0-3.6 1.4-5.3 3.9-5.3 1 0 2 .2 3.1.5 1 .3 2.6 1 4.3 1.7 5.8 2.6 12.1 4.6 18.7 6 6.8 1.4 13.4 2 20.3 2 10.7 0 19.1-1.9 24.9-5.6 5.6-3.4 9-9.6 8.9-16.2.1-4.4-1.5-8.7-4.6-11.9-3.1-3.2-8.9-6.1-17.2-8.9l-24.7-7.7c-12.4-3.9-21.6-9.7-27.2-17.3-5.5-7.1-8.5-15.8-8.5-24.7 0-7.1 1.6-13.4 4.6-18.9 3.1-5.4 7.1-10.2 12.3-14 5.1-3.9 10.9-6.8 17.7-8.9 6.8-2 14-2.9 21.5-2.9 3.7 0 7.7.2 11.4.7 3.9.5 7.5 1.2 11.1 1.9 3.4.9 6.7 1.7 9.7 2.7 3.1 1 5.5 2 7.2 3.1 2 1 3.8 2.5 5.1 4.3 1.1 1.7 1.6 3.6 1.5 5.6v8c0 3.6-1.4 5.5-3.9 5.5-2.3-.3-4.5-1-6.5-2-10.3-4.5-21.4-6.8-32.7-6.6-9.7 0-17.4 1.5-22.7 4.8-5.3 3.2-8 8.2-8 15.1 0 4.8 1.7 8.9 5.1 12.1 3.4 3.2 9.7 6.5 18.7 9.4l24.2 7.6c12.2 3.9 21.1 9.4 26.4 16.4 5.3 7 7.8 15 7.8 23.8 0 7.3-1.5 14-4.4 19.8-3.1 5.8-7.2 10.9-12.4 15-5.3 4.3-11.6 7.3-18.9 9.5-7.9 2.4-15.9 3.6-24.6 3.6zm32.2 82.7c-56 41.4-137.4 63.3-207.4 63.3-98.1 0-186.5-36.3-253.2-96.6-5.3-4.8-.5-11.2 5.8-7.5 72.2 41.9 161.3 67.3 253.4 67.3 62.2 0 130.4-12.9 193.3-39.5 9.3-4.2 17.3 6.2 8.1 13zm23.3-26.5c-7.2-9.2-47.4-4.4-65.6-2.2-5.4.7-6.3-4.1-1.3-7.7 32-22.5 84.6-16 90.8-8.5 6.1 7.7-1.7 60.3-31.7 85.5-4.6 3.9-9 1.9-7-3.2 6.8-16.9 22-54.9 14.8-63.9z"
            fill="#000000"
          />
        </svg>
      </div>
    </div>
  );
}
