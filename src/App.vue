<template>
  <div id="app">
    <div class="header">
      <h1>LIFE CALENDAR</h1>
    </div>
    <div class="content">
      <Calendar
        class="calendar"
        :weeks = weeks
        :years = years
        :age = age
      />
      <SideBar
        class="sidebar"
        @submit = 'submit'
        :weeks = weeks
        :years = years
        :age = age
        :deathYear = deathYear
      />
    </div>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    Calendar,
    SideBar
  },
  data() {
    return {
      weeks: {
        all: 0,
        end: 0,
        new: 0
      },
      years: 0,
      age: 0,
      deathYear: 0
    }
  },
  methods: {
    submit(birth, death) {
      this.weeks.all = death * 52
      this.years = parseInt(death)
      birth = new Date(birth)
      let now = new Date()
      this.weeks.end = Math.ceil(Math.abs(now.getTime() - birth.getTime()) / (1000 * 3600 * 24) / 7);
      this.weeks.new = this.weeks.all - this.weeks.end
      this.age = Math.floor(this.weeks.end / 52)
      this.deathYear = birth.getFullYear() + parseInt(death)
    }
  }
}
</script>

<style lang="less">
@font-face {
  font-family: 'Raleway';
  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet');
}

h1, h2, h3, h4, h5 {
  margin: 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
}

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #EDEEF0;
}

body {
  margin: 0;
  padding: 0;
}

.header {
  background-color: #fff;
  padding: 15px;
  font-size: 1.1em;
  box-shadow: 0 1px 2px -1px gray;
}

.content {
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  grid-gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
  justify-content: space-between;
}
</style>
