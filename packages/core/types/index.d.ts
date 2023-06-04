import { CustomElementStatic } from "@atomico/wrapper/types";
export declare function auto<Base extends CustomElementStatic>(
    base: Base
): import("vue").DefineComponent<
    import("@atomico/wrapper/types").GetProps<Base>,
    {},
    {},
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {},
    string,
    import("vue").VNodeProps &
        import("vue").AllowedComponentProps &
        import("vue").ComponentCustomProps,
    Readonly<
        import("@atomico/wrapper/types").GetProps<Base> extends infer T
            ? T extends import("@atomico/wrapper/types").GetProps<Base>
                ? T extends import("vue").ComponentPropsOptions<{
                      [x: string]: unknown;
                  }>
                    ? import("vue").ExtractPropTypes<T>
                    : T
                : never
            : never
    >,
    import("vue").ExtractDefaultPropTypes<
        import("@atomico/wrapper/types").GetProps<Base>
    >,
    {}
>;
