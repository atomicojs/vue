import { CustomElementStatic } from "@atomico/wrapper/types";
import { h, defineComponent } from "vue";

export const wrapper = <Base extends CustomElementStatic>(
    tagName: string,
    component: Base,
    options?: ElementDefinitionOptions
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
            const nextProps = { ...props };
            if (options) nextProps.is = tagName;
            return h(options?.extends || tagName, nextProps, this.$slots);
        },
    });
