<template>
  <div class="calendar">
    <div class="container">
      <div class="calendar-title" v-if="years === 0">
        <h3>
          enter your data —>
        </h3>
      </div>
      <div class="calendar-content" v-if="years > 0">
        <div class="calendar-top">
          <h5>
            Number of weeks in a year (starts on your birthday, not Jan 1st) —>
          </h5>
        </div>
        <div class="calendar-side">
          <h5>
            Your Age in Years —>
          </h5>
        </div>
        <div class="calendar-table">
          <div class="calendar-years">
            <div class="calendar-years__year" v-for="year in years" :key="year">
              {{year - 1}}
            </div>
          </div>
          <div class="calendar-weeks">
            <div class="calendar-weeks__item week_end" v-for="end in weeks.end" :key="'A' + end">
              <div class="item-content">
              </div>
            </div>
            <div class="calendar-weeks__item week_new" v-for="n in weeks.new" :key="'B' + n">
              <div class="item-content">
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    weeks: Object,
    years: Number,
    age: Number
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .calendar {
    min-height: calc(100vh - 96px);
  }

  h5 {
    font-weight: 700;
    font-size: 0.77em;
  }

  .container {
    background: #fff;
    box-shadow: 0 1px 2px -1px gray;
    border-radius: 5px;
    padding: 30px;
  }

  .calendar-table {
    display: grid;
    grid-template-columns: 1fr 52fr;
    grid-gap: 0.5vh;
    padding: 15px;
  }

  .calendar-years {
    &__year {
      display: block;
      font-size: 0.8em;
    }
  }

  .calendar-weeks {
    display: grid;
    grid-template-columns: repeat(52, 1fr);
    grid-gap: 0.5vh;

    &__item {
      position: relative;
      border: 1px solid #2c3e50;
      border-radius: 25%;
    }
  }

  .week_end {
    background: #2c3e50;
    color: #fff;
  }

  .calendar-top{
    margin-left: 50px;
    text-align: start;
  }

  .calendar-side {
    margin: -70px;
    padding: 0;
    margin-top: 95px;
    float: left;
    transform: rotate(90deg);
  }
</style>