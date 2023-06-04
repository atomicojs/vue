import { CustomElementStatic, GetProps } from "@atomico/wrapper/types";
export declare const wrapper: <Base extends CustomElementStatic>(tagName: string, component: Base, options?: ElementDefinitionOptions) => import("vue").DefineComponent<GetProps<Base>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<GetProps<Base> extends infer T ? T extends GetProps<Base> ? T extends import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}> ? import("vue").ExtractPropTypes<T> : T : never : never>, import("vue").ExtractDefaultPropTypes<GetProps<Base>>, {}>;
