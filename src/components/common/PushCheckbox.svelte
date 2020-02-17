<script>
  export let agree;
  export let index;
</script>

<input type="checkbox" name="push-agree" bind:checked={agree} id="special{index}" >
<label for="special{index}"></label>

<style lang="scss">
  @import '../../scss/variables.scss';

  $switch-active-color: $red;
  $switch-button-size: 24px;
  $switch-space-gap: 4px;
  $switch-width: ($switch-button-size * 2) + ($switch-space-gap * 2);
  $switch-height: $switch-button-size + ($switch-space-gap * 2);
  $switch-radius: $switch-height / 2;
  $switch-left-value: $switch-button-size + $switch-space-gap;

  input[type="checkbox"]{
    @include absolute;
    @include size(0);
    opacity: 0;
  }

  label{
    @include size(rem($switch-width), rem($switch-height));
    background: #ccc;
    border-radius: rem($switch-radius);
    position: relative;
    vertical-align: middle;
    transition: background 0.25s;
    &:before{
      content:'OFF';
      @include size(rem($switch-button-size));
      @include poslt(rem($switch-space-gap), rem($switch-space-gap));
      color: $black;
      background: $white;
      border-radius: 50%;
      transition: left 0.25s;
      font-size: rem(11px);
      line-height: rem($switch-button-size);
      text-align: center;
    }
  }

  input[type="checkbox"]:checked{
    + label {
      background: $switch-active-color;
      &:before{
        content:'ON';
        color: $switch-active-color;
        left: rem($switch-left-value);
        transition: left 0.25s;
      }
    }
  }
</style>
