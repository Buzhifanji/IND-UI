import { css } from "lit";

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--i-border-width, 1px);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    cursor: inherit;
    transition: color 0.3s var(--i-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      background-color 0.3s var(--i-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      opacity 0.3s var(--i-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      border-color 0.3s var(--i-bezier, cubic-bezier(0.4, 0, 0.2, 1));
  }
  .button::-moz-focus-inner {
    border: 0;
  }

  /** default  */
  .ind-btn-standard.ind-btn-default {
    color: var(--i-color-neutral, #333);
    background-color: var(--i-background-color-neutral, #fff);
    border-color: var(--i-border-color-neutral, rgba(0, 0, 0, 0.2));
    box-shadow: 0 2px 6px var(--i-box-shadow-color-neutral, #e1e5e8);
  }
  .ind-btn-standard.ind-btn-default:hover:not(.ind-btn-disabled) {
    border-color: transparent;
    transform: translateY(-0.25px);
  }
  .ind-btn-standard.ind-btn-default:active:not(.ind-btn-disabled) {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0em);
  }
  .ind-btn-standard.ind-btn-default:focus:not(.ind-btn-disabled) {
    border-color: rgba(0, 0, 0, 0.25);
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px;
  }

  /** primary */
  .ind-btn-standard.ind-btn-primary {
    color: var(--i-color-primary, #fff);
    background-color: var(--i-background-color-primary, #6777ef);
    border-color: var(--i-border-color-primary, #6777ef);
    box-shadow: 0 2px 6px var(--i-box-shadow-color-primary, #acb5f6);
  }

  /** success */
  .ind-btn-standard.ind-btn-success {
    color: var(--i-color-success, #fff);
    background-color: var(--i-background-color-success, #63ed7a);
    border-color: var(--i-border-color-success, #63ed7a);
    box-shadow: 0 2px 6px var(--i-box-shadow-color-success, #a8f5b4);
  }

  /** warning */
  .ind-btn-standard.ind-btn-warning {
    color: var(--i-color-warning, #fff);
    background-color: var(--i-background-color-warning, #ffc107);
    border-color: var(--i-border-color-warning, #ffc107);
    box-shadow: 0 2px 6px var(--i-box-shadow-color-warning, #ffc473);
  }

  /** danger */
  .ind-btn-standard.ind-btn-danger {
    color: var(--i-color-danger, #fff);
    background-color: var(--i-background-color-danger, #e91e63);
    border-color: var(--i-border-color-danger, #e91e63);
    box-shadow: 0 2px 6px var(--i-box-shadow-color-danger, #fd9b96);
  }

  .ind-btn-standard.ind-btn-primary:hover:not(.ind-btn-disabled) {
    border-color: transparent;
    transform: translateY(-0.25px);
  }
  .ind-btn-standard.ind-btn-primary:active:not(.ind-btn-disabled) {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0em);
  }
  .ind-btn-standard.ind-btn-primary:focus:not(.ind-btn-disabled) {
    border-color: rgba(0, 0, 0, 0.25);
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px;
  }

  /** size:small */
  .ind-btn-small {
    font-size: var(--i-font-size-samll, 14px);
    height: var(--i-height-small, 30px);
    line-height: calc(
      var(--i-height-small, 30px) - var(--i-border-width, 1px) * 2
    );
    border-radius: var(--i-border-radius-small, 0.2em);
  }
  .ind-btn-has-label.ind-btn-small .ind-btn_label {
    padding: 0 var(--i-spacing-small, 12px);
  }

  /** size:medium */
  .ind-btn-medium {
    font-size: var(--i-font-size-medium, 16px);
    height: var(--i-height-medium, 34px);
    line-height: calc(
      var(--i-height-medium, 34px) - var(--i-border-width, 1px) * 2
    );
    border-radius: var(--i-border-radius-medium, 0.25em);
  }
  .ind-btn-has-label.ind-btn-medium .ind-btn_label {
    padding: 0 var(--i-spacing-medium, 16px);
  }
  /** size:large */
  .ind-btn-large {
    font-size: var(--i-font-size-large, 18px);
    height: var(--i-height-large, 40px);
    line-height: calc(
      var(--i-height-large, 40px) - var(--i-border-width, 1px) * 2
    );
    border-radius: var(--i-border-radius-large, 0.3em);
  }
  .ind-btn-has-label.ind-btn-large .ind-btn_label {
    padding: 0 var(--i-spacing-large, 20px);
  }

  /** disabled */
  .ind-btn-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /** ghost */
  .ind-btn-ghost {
    background: none;
    border: solid 1px;
  }
  .ind-btn-ghost.ind-btn-default {
    color: var(--i-color-ghost, #333);
    border-color: var(--sl-color-ghost-border, rgba(0, 0, 0, 0.2));
  }
  .ind-btn-ghost.ind-btn-primary {
    color: var(--i-color-primary, #6777ef);
    border-color: var(--i-border-color-primary, #6777ef);
  }
  .ind-btn-ghost.ind-btn-success {
    color: var(--i-color-success, #63ed7a);
    border-color: var(--i-border-color-success, #63ed7a);
  }
  .ind-btn-ghost.ind-btn-warning {
    color: var(--i-color-warning, #ffc107);
    border-color: var(--i-border-color-warning, #ffc107);
  }
  .ind-btn-ghost.ind-btn-danger {
    color: var(--i-color-danger, #e91e63);
    border-color: var(--i-border-color-danger, #e91e63);
  }
`;
