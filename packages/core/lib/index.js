import { getDefinition } from '@atomico/wrapper';
import { wrapper } from './wrapper.js';
import 'vue';

function auto(base) {
  const [tagName, options] = getDefinition(base, true);
  return wrapper(tagName, base, options);
}

export { auto };
