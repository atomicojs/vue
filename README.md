# @atomico/vue

Wrapper and utilities to integrate Atomico in vue

## Wrapper

@atomico/vue allows you to create a wrapper for a webcomponent created with Atomico.

```js
import { MyWebcomponentWithAtomico } from "./my-webcomponent-with-atomico";
import { auto } from "@atomico/vue";

export const VueComponent = MyWebcomponentWithAtomico(auto);
```

## petite (coming soon)

```ts
import { html } from "@atomico/vue";

function component() {
    return html`
        {{count}}
        <button @click="count++">inc</button>
    `;
}

component.props = {
    count: Number,
};
```
