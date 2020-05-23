export default html`
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 40 40"
>
  <defs>
    <style>
      .a, .b, .c {
        fill: none;
        stroke: #231f20;
        stroke-width: 2px;
      }
      .a {
        stroke-miterlimit: 10;
      }
      .b, .c {
        stroke-linejoin: round;
      }
      .c {
        stroke-linecap: round;
      }
    </style>
  </defs>
  <circle class="a" cx="20" cy="20" r="19"/>
  <path class="b" d="M286.14,347H265.86a2.43,2.43,0,0,1-2.4-2.82L265.6,331h20.8l2.14,13.18A2.43,2.43,0,0,1,286.14,347Z" transform="translate(-256 -316)"/>
  <path class="c" d="M281,335v-9a5,5,0,0,0-10,0v9" transform="translate(-256 -316)"/>
</svg>
`;