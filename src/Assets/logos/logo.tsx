import { SvgSize, SvgProps } from './types.ts';

export const LogoSizes: SvgSize = {
  small: 100,
  medium: 150,
  large: 200,
};

export default function Logo({ size }: SvgProps) {
  return (
    <svg
      width={LogoSizes[size]}
      height={LogoSizes[size]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.71512 1.14034L3.72704 4.62051C2.34894 5.42143 1.5 6.9016 1.5 8.50346V15.4993C1.5 17.1011 2.34894 18.5813 3.72704 19.3822L9.74566 22.8802C11.1238 23.6811 12.8216 23.6811 14.1997 22.8802L17.9459 20.7029L9.75027 15.8892C8.38213 15.0856 7.54089 13.6111 7.54089 12.0166V5.01229C7.54089 3.30819 8.44521 1.92043 9.71778 1.15892C9.75216 1.13835 9.7439 1.12361 9.71512 1.14034Z"
        fill="url(#paint0_linear_136_134)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.7547 19.4263L9.746 22.9008C11.1248 23.7005 12.8241 23.6997 14.2037 22.8988L20.2287 19.4008C21.6083 18.5999 22.4586 17.1205 22.4594 15.52L22.4626 8.52977C22.4633 6.9292 21.6144 5.45062 20.2355 4.65098L16.4874 2.47726L16.4394 12.0212C16.4314 13.6144 15.5821 15.0843 14.2089 15.8816L8.17649 19.3837C6.70885 20.2358 5.0615 20.1421 3.76938 19.4147C3.73447 19.395 3.72591 19.4096 3.7547 19.4263Z"
        fill="url(#paint1_linear_136_134)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 15.4348L22.4968 8.48004C22.496 6.87947 21.6457 5.40009 20.2662 4.59917L14.2411 1.10125C12.8615 0.300326 11.1623 0.299534 9.78343 1.09917L3.76159 4.59147C2.38275 5.39111 1.53381 6.86969 1.53455 8.47026L1.53655 12.8212L9.78013 8.09095C11.1563 7.30131 12.8468 7.306 14.2201 8.10325L20.2524 11.6054C21.7201 12.4575 22.4631 13.9388 22.4827 15.4278C22.4832 15.468 22.5 15.4682 22.5 15.4348Z"
        fill="url(#paint2_linear_136_134)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.71512 1.14034L3.72704 4.62051C2.34894 5.42143 1.5 6.90161 1.5 8.50346V15.4993C1.5 17.1011 2.34894 18.5813 3.72704 19.3822L9.74566 22.8802C11.1238 23.6811 12.8216 23.6811 14.1997 22.8802L17.9459 20.7029L9.75027 15.8892C8.38213 15.0857 7.54089 13.6111 7.54089 12.0166V5.01229C7.54089 3.30819 8.44521 1.92043 9.71778 1.15892C9.75216 1.13835 9.7439 1.12361 9.71512 1.14034Z"
        fill="url(#paint3_linear_136_134)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_136_134"
          x1="9.72296"
          y1="1.13309"
          x2="9.72296"
          y2="23.4808"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AD7EE1" />
          <stop offset="1" stopColor="#2A64BB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_136_134"
          x1="14.1677"
          y1="25.1569"
          x2="23.7573"
          y2="9.29227"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4B4FF" />
          <stop offset="0.0530926" stopColor="#CC94ED" />
          <stop offset="0.486653" stopColor="#8359A8" />
          <stop offset="0.723512" stopColor="#6C389D" />
          <stop offset="1" stopColor="#5D4081" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_136_134"
          x1="22.2795"
          y1="3.54663"
          x2="3.789"
          y2="3.54663"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AEAFE" />
          <stop offset="0.0520651" stopColor="#37D1E9" />
          <stop offset="0.791032" stopColor="#1B5A8C" />
          <stop offset="1" stopColor="#2C5491" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_136_134"
          x1="4.85577"
          y1="4.32882"
          x2="8.31433"
          y2="18.5779"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AD7EE1" />
          <stop offset="0.640625" stopColor="#636FCB" />
          <stop offset="1" stopColor="#2A64BB" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
