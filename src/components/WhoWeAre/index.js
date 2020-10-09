import React from "react";

import "./melancia.css";

function WhoWeAre() {
  return (
    <div className="App">
      <div className="melancia-divison">
        <span className="melancia-header">Quem Somos </span>
        <br></br>
        <span className="melancia-text"> Nosso diferencial </span>
      </div>

      <div className="melancia-body">
        <svg
          className="vetor-melancia"
          width="250"
          height="300"
          viewBox="0 0 250 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M135.534 22.395L147.367 42.713C147.62 43.1463 147.982 43.5054 148.416 43.7544C148.85 44.0034 149.341 44.1337 149.841 44.1323L173.375 43.9569L184.662 23.4493C184.904 23.0177 185.029 22.5301 185.025 22.0348C185.021 21.5395 184.889 21.0538 184.641 20.6259L173.049 0.288746L149.533 0.463992C149.032 0.465235 148.54 0.598806 148.107 0.85133C147.673 1.10385 147.313 1.46647 147.063 1.90286L135.534 22.395Z"
            fill="white"
          />
          <path
            d="M136.071 94.4477L147.904 114.783C148.158 115.214 148.52 115.571 148.955 115.817C149.389 116.063 149.88 116.19 150.378 116.185L173.912 116.01L185.199 95.5021C185.441 95.0705 185.566 94.5828 185.562 94.0876C185.558 93.5923 185.426 93.1066 185.178 92.6786L173.586 72.3415L150.07 72.5167C149.567 72.518 149.073 72.6534 148.639 72.9093C148.205 73.1651 147.847 73.5322 147.6 73.9729L136.071 94.4477V94.4477Z"
            fill="white"
          />
          <path
            d="M137.151 239.289L148.983 259.599C149.236 260.032 149.597 260.391 150.031 260.64C150.466 260.889 150.957 261.019 151.457 261.018L174.989 260.842L186.276 240.343C186.519 239.909 186.645 239.418 186.641 238.92C186.638 238.422 186.504 237.934 186.255 237.503L174.664 217.174L151.149 217.349C150.646 217.354 150.154 217.491 149.721 217.746C149.287 218.002 148.928 218.367 148.679 218.805L137.151 239.289Z"
            fill="white"
          />
          <path
            d="M67.8478 22.8994L79.6966 43.2173C79.9483 43.6518 80.3097 44.0118 80.7441 44.2611C81.1785 44.5103 81.6706 44.6398 82.1707 44.6367L105.685 44.4614L116.988 23.9537C117.222 23.5195 117.342 23.0329 117.338 22.5393C117.335 22.0456 117.207 21.5609 116.967 21.1302L105.359 0.793244L81.8452 0.968474C81.3465 0.969224 80.8568 1.10273 80.426 1.35543C79.9952 1.60814 79.6386 1.97102 79.3924 2.40722L67.8478 22.8994V22.8994Z"
            fill="white"
          />
          <path
            d="M68.3849 94.952L80.2338 115.287C80.4864 115.72 80.8484 116.077 81.2829 116.323C81.7174 116.57 82.209 116.696 82.7078 116.689L106.222 116.514L117.525 96.0063C117.759 95.5721 117.879 95.0855 117.876 94.5919C117.872 94.0982 117.744 93.6135 117.504 93.1828L105.896 72.8459L82.3824 73.0211C81.8815 73.0218 81.39 73.1572 80.9587 73.4132C80.5275 73.6692 80.1722 74.0366 79.9297 74.4772L68.3849 94.952Z"
            fill="white"
          />
          <path
            d="M68.9277 167.715L80.7767 188.065C81.0294 188.498 81.3913 188.856 81.8259 189.103C82.2604 189.349 82.752 189.476 83.2507 189.469L106.765 189.294L118.068 168.823C118.302 168.388 118.423 167.901 118.419 167.407C118.415 166.912 118.287 166.427 118.047 165.995L106.439 145.626L82.9253 145.801C82.4252 145.805 81.9351 145.942 81.5045 146.198C81.0738 146.455 80.7179 146.82 80.4727 147.259L68.9282 167.784L68.9277 167.715Z"
            fill="white"
          />
          <path
            d="M69.465 239.793L81.3138 260.103C81.5656 260.538 81.9269 260.897 82.3613 261.147C82.7957 261.396 83.2878 261.525 83.7879 261.522L107.302 261.347L118.605 240.847C118.839 240.41 118.959 239.921 118.956 239.425C118.952 238.928 118.824 238.441 118.584 238.007L106.977 217.679L83.4625 217.854C82.9624 217.858 82.4723 217.995 82.0416 218.25C81.611 218.506 81.2551 218.871 81.0098 219.309L69.465 239.793Z"
            fill="white"
          />
          <path
            d="M0.162933 23.4038L12.1674 43.7205C12.4242 44.1538 12.7911 44.5129 13.2316 44.7618C13.6721 45.0108 14.1707 45.1411 14.6779 45.1396L38.5575 44.9617L50.0129 24.4528C50.2581 24.0211 50.3852 23.5335 50.3815 23.0382C50.3778 22.543 50.2435 22.0573 49.9919 21.6293L38.232 1.29346L14.37 1.47128C13.8615 1.47258 13.3624 1.6062 12.9224 1.85878C12.4825 2.11135 12.1173 2.474 11.8632 2.91043L0.162933 23.4038V23.4038Z"
            fill="white"
          />
          <path
            d="M0.699066 95.4564L12.7036 115.79C12.9613 116.222 13.3288 116.578 13.7695 116.824C14.2101 117.07 14.7083 117.197 15.214 117.192L39.0936 117.014L50.549 96.5054C50.7942 96.0738 50.9213 95.5861 50.9176 95.0909C50.9139 94.5956 50.7796 94.1099 50.528 93.682L38.7682 73.3461L14.9061 73.5239C14.3956 73.5252 13.8946 73.6607 13.4542 73.9166C13.0139 74.1725 12.6499 74.5396 12.3995 74.9804L0.699066 95.4564V95.4564Z"
            fill="white"
          />
          <path
            d="M1.24191 168.219L13.2466 188.568C13.5042 189 13.8718 189.357 14.3124 189.604C14.753 189.85 15.2512 189.977 15.757 189.972L39.6366 189.794L51.0923 169.322C51.3375 168.89 51.4645 168.402 51.4608 167.906C51.4571 167.41 51.3228 166.923 51.0712 166.494L39.3111 146.126L15.4491 146.304C14.9393 146.309 14.4397 146.446 14 146.702C13.5602 146.958 13.1956 147.324 12.9425 147.763L1.24242 168.289L1.24191 168.219Z"
            fill="white"
          />
          <path
            d="M1.77921 240.298L13.783 260.606C14.0398 261.04 14.4067 261.398 14.8472 261.647C15.2877 261.896 15.7863 262.026 16.2934 262.025L40.1719 261.847L51.6269 241.346C51.8735 240.912 52.0014 240.422 51.9977 239.924C51.994 239.425 51.8588 238.937 51.6057 238.507L39.8465 218.179L15.9855 218.357C15.4758 218.361 14.9762 218.498 14.5365 218.754C14.0967 219.009 13.7322 219.374 13.479 219.813L1.77921 240.298Z"
            fill="white"
          />
          <path
            d="M136.613 167.21L148.446 187.561C148.7 187.993 149.062 188.35 149.497 188.596C149.931 188.843 150.422 188.97 150.92 188.965L174.454 188.79L185.741 168.319C185.983 167.887 186.108 167.398 186.104 166.902C186.101 166.406 185.968 165.92 185.72 165.491L174.128 145.121L150.612 145.297C150.11 145.301 149.617 145.439 149.184 145.694C148.751 145.95 148.392 146.316 148.142 146.755L136.614 167.28L136.613 167.21Z"
            stroke="url(#paint0_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M174.623 188.789L164.1 170.792C163.435 169.651 162.479 168.707 161.331 168.055C160.183 167.403 158.883 167.067 157.563 167.08L136.614 167.236"
            stroke="url(#paint1_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M136.615 167.236L157.563 167.08C158.88 167.076 160.172 166.725 161.31 166.061C162.447 165.397 163.391 164.445 164.045 163.3L174.298 145.12"
            stroke="url(#paint2_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M174.298 145.12L163.823 163.249C163.153 164.404 162.806 165.712 162.816 167.041C162.826 168.37 163.192 169.673 163.879 170.818L174.623 188.788"
            stroke="url(#paint3_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M205.027 166.727L213.033 166.667"
            stroke="url(#paint4_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M114.78 167.399L122.786 167.339"
            stroke="url(#paint5_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M182.194 130.505L185.784 123.927"
            stroke="url(#paint6_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M138.39 210.166L141.975 202.861"
            stroke="url(#paint7_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M183.459 202.552L187.146 209.075"
            stroke="url(#paint8_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M137.026 125.018L140.714 131.541"
            stroke="url(#paint9_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="184.123"
              y1="188.616"
              x2="173.356"
              y2="144.606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="172.983"
              y1="188.75"
              x2="169.294"
              y2="166.041"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="172.821"
              y1="166.916"
              x2="169.132"
              y2="144.207"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="174.118"
              y1="188.691"
              x2="150.667"
              y2="165.728"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="212.694"
              y1="167.667"
              x2="212.65"
              y2="166.602"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="122.447"
              y1="168.34"
              x2="122.403"
              y2="167.275"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="185.675"
              y1="130.464"
              x2="182.898"
              y2="124.821"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint7_linear"
              x1="141.871"
              y1="210.123"
              x2="138.593"
              y2="204.123"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint8_linear"
              x1="186.989"
              y1="209.061"
              x2="184.212"
              y2="203.418"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
            <linearGradient
              id="paint9_linear"
              x1="140.556"
              y1="131.527"
              x2="137.779"
              y2="125.885"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D3189" />
              <stop offset="1" stop-color="#873189" />
            </linearGradient>
          </defs>
        </svg>

        <div className="melancia-home">
          <span>
            <b>FLOOWs</b> é conectada por líderes renomados de diferentes
            habilidades,{" "}
          </span>
          <br></br>
          <span>
            que desenvolvem produtos inovadores de experiências interativas{" "}
          </span>
          <br></br>
          <span>marcantes e significativas para sociedade. </span>
          <br></br>
          <br></br>
          <span>Nosso time se destaca no mercado nacional conectando o </span>
          <br></br>
          <span>entretenimento, urbanismo e </span>
          <br></br>
          <span>tecnologia de forma inédita e surpreendente. </span>
        </div>

        <div class="button1"> Conheçer Equipe </div>
      </div>

      <svg
        className="vetor-melancia-1"
        width="804"
        height="368"
        viewBox="0 0 804 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M120.088 486.389C360.408 -307.07 518.907 909.429 762.908 251.43C1031.82 -473.747 -151.398 583.077 17.6022 819.287"
          stroke="#EEEEEE"
        />
      </svg>
    </div>
  );
}

export default WhoWeAre;
