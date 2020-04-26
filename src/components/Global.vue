<template>
  <section class="global">
    <div class="global__confirmed">
      <h2 class="global__confirmed_title">Total de casos confirmados</h2>
      <p class="global__confirmed_total">{{ formatValue(item.TotalConfirmed) }}</p>
      <p class="global__confirmed_new">+{{ formatValue(item.NewConfirmed) }}</p>
    </div>
    <div class="global__deaths">
      <h2 class="global__deaths_title">Total de mortes</h2>
      <p class="global__deaths_total">{{ formatValue(item.TotalDeaths) }}</p>
      <p class="global__deaths_new">+{{ formatValue(item.NewDeaths) }}</p>
    </div>
    <div class="global__recovered">
      <h2 class="global__recovered_title">Total de recuperados</h2>
      <p class="global__recovered_total">{{ formatValue(item.TotalRecovered) }}</p>
      <p class="global__recovered_new">+{{ formatValue(item.NewRecovered) }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Global',
  props: ['item'],
  methods: {
    formatValue(value) {
      if (value > 0) {
        const number = value.toFixed().split('.');
        number[0] = number[0].split(/(?=(?:...)*$)/).join('.');
        return number.join(',');
      }
      return 0;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/sass/mixin.scss";
@import "@/sass/variables.scss";

.global {
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;
  justify-content: space-between;
  margin-top: 34px;
  @include tablet {
    justify-content: center;
  }
  @include desktop {
    flex-wrap: initial;
    justify-content: space-between;
  }

  &__confirmed,
  &__deaths,
  &__recovered {
    display: flex;
    flex-wrap: wrap;
    @include tablet {
      justify-content: center;
      width: 48%;
    }
    @include desktop {
      width: auto;
    }
    &_title {
      font-size: 1.1em;
      text-align: left;
      width: 100%;
      @include tablet {
        text-align: center;
      }
    }
    &_total {
      font-size: 2.8em;
      margin: 0;
    }
    &_new {
      align-items: flex-end;
      display: flex;
      color: $color-yellow;
      font-size: 1.1em;
      margin: 0;
      width: 100%;
      @include tablet {
        justify-content: center;
      }
      @include desktop {
        padding-bottom: 10px;
        justify-content: left;
        width: auto;
      }
    }
  }
  &__deaths {
    &_new {
      color: $color-red;
    }
  }
  &__recovered {
    &_new {
      color: $color-green;
    }
  }
}
</style>
