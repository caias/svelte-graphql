<script>
  import { link } from 'svelte-spa-router';
</script>

<header>
  <h1 class="logo">
    <img src="https://dummyimage.com/128x90/fff/e55.png&text=svelte" alt="Svelte">
  </h1>
  <!-- 추후 메뉴가 추가될 경우 메뉴 생성 -->
  <a href="/" use:link>Home</a>
  <a href="/special" use:link>Events</a>
</header>

<style lang="scss">

  @import '../scss/variables.scss';
  header {
    @include position(fixed, 0, 0, null, 0);
    border-bottom: 1px solid #ddd;
    background-color: rgba(255, 255, 255, .8);
    height: $header-height;
    text-align: right;
  }

  .logo {
    @include size(rem(64px), rem(45px));
    @include poslt;
  }

  .logo ~ a {
    line-height: rem(45px);
    font-size: rem(20px);
    margin-right: rem(20px);
  }

  .logo img {
    max-width: 100%;
  }
</style>
