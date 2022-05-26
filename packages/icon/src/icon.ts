import { watch } from "@ind/decorators";
import { emit } from "@ind/utils";
import { LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { html } from "lit/static-html.js";
import styles from "./icon.css";
import { getIconLibrary } from "./library";
import { requestIcon } from "./request";

const parser = new DOMParser();

/**
 *
 */
@customElement("i-icon")
export class IIcon extends LitElement {
  static styles = styles;

  @state() private svg = "";

  /** 用 `registerIconLibrary` 方法注册的icon库名称*/
  @property() library: string = "default";

  /** svg 文件对应的文件名 */
  @property({ reflect: true }) name?: string;

  @watch("name")
  @watch("library")
  async setIcon() {
    const lib = getIconLibrary(this.library);
    const url = this.getUrl();
    if (url) {
      try {
        const file = await requestIcon(url);
        if (file.ok) {
          const doc = parser.parseFromString(file.svg, "text/html");
          const svgEl = doc.body.querySelector("svg");
          if (svgEl) {
            lib?.handleSvg?.(svgEl);
            this.svg = svgEl.outerHTML;
            emit(this, "i-load");
          } else {
            this.svg = "";
            emit(this, "i-error");
          }
        } else {
          emit(this, "i-error");
        }
      } catch (error) {
        emit(this, "i-error");
      }
    }
  }

  private getUrl() {
    const lib = getIconLibrary(this.library);
    if (this.name && lib) {
      return lib.handleUrl(this.name);
    }

    return "";
  }

  protected render() {
    return html`
      <i part="base" class="i-icon">
        ${unsafeSVG(this.svg)}
        <slot></slot>
      </i>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "i-icon": IIcon;
  }
}
