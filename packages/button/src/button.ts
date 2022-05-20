import { HasSlotController } from "@ind/controllers";
import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import styles from "./button.css";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("i-button")
export class IButton extends LitElement {
  static styles = styles;

  private readonly hasSlotController = new HasSlotController(
    this,
    "[default]",
    "prefix",
    "suffix"
  );

  /** button 原生自带tyep属性*/
  @property() type: "button" | "submit" | "reset" | "menu" = "button";

  /** 按钮变体类型 */
  @property({ reflect: true }) variant:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "text" = "default";

  /** 设置了属性的时候，就会 buttun 会变渲染成 a 标签 */
  @property() href?: string;

  /** 是否为透明 */
  @property({ type: Boolean, reflect: true }) ghost = false;

  /** 是否为disabled */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** 是否为 loading 效果*/
  @property({ type: Boolean, reflect: true }) loading = false;

  /** 按钮的尺寸大小 */
  @property({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  private onClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  }

  protected render() {
    const classes = {
      "ind-btn-default": this.variant === "default",
      "ind-btn-primary": this.variant === "primary",
      "ind-btn-success": this.variant === "success",
      "ind-btn-warning": this.variant === "warning",
      "ind-btn-danger": this.variant === "danger",
      "ind-btn-text": this.variant === "text",
      "ind-btn-small": this.size === "small",
      "ind-btn-medium": this.size === "medium",
      "ind-btn-large": this.size === "large",
      "ind-btn-disabled": this.disabled,
      "ind-btn-standard": !this.ghost,
      "ind-btn-ghost": this.ghost,
      "ind-btn-has-label": this.hasSlotController.has("[default]"),
      "ind-btn-has-prefix": this.hasSlotController.has("prefix"),
      "ind-btn-has-suffix": this.hasSlotController.has("suffix"),
    };
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;

    return html`
      <${tag}
        part="base"
        class=${classMap(classes)}
        type=${ifDefined(isLink ? undefined : this.type)}
        role=${ifDefined(isLink ? undefined : "button")}
        @click=${this.onClick}
      >
        <span part="prefix" class="ind-btn_prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="ind-btn_label">
          <slot></slot>
        </span>
        <span part="suffix" class="ind-btn_suffix">
          <slot name="suffix"></slot>
        </span>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "i-button": IButton;
  }
}
