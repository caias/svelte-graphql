<script>
  import { link } from 'svelte-spa-router';
  // import active from 'svelte-spa-router/active';
</script>

<header>
  <h1 class="logo">
    <img src="https://view01.wemep.co.kr/wmp-main/50/201808/08/mml_3wywtfnsm4y1.png" alt="특가대표! 위메프">
  </h1>
  <!-- 추후 메뉴가 추가될 경우 메뉴 생성 -->
  <a href="/" use:link>Home</a>
  <a href="/special" use:link>Special</a>
</header>

<style lang="scss">

  @import '../scss/variables.scss';
  header {
    @include position(fixed, 0, 0, null, 0);
    border-bottom: 1px solid #ddd;
    background-color: rgba(255, 255, 255, .8);
    height: $header-height;
  }

  .logo {
    @include size(rem(64px), rem(45px));
    float: left;
  }

  .logo ~ a {
    float: left;
  }

  .logo img {
    max-width: 100%;
  }
</style>
