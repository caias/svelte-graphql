<script>
  import ApolloClient from 'apollo-boost';
  import { setClient } from 'svelte-apollo';
  import Router from 'svelte-spa-router';
  import routes from '~/routes';
  import Header from '~/components/Header.svelte';

  const client = new ApolloClient({
    uri: 'http://prototype-dev.wemakeprice.com:8000/graphql',
  });

  setClient(client);
</script>

<Header />
<section class="contents">
  <Router {routes}/>
</section>

<style lang="scss">
  @import './scss/global.scss';
  .contents {
    padding-top: $header-height;
  }
</style>
