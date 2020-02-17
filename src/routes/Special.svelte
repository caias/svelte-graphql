<script>
  import { gql } from 'apollo-boost';
  import { getClient, query } from 'svelte-apollo';
  import Loading from '~/components/common/Loading';
  import CardList from '~/components/common/CardList';
  import Checkbox from '~/components/common/PushCheckbox';

  const DATA = gql`
    {
      getSpecials{
        duration{
          date
          time
        }
        link{
          type
          value
          imgUrl
          imgAlt
          imgWidth
          imgHeight
        }
        pushAgree
      }
    }
  `;

  const client = getClient();
  export const datas = query(client, { query: DATA });

</script>

{#await $datas}
<Loading />
  {:then result}
  <CardList list={result.data.getSpecials} let:item={item} let:index={index}>
    <a href="{item.link.value}" class="link">
      <img src="{item.link.imgUrl}" class="img" alt="{item.link.imgAlt}">
      <div class="title">
        <b>{item.link.imgAlt}</b>
        <span class="date">({item.duration.date})</span>
      </div>
      <div class="notic">
        <span class="text">특가 알림을 받겠습니다.</span>
        <Checkbox agree={item.pushAgree} {index} />
      </div>
    </a>
  </CardList>
  {:catch error}
  <p>ERROR : {error}</p>
{/await}

<style lang="scss">

  @import '../scss/variables.scss';
  .link {
    display: block;
  }
  .img {
    display: block;
    max-width: 100%;
  }
  .title {
    padding: rem(15px);
    color: color(black, 2);
  }
  .notic {
    padding: rem(10px) rem(15px);
    border-top: 1px solid color(white, 2);
    position: relative;
  }
  .text {
    font-size: rem(12px);
    color: color(black, 3);
  }
</style>
