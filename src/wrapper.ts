import { h, defineComponent } from "vue";

export const wrapper = <
    Base extends CustomElementConstructor & { "##props": any; props: any }
>(
    tagName: string,
    component: Base
) =>
    defineComponent<Base extends { "##props": infer P } ? P : any>({
        props: Object.entries(component.props).reduce(
            (props, [index, value]) => ({
                ...props,
                [index]: (value as any)?.type || value,
            }),
            {}
        ) as any,
        render(props) {
            return h(tagName, { ...props }, this.$slots);
        },
    });
