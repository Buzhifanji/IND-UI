import { ReactiveController, ReactiveControllerHost } from "lit";

const defaultName = "[default]";

export class HasSlotController implements ReactiveController {
  host: ReactiveControllerHost & Element;
  slotNames: string[] = [];

  constructor(host: ReactiveControllerHost & Element, ...slotNames: string[]) {
    (this.host = host).addController(this);
    this.slotNames = slotNames;
    this.onSlotChange = this.onSlotChange.bind(this);
  }

  private hasDefaultSlot() {
    return Array.from(this.host.childNodes).some((node) => {
      const { nodeType, textContent, TEXT_NODE, ELEMENT_NODE } = node;
      if (nodeType === TEXT_NODE && textContent!.trim() !== "") {
        return true;
      }

      if (nodeType === ELEMENT_NODE) {
        const el = node as HTMLElement;
        const tagName = el.tagName.toLowerCase();

        // Ignore visually hidden elements since they aren't rendered
        if (tagName === "ind-visually-hidden") {
          return false;
        }

        // If it doesn't have a slot attribute, it's part of the default slot
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }

      return false;
    });
  }

  private hasNamedSlot(name: string) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  has(slotName: string) {
    return slotName === defaultName
      ? this.hasDefaultSlot()
      : this.hasNamedSlot(slotName);
  }

  hostConnected() {
    this.host.shadowRoot!.addEventListener("slotchange", this.onSlotChange);
  }

  hostDisconnected() {
    this.host.shadowRoot!.removeEventListener("slotchange", this.onSlotChange);
  }

  onSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;

    if (
      (this.slotNames.includes(defaultName) && !slot.name) ||
      (slot.name && this.slotNames.includes(slot.name))
    ) {
      this.host.requestUpdate();
    }
  }
}
