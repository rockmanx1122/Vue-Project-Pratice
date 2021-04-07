<script>
export default {
  props: {
    title: {
      type: String,
      default:''
    },
  },
  render(h, content) {
    const vnodes = [];
    if (title)
     vnodes.push(<span slot="title">{{ title }}</span>);
  },
};
</script>

<style>
</style>