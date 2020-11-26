import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainStyle>
      <NavStyle>
        <i>
          <svg
            width="75"
            height="72"
            viewBox="0 0 75 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="5" width="75" height="63" fill="#0300A0" />
            <path
              d="M32.8763 18.42C36.1163 18.42 39.4763 18.46 42.9563 18.54C46.4363 18.58 49.6163 18.74 52.4963 19.02L52.0763 25.68H36.1763C34.1763 25.68 33.1763 26.7 33.1763 28.74V35.22H49.8563V41.7H33.1763V49.86C33.1763 51.9 34.1763 52.92 36.1763 52.92H52.0763L52.4963 59.58C49.6163 59.86 46.4363 60.02 42.9563 60.06C39.4763 60.1 36.1163 60.12 32.8763 60.12C30.2363 60.12 28.0963 59.38 26.4563 57.9C24.8163 56.38 23.9963 54.36 23.9963 51.84V26.76C23.9963 24.24 24.8163 22.22 26.4563 20.7C28.0963 19.18 30.2363 18.42 32.8763 18.42Z"
              fill="white"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="23"
              y="18"
              width="30"
              height="43"
            >
              <path
                d="M32.8763 18.42C36.1163 18.42 39.4763 18.46 42.9563 18.54C46.4363 18.58 49.6163 18.74 52.4963 19.02L52.0763 25.68H36.1763C34.1763 25.68 33.1763 26.7 33.1763 28.74V35.22H49.8563V41.7H33.1763V49.86C33.1763 51.9 34.1763 52.92 36.1763 52.92H52.0763L52.4963 59.58C49.6163 59.86 46.4363 60.02 42.9563 60.06C39.4763 60.1 36.1163 60.12 32.8763 60.12C30.2363 60.12 28.0963 59.38 26.4563 57.9C24.8163 56.38 23.9963 54.36 23.9963 51.84V26.76C23.9963 24.24 24.8163 22.22 26.4563 20.7C28.0963 19.18 30.2363 18.42 32.8763 18.42Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M35.5 36C30.5 38.6667 18 48.1 8 64.5L67 62L35.5 36Z"
                fill="url(#paint0_linear)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="37.5"
                y1="36"
                x2="37.5"
                y2="64.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#138810" />
                <stop offset="1" stop-color="#138810" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </i>
        <ul>
          <li>
            <a>MENU</a>
          </li>
          <li>
            <a>OPTIONS</a>
          </li>
          <li>
            <a>LOGIN</a>
          </li>
        </ul>
      </NavStyle>
      <Explorer>
        <svg
          width="241"
          height="54"
          viewBox="0 0 241 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16727 0.419999C12.4073 0.419999 15.7673 0.459998 19.2473 0.539997C22.7273 0.579997 25.9073 0.739997 28.7873 1.02L28.3673 7.68H12.4673C10.4673 7.68 9.46727 8.7 9.46727 10.74V17.22H26.1473V23.7H9.46727V31.86C9.46727 33.9 10.4673 34.92 12.4673 34.92H28.3673L28.7873 41.58C25.9073 41.86 22.7273 42.02 19.2473 42.06C15.7673 42.1 12.4073 42.12 9.16727 42.12C6.52727 42.12 4.38727 41.38 2.74727 39.9C1.10727 38.38 0.287266 36.36 0.287266 33.84V8.76C0.287266 6.24 1.10727 4.22 2.74727 2.7C4.38727 1.18 6.52727 0.419999 9.16727 0.419999ZM41.3948 12.36L47.8748 23.94H48.4148L54.8948 12.36H63.8948L55.3148 26.82L64.5548 42H55.5548L48.2948 29.46H47.9948L40.7948 42H31.7348L40.9748 26.82L32.4548 12.36H41.3948ZM75.9777 12.36L76.6377 16.8C77.8777 15.32 79.5377 14.1 81.6177 13.14C83.7377 12.14 85.9577 11.64 88.2777 11.64C91.9977 11.64 94.6577 13 96.2577 15.72C97.8577 18.44 98.6577 22.34 98.6577 27.42C98.6577 31.38 98.2377 34.48 97.3977 36.72C96.5977 38.92 95.3577 40.48 93.6777 41.4C92.0377 42.32 89.9777 42.78 87.4977 42.78C85.6177 42.78 83.8177 42.54 82.0977 42.06C80.4177 41.62 78.8777 40.88 77.4777 39.84C77.5577 40.88 77.5977 41.94 77.5977 43.02C77.6377 44.1 77.6577 45.16 77.6577 46.2V53.4H68.8377V12.36H75.9777ZM84.7377 18.42C83.3777 18.42 82.1577 18.66 81.0777 19.14C80.0377 19.62 78.8977 20.3 77.6577 21.18V35.16C78.8177 35.48 79.8977 35.78 80.8977 36.06C81.8977 36.3 83.0377 36.42 84.3177 36.42C85.5977 36.42 86.6177 36.2 87.3777 35.76C88.1377 35.32 88.6977 34.46 89.0577 33.18C89.4177 31.9 89.5977 30 89.5977 27.48C89.5977 25.04 89.4177 23.16 89.0577 21.84C88.7377 20.52 88.2177 19.62 87.4977 19.14C86.7777 18.66 85.8577 18.42 84.7377 18.42ZM113.694 -2.86102e-06L113.634 32.52C113.634 34.52 114.814 35.52 117.174 35.52H119.574L120.594 41.52C120.074 41.8 119.374 42.02 118.494 42.18C117.614 42.34 116.714 42.46 115.794 42.54C114.874 42.62 114.114 42.66 113.514 42.66C110.834 42.66 108.714 41.98 107.154 40.62C105.634 39.22 104.874 37.26 104.874 34.74V-2.86102e-06H113.694ZM138.483 11.58C142.203 11.58 145.183 12.1 147.423 13.14C149.663 14.14 151.263 15.8 152.223 18.12C153.223 20.4 153.723 23.44 153.723 27.24C153.723 31.04 153.223 34.08 152.223 36.36C151.263 38.6 149.663 40.22 147.423 41.22C145.183 42.22 142.203 42.72 138.483 42.72C134.763 42.72 131.783 42.22 129.543 41.22C127.303 40.22 125.683 38.6 124.683 36.36C123.723 34.08 123.243 31.04 123.243 27.24C123.243 23.44 123.723 20.4 124.683 18.12C125.683 15.8 127.303 14.14 129.543 13.14C131.783 12.1 134.763 11.58 138.483 11.58ZM138.483 18C136.923 18 135.703 18.26 134.823 18.78C133.983 19.3 133.383 20.24 133.023 21.6C132.663 22.92 132.483 24.8 132.483 27.24C132.483 29.64 132.663 31.5 133.023 32.82C133.383 34.14 133.983 35.06 134.823 35.58C135.703 36.06 136.923 36.3 138.483 36.3C140.043 36.3 141.243 36.06 142.083 35.58C142.963 35.06 143.583 34.14 143.943 32.82C144.303 31.5 144.483 29.64 144.483 27.24C144.483 24.8 144.303 22.92 143.943 21.6C143.583 20.24 142.963 19.3 142.083 18.78C141.243 18.26 140.043 18 138.483 18ZM166.734 12.36L167.574 16.86C171.654 13.34 175.674 11.58 179.634 11.58H181.194L180.354 19.74H177.894C176.614 19.74 175.254 19.92 173.814 20.28C172.414 20.64 170.694 21.18 168.654 21.9V42H159.834V12.36H166.734ZM198.892 11.58C203.892 11.58 207.472 12.44 209.632 14.16C211.832 15.88 212.932 18.4 212.932 21.72C212.972 24.4 212.292 26.42 210.892 27.78C209.492 29.14 207.072 29.82 203.632 29.82H193.072C193.312 32.14 193.972 33.7 195.052 34.5C196.172 35.3 197.892 35.7 200.212 35.7C201.572 35.7 203.252 35.66 205.252 35.58C207.292 35.46 209.332 35.28 211.372 35.04L212.212 40.5C210.452 41.34 208.372 41.92 205.972 42.24C203.612 42.56 201.352 42.72 199.192 42.72C193.512 42.72 189.492 41.48 187.132 39C184.812 36.52 183.652 32.6 183.652 27.24C183.652 23.36 184.152 20.28 185.152 18C186.192 15.72 187.832 14.08 190.072 13.08C192.312 12.08 195.252 11.58 198.892 11.58ZM199.192 17.82C197.672 17.82 196.452 18 195.532 18.36C194.652 18.72 194.012 19.42 193.612 20.46C193.212 21.46 192.972 22.92 192.892 24.84H201.232C202.552 24.84 203.392 24.56 203.752 24C204.152 23.44 204.352 22.62 204.352 21.54C204.352 20.14 203.952 19.18 203.152 18.66C202.352 18.1 201.032 17.82 199.192 17.82ZM225.679 12.36L226.519 16.86C230.599 13.34 234.619 11.58 238.579 11.58H240.139L239.299 19.74H236.839C235.559 19.74 234.199 19.92 232.759 20.28C231.359 20.64 229.639 21.18 227.599 21.9V42H218.779V12.36H225.679Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="118"
              y1="-18"
              x2="118"
              y2="54"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0300A0" />
              <stop offset="1" stop-color="#2B9529" />
            </linearGradient>
          </defs>
        </svg>
      </Explorer>
      <GameDisplay />
      <Airplane>
        <svg
          width="224"
          height="149"
          viewBox="0 0 224 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M181.125 87.8532C179.067 88.6505 175.451 89.3061 171.266 89.8332C159.889 91.2684 144.297 91.7778 144.297 91.7778C144.297 91.7778 64.1452 98.7656 4.0729 72.7769C4.0729 72.7769 -4.66477 67.9618 3.44081 61.4813C4.68895 60.5129 6.01587 59.6621 7.40616 58.9386L7.50519 58.8345C8.42716 57.9388 9.42352 57.1316 10.4824 56.4226C13.5944 54.3074 18.8492 51.8003 25.246 52.9365L183.021 79.7602C183.021 79.7602 188.784 84.8787 181.125 87.8532Z"
              fill="#0300A0"
            />
            <path
              d="M149.689 75.696L182.718 51.0627L197.275 53.7095L183.021 79.7602C183.021 79.7602 150.068 80.0371 149.689 75.696Z"
              fill="#0300A0"
            />
            <path
              d="M66.5344 60.7304L132.325 41.3352L142.929 43.6652L113.21 57.7183L103.923 68.6418L66.5344 60.7304Z"
              fill="#0300A0"
            />
            <path
              d="M171.266 89.8332C159.889 91.2684 144.297 91.7778 144.297 91.7778C144.297 91.7778 64.1452 98.7656 4.07291 72.7769C4.07291 72.7769 -4.66477 67.9618 3.44081 61.4813L3.4682 61.6009C3.4682 61.6009 16.4304 70.8101 78.3631 78.4977L171.266 89.8332Z"
              fill="#44A142"
            />
            <path
              d="M160.691 89.3017L190.105 101.926L197.494 101.065L179.901 87.1644C179.901 87.1644 158.62 82.3914 160.691 89.3017Z"
              fill="#0300A0"
            />
            <path
              d="M14.1337 62.9497C12.7304 62.9741 9.51515 60.5001 7.51562 58.8346C8.4376 57.9389 9.43396 57.1317 10.4928 56.4226C12.1046 57.7227 14.9722 59.8268 16.5672 59.7449C18.8702 59.6452 16.247 62.9099 14.1337 62.9497Z"
              fill="#44A142"
            />
            <path
              d="M147.761 132.94L128.876 133.979L75.7799 96.3448L65.9234 89.357L61.1363 85.9617C70.1184 77.9883 106.765 88.9849 106.765 88.9849C107.467 89.6073 107.69 90.6416 107.659 91.7845C107.597 93.924 106.641 96.4356 106.272 97.3393C106.184 97.5607 106.129 97.6781 106.129 97.6781L147.761 132.94Z"
              fill="#0300A0"
            />
            <path
              d="M85.5668 113.428L82.2905 115.607L84.2752 111.813C83.7132 111.342 83.0178 111.081 82.2989 111.071H82.2462C82.019 111.076 81.7918 111.058 81.5678 111.018L80.4595 111.758L80.9336 110.85C80.1484 110.56 79.4701 110.018 78.9951 109.299L77.0125 110.628L78.264 108.232C77.1052 106.768 75.5418 105.871 73.8204 105.871C71.7576 105.871 69.9203 107.16 68.7341 109.171C68.3823 109.773 67.8851 110.267 67.2929 110.601C66.7007 110.936 66.0348 111.099 65.3629 111.076H65.2534C62.9757 111.076 61.13 113.789 61.13 117.138C61.13 120.486 62.9757 123.2 65.2534 123.2C65.7538 123.198 66.2464 123.068 66.6882 122.821C67.4637 122.425 68.3115 122.211 69.1733 122.194C70.035 122.176 70.8902 122.355 71.6797 122.719C72.3473 123.032 73.0703 123.194 73.8014 123.194C74.5325 123.194 75.2555 123.032 75.9231 122.719C76.7061 122.362 77.5528 122.186 78.406 122.204C79.2592 122.221 80.0989 122.431 80.8682 122.819C81.3074 123.059 81.7951 123.186 82.2905 123.188C84.5681 123.188 86.4138 120.475 86.4138 117.126C86.4302 115.839 86.139 114.567 85.5668 113.428Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M79.4039 122.298C78.2141 122.061 76.9843 122.202 75.8705 122.701C75.2034 123.015 74.4807 123.177 73.7498 123.177C73.0189 123.177 72.2962 123.015 71.6291 122.701C70.8399 122.337 69.9846 122.157 69.1227 122.175C68.2608 122.192 67.4128 122.407 66.6377 122.803C66.1948 123.049 65.7017 123.179 65.2007 123.182C63.178 123.182 61.4945 121.038 61.1447 118.212C61.5495 117.903 61.893 117.514 62.1561 117.067C63.3423 115.058 65.1796 113.769 67.2424 113.769C69.3051 113.769 71.1234 115.031 72.3076 117.025C72.6609 117.625 73.1561 118.12 73.7449 118.46C74.3337 118.801 74.9963 118.975 75.6682 118.967H75.7209C77.3306 118.963 78.7254 120.318 79.4039 122.298Z"
              fill="black"
            />
            <path
              d="M178.063 110.548L174.787 112.728L176.772 108.934C176.21 108.462 175.514 108.201 174.796 108.192H174.743C174.516 108.197 174.288 108.179 174.064 108.139L172.956 108.878L173.43 107.97C172.645 107.681 171.967 107.138 171.492 106.42L169.509 107.749L170.761 105.352C169.602 103.888 168.038 102.991 166.317 102.991C164.254 102.991 162.417 104.28 161.231 106.292C160.879 106.894 160.382 107.387 159.79 107.722C159.197 108.056 158.531 108.22 157.86 108.196H157.75C155.472 108.196 153.627 110.909 153.627 114.258C153.627 117.607 155.472 120.32 157.75 120.32C158.25 120.319 158.743 120.189 159.185 119.941C159.96 119.546 160.808 119.332 161.67 119.315C162.532 119.297 163.387 119.476 164.176 119.84C164.844 120.153 165.567 120.315 166.298 120.315C167.029 120.315 167.752 120.153 168.42 119.84C169.203 119.483 170.049 119.307 170.903 119.324C171.756 119.342 172.596 119.551 173.365 119.939C173.804 120.18 174.292 120.307 174.787 120.309C177.065 120.309 178.91 117.596 178.91 114.247C178.927 112.959 178.636 111.687 178.063 110.548Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M171.901 119.419C170.711 119.182 169.481 119.322 168.367 119.822C167.7 120.136 166.977 120.298 166.246 120.298C165.516 120.298 164.793 120.136 164.126 119.822C163.337 119.457 162.481 119.278 161.619 119.295C160.757 119.313 159.91 119.527 159.134 119.924C158.691 120.17 158.198 120.3 157.697 120.303C155.675 120.303 153.991 118.159 153.641 115.332C154.046 115.024 154.39 114.635 154.653 114.187C155.839 112.179 157.676 110.89 159.739 110.89C161.802 110.89 163.62 112.152 164.804 114.145C165.159 114.748 165.655 115.243 166.246 115.584C166.837 115.924 167.502 116.098 168.175 116.088H168.228C169.827 116.083 171.222 117.439 171.901 119.419Z"
              fill="black"
            />
            <path
              d="M178.063 37.9023L174.787 40.0816L176.772 36.2876C176.21 35.8163 175.514 35.5552 174.796 35.5457H174.743C174.516 35.5503 174.288 35.5326 174.064 35.4925L172.956 36.2323L173.43 35.3242C172.645 35.0345 171.967 34.492 171.492 33.7738L169.509 35.1027L170.761 32.7063C169.602 31.2423 168.038 30.3453 166.317 30.3453C164.254 30.3453 162.417 31.6343 161.231 33.6454C160.879 34.2476 160.382 34.7411 159.79 35.0757C159.197 35.4103 158.531 35.574 157.86 35.5501H157.75C155.472 35.5501 153.627 38.2633 153.627 41.6121C153.627 44.9609 155.472 47.6741 157.75 47.6741C158.25 47.6724 158.743 47.5424 159.185 47.2953C159.96 46.8999 160.808 46.686 161.67 46.6684C162.532 46.6508 163.387 46.8299 164.176 47.1934C164.843 47.5084 165.566 47.6721 166.297 47.6741C167.028 47.676 167.751 47.516 168.42 47.2045C169.203 46.8478 170.049 46.6721 170.903 46.6893C171.756 46.7065 172.596 46.9162 173.365 47.3042C173.804 47.5451 174.292 47.6719 174.787 47.6741C177.065 47.6741 178.91 44.9609 178.91 41.6121C178.929 40.3204 178.637 39.0446 178.063 37.9023Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M171.901 46.7726C170.711 46.536 169.481 46.6763 168.367 47.1757C167.7 47.4897 166.977 47.652 166.246 47.652C165.516 47.652 164.793 47.4897 164.126 47.1757C163.337 46.8112 162.481 46.6315 161.619 46.6491C160.757 46.6667 159.91 46.8811 159.134 47.2776C158.691 47.5239 158.198 47.6539 157.697 47.6563C155.675 47.6563 153.991 45.5124 153.641 42.6863C154.046 42.3773 154.39 41.9884 154.653 41.5412C155.839 39.5324 157.676 38.2433 159.739 38.2433C161.802 38.2433 163.62 39.5058 164.804 41.4991C165.159 42.1016 165.655 42.5972 166.246 42.9376C166.837 43.278 167.502 43.4517 168.175 43.4415H168.228C169.827 43.4371 171.222 44.7926 171.901 46.7726Z"
              fill="black"
            />
            <path
              d="M42.7908 30.064L41.1579 31.1515L42.1481 29.26C41.8683 29.0236 41.5211 28.8926 41.1621 28.8879H41.1368C41.0232 28.8892 40.9097 28.8803 40.7976 28.8614L40.2455 29.229L40.4815 28.7861C40.0898 28.6418 39.7514 28.3713 39.5144 28.0131L38.5262 28.6775L39.1583 27.4837C38.8955 27.1264 38.5601 26.8352 38.1767 26.6314C37.7932 26.4275 37.3714 26.3162 36.9418 26.3055C35.9136 26.3055 34.997 26.9478 34.4134 27.9511C34.2377 28.2522 33.9891 28.4989 33.6929 28.6659C33.3967 28.8329 33.0637 28.9141 32.7278 28.9012H32.673C31.5374 28.9012 30.6166 30.2567 30.6166 31.9267C30.6166 33.5967 31.5374 34.9499 32.673 34.9499C32.9228 34.9491 33.1686 34.8845 33.3894 34.7616C33.7762 34.5637 34.1992 34.4567 34.6293 34.4479C35.0594 34.4391 35.4861 34.5288 35.8799 34.7107C36.2115 34.8657 36.5704 34.9457 36.9334 34.9457C37.2963 34.9457 37.6552 34.8657 37.9868 34.7107C38.3775 34.5326 38.8 34.4449 39.2258 34.4537C39.6515 34.4625 40.0704 34.5675 40.4541 34.7616C40.673 34.8807 40.9156 34.9437 41.1621 34.9455C42.2977 34.9455 43.2185 33.5922 43.2185 31.9222C43.2265 31.2749 43.0794 30.6359 42.7908 30.064Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M39.7167 34.4892C39.1229 34.3697 38.5086 34.4399 37.9531 34.6908C37.6212 34.8448 37.2625 34.9248 36.8997 34.9255C36.5327 34.9254 36.17 34.8431 35.8356 34.6841C35.4416 34.503 35.0148 34.4139 34.5848 34.4231C34.1548 34.4322 33.7319 34.5394 33.3452 34.7373C33.1251 34.8601 32.88 34.9247 32.6309 34.9255C31.6216 34.9255 30.781 33.8558 30.6061 32.4471C30.8074 32.2919 30.979 32.098 31.1118 31.8757C31.7017 30.8724 32.6183 30.2301 33.6401 30.2301C34.662 30.2301 35.5744 30.8658 36.1685 31.8558C36.3456 32.1568 36.5941 32.4043 36.8896 32.574C37.1851 32.7437 37.5175 32.8297 37.8541 32.8237H37.8815C38.6758 32.8237 39.3775 33.5014 39.7167 34.4892Z"
              fill="black"
            />
            <path
              d="M188.173 138.369L186.54 139.456L187.53 137.565C187.25 137.328 186.903 137.197 186.544 137.193H186.519C186.405 137.194 186.292 137.185 186.18 137.166L185.628 137.534L185.864 137.091C185.472 136.947 185.133 136.676 184.896 136.318L183.908 136.982L184.54 135.789C184.278 135.431 183.942 135.14 183.559 134.936C183.175 134.732 182.753 134.621 182.324 134.61C181.296 134.61 180.379 135.253 179.795 136.256C179.62 136.557 179.371 136.804 179.075 136.971C178.779 137.138 178.446 137.219 178.11 137.206H178.055C176.919 137.206 175.999 138.562 175.999 140.232C175.999 141.901 176.919 143.255 178.055 143.255C178.305 143.254 178.551 143.189 178.771 143.066C179.158 142.869 179.581 142.762 180.011 142.753C180.441 142.744 180.868 142.834 181.262 143.016C181.594 143.17 181.952 143.251 182.315 143.251C182.678 143.251 183.037 143.17 183.369 143.016C183.76 142.837 184.182 142.75 184.608 142.759C185.034 142.767 185.452 142.872 185.836 143.066C186.055 143.186 186.298 143.249 186.544 143.25C187.68 143.25 188.601 141.897 188.601 140.227C188.609 139.58 188.461 138.941 188.173 138.369Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M185.099 142.794C184.505 142.675 183.891 142.745 183.335 142.996C183.003 143.15 182.645 143.23 182.282 143.23C181.915 143.23 181.552 143.148 181.218 142.989C180.824 142.808 180.397 142.719 179.967 142.728C179.537 142.737 179.114 142.844 178.727 143.042C178.507 143.165 178.262 143.23 178.013 143.23C177.004 143.23 176.163 142.161 175.988 140.752C176.189 140.597 176.361 140.403 176.494 140.181C177.084 139.177 178 138.535 179.022 138.535C180.044 138.535 180.956 139.171 181.551 140.161C181.728 140.462 181.976 140.709 182.272 140.879C182.567 141.049 182.899 141.135 183.236 141.129H183.264C184.058 141.129 184.76 141.806 185.099 142.794Z"
              fill="black"
            />
            <path
              d="M36.4698 144.127L34.8369 145.215L35.8272 143.323C35.5473 143.087 35.2001 142.956 34.8411 142.951H34.8158C34.7022 142.953 34.5888 142.944 34.4766 142.925L33.9246 143.292L34.1606 142.849C33.7688 142.705 33.4304 142.435 33.1935 142.076L32.2053 142.741L32.8374 141.547C32.5745 141.19 32.2392 140.899 31.8557 140.695C31.4723 140.491 31.0504 140.38 30.6208 140.369C29.5926 140.369 28.6761 141.011 28.0924 142.014C27.9168 142.316 27.6681 142.562 27.372 142.729C27.0758 142.896 26.7427 142.977 26.4069 142.965H26.3521C25.2164 142.965 24.2957 144.32 24.2957 145.99C24.2957 147.66 25.2164 149.013 26.3521 149.013C26.6018 149.012 26.8477 148.948 27.0684 148.825C27.4552 148.627 27.8783 148.52 28.3083 148.511C28.7384 148.502 29.1651 148.592 29.5589 148.774C29.8906 148.929 30.2495 149.009 30.6124 149.009C30.9753 149.009 31.3342 148.929 31.6659 148.774C32.0565 148.596 32.4791 148.508 32.9048 148.517C33.3305 148.526 33.7495 148.631 34.1332 148.825C34.3521 148.944 34.5946 149.007 34.8411 149.009C35.9768 149.009 36.8975 147.656 36.8975 145.986C36.9055 145.338 36.7584 144.699 36.4698 144.127Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M33.3957 148.553C32.8019 148.433 32.1877 148.503 31.6322 148.754C31.3003 148.908 30.9415 148.988 30.5787 148.989C30.2117 148.989 29.849 148.907 29.5147 148.748C29.1206 148.566 28.6939 148.477 28.2639 148.486C27.8339 148.496 27.4109 148.603 27.0242 148.801C26.8042 148.923 26.559 148.988 26.3099 148.989C25.3007 148.989 24.46 147.919 24.2851 146.511C24.4864 146.355 24.658 146.161 24.7908 145.939C25.3808 144.936 26.2973 144.294 27.3192 144.294C28.3411 144.294 29.2534 144.929 29.8476 145.919C30.0246 146.22 30.2731 146.468 30.5686 146.637C30.8641 146.807 31.1965 146.893 31.5332 146.887H31.5605C32.3549 146.887 33.0565 147.565 33.3957 148.553Z"
              fill="black"
            />
            <path
              d="M111.904 7.56036L108.628 9.73975L110.613 5.94576C110.051 5.47439 109.355 5.21332 108.636 5.20379H108.584C108.356 5.20846 108.129 5.19067 107.905 5.15064L106.797 5.89039L107.271 4.98231C106.486 4.69262 105.807 4.15012 105.332 3.43193L103.35 4.76083L104.601 2.36439C103.442 0.900392 101.879 0.00338745 100.158 0.00338745C98.0949 0.00338745 96.2577 1.29241 95.0714 3.30347C94.7197 3.9057 94.2224 4.39922 93.6302 4.7338C93.0381 5.06838 92.3721 5.23207 91.7002 5.20822H91.5907C89.313 5.20822 87.4673 7.92138 87.4673 11.2702C87.4673 14.619 89.313 17.3322 91.5907 17.3322C92.0912 17.3305 92.5837 17.2005 93.0255 16.9534C93.801 16.558 94.6489 16.3441 95.5106 16.3265C96.3724 16.3089 97.2275 16.488 98.017 16.8515C98.6839 17.1665 99.4065 17.3303 100.138 17.3322C100.869 17.3341 101.592 17.1741 102.26 16.8626C103.043 16.5059 103.89 16.3302 104.743 16.3474C105.596 16.3646 106.436 16.5743 107.206 16.9623C107.645 17.2032 108.132 17.33 108.628 17.3322C110.905 17.3322 112.751 14.619 112.751 11.2702C112.769 9.97848 112.478 8.70272 111.904 7.56036Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M105.741 16.4296C104.551 16.1929 103.322 16.3332 102.208 16.8327C101.541 17.1466 100.818 17.3089 100.087 17.3089C99.3562 17.3089 98.6335 17.1466 97.9664 16.8327C97.1772 16.4681 96.3219 16.2884 95.46 16.306C94.5981 16.3236 93.7501 16.5381 92.975 16.9345C92.5321 17.1809 92.0391 17.3108 91.538 17.3133C89.5153 17.3133 87.8318 15.1693 87.4821 12.3432C87.8868 12.0342 88.2303 11.6453 88.4934 11.1981C89.6796 9.1893 91.5169 7.90027 93.5797 7.90027C95.6424 7.90027 97.4607 9.16272 98.6449 11.1561C98.9992 11.7585 99.496 12.2541 100.087 12.5945C100.678 12.9349 101.342 13.1086 102.016 13.0985H102.069C103.668 13.094 105.063 14.4495 105.741 16.4296Z"
              fill="black"
            />
            <path
              d="M223.57 45.5678L221.937 46.6552L222.928 44.7638C222.648 44.5273 222.301 44.3963 221.941 44.3917H221.916C221.803 44.3929 221.689 44.384 221.577 44.3651L221.025 44.7328L221.261 44.2898C220.869 44.1456 220.531 43.875 220.294 43.5168L219.306 44.1813L219.938 42.9875C219.675 42.6302 219.34 42.339 218.956 42.1351C218.573 41.9313 218.151 41.8199 217.721 41.8092C216.693 41.8092 215.776 42.4515 215.193 43.4548C215.017 43.756 214.768 44.0027 214.472 44.1697C214.176 44.3366 213.843 44.4178 213.507 44.405H213.452C212.317 44.405 211.396 45.7605 211.396 47.4304C211.396 49.1004 212.317 50.4537 213.452 50.4537C213.702 50.4528 213.948 50.3882 214.169 50.2654C214.556 50.0675 214.979 49.9604 215.409 49.9516C215.839 49.9428 216.265 50.0325 216.659 50.2145C216.991 50.3694 217.35 50.4495 217.713 50.4495C218.076 50.4495 218.435 50.3694 218.766 50.2145C219.157 50.0363 219.579 49.9487 220.005 49.9575C220.431 49.9663 220.85 50.0713 221.234 50.2654C221.452 50.3845 221.695 50.4475 221.941 50.4492C223.077 50.4492 223.998 49.096 223.998 47.426C224.006 46.7787 223.859 46.1396 223.57 45.5678Z"
              fill="#F2F2F2"
            />
            <path
              opacity="0.03"
              d="M220.496 49.993C219.902 49.8734 219.288 49.9436 218.732 50.1945C218.401 50.3486 218.042 50.4285 217.679 50.4293C217.316 50.4276 216.957 50.3454 216.626 50.1879C216.231 50.0067 215.805 49.9177 215.375 49.9268C214.945 49.936 214.522 50.0432 214.135 50.241C213.915 50.3638 213.67 50.4285 213.421 50.4293C212.412 50.4293 211.571 49.3596 211.396 47.9509C211.597 47.7957 211.769 47.6018 211.902 47.3795C212.492 46.3762 213.408 45.7339 214.43 45.7339C215.452 45.7339 216.364 46.3695 216.958 47.3596C217.135 47.659 217.381 47.9055 217.675 48.075C217.968 48.2446 218.299 48.3316 218.633 48.3274H218.661C219.455 48.3274 220.157 49.0052 220.496 49.993Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="224" height="149" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Airplane>
      <Start>
        <h4>START</h4>
      </Start>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #0300a0 0%, #ffffff 100%);
  position: relative;
  width: 1440px;
  height: 1024px;
`;

const NavStyle = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    font-family: "Exo 2", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }

  /* identical to box height */
  text-align: center;

  color: #000000;
`;

const GameDisplay = styled.div`
  position: absolute;
  width: 1356px;
  height: 700px;
  left: 33px;
  top: 166px;

  background: #c4c4c4;
`;

const Airplane = styled.i`
  position: absolute;
  width: 224px;
  height: 149px;
  left: 247px;
  top: 866px;
`;

const Start = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;

  position: absolute;
  width: 202px;
  height: 92px;
  left: 33px;
  top: 886px;

  background: #0300a0;
  h4 {
    position: static;
    width: 182px;
    height: 72px;
    left: 10px;
    top: 10px;

    font-family: Exo 2;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 72px;

    /* identical to box height */
    text-align: center;

    color: #44a142;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
  }
`;

const Explorer = styled.i`
  position: absolute;
  width: 244px;
  height: 72px;
  left: 13px;
  top: 74px;

  font-family: Exo 2;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;

  /* identical to box height */
  text-align: center;
`;

export default Main;
