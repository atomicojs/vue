import { Props } from "atomico";
import { AtomicoStatic } from "atomico/types/dom";
import { h, defineComponent } from "vue";

export const wrapper = <
    Base extends CustomElementConstructor & AtomicoStatic<any>
>(
    tagName: string,
    component: Base
) =>
    defineComponent<Props<Base>>({
        props: Object.entries(component.props).reduce(
            (props, [index, value]) => ({
                ...props,
                [index]: (value as any)?.type || value,
            }),
            {}
        ) as any,
        render(props: Props<Base>) {
            return h(tagName, { ...props }, this.$slots);
        },
    });
