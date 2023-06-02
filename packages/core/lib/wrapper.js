import { defineComponent, h } from 'vue';

const wrapper = (tagName, component, options) => defineComponent({
  props: Object.entries(component.props).reduce(
    (props, [index, value]) => ({
      ...props,
      [index]: value?.type || value
    }),
    {}
  ),
  render(props) {
    const nextProps = { ...props };
    if (options)
      nextProps.is = tagName;
    return h(options?.extends || tagName, nextProps, this.$slots);
  }
});

export { wrapper };
