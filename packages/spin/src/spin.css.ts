import { css } from "lit";

export default css`
  :host {
    --spin-width: 2px;
    --spin-color: #6777ef;
    --spin-speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .int-spin {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .int-spin_main {
    fill: none;
    stroke-width: var(--spin-width);
    r: calc(0.5em - var(--spin-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;

    stroke: var(--spin-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--spin-speed) linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;
