import { css } from "lit";

export default css`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .i-icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
