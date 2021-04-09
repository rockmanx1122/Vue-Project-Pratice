<script>
export default {
  name: "navibaritem",
  functional: true,
  props: {
    title: {
      type: String,
      default: "222222",
    },
  },
  render(h, context) {
    const { title } = context.props;
    const vnodes = [];
    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>

<style lang="scss" scoped>


</style>
