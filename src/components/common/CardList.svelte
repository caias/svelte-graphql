<script>
  export let list;
</script>

<ul>
  {#each list as item, index}
    <li>
      <slot {item} {index}>
        <span>컨텐츠가 없습니다.</span>
      </slot>
    </li>
  {/each}
</ul>

<style lang="scss">
  @import '../../scss/variables.scss';
  ul {
    padding: rem(15px);
    li {
      overflow: hidden;
      background: $white;
      border-radius: rem(2px);
      box-shadow: 0 rem(1px) rem(2px) rgba(0, 0, 0, .07);
      ~ li{
        margin-top: rem(30px);
      }
    }
  }
</style>
