import { auto } from "@atomico/vue";
import { c, html } from "atomico";
import type { Props } from "atomico";

function component({ value }: Props<typeof component>) {
  return html`<host shadowDom><h1>welcome ${value}</h1></host>`;
}

component.props = {
  value: Number,
};

const Component = c(component);

customElements.define("my-component", Component);

export const ComponentVue = auto(Component);
