import { getDefinition } from "@atomico/wrapper";
import { CustomElementStatic } from "@atomico/wrapper/types";
import { wrapper } from "./wrapper";

export function auto<Base extends CustomElementStatic>(base: Base) {
    const [tagName, options] = getDefinition(base, true);
    return wrapper(tagName, base, options);
}
