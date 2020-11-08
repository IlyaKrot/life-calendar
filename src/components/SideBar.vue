<template>
  <div class="sidebar">
    <div class="form">
      <div class="container">
        <form action="#" class="sidebar-form" @submit.prevent="submit">
          <h5>DATE OF BIRTH</h5>
          <input type="text" class="sidebar-form__date" v-model="birth" placeholder="YYYY-MM-DD" required pattern="\d{4}-{1}\d{2}-{1}\d{2}">
          <h5>ESTIMATED AGE OF DEATH</h5>
          <input type="text" class="sidebar-form__date" v-model="death" placeholder="72 (Average for Russia)" required>
          <button class="sidebar-form__submit">submit</button>
        </form>
      </div>
    </div>
    <div class="info" v-if="years > 0">
      <div class="container">
        <h5>info</h5>
        <p>Weeks lived: {{weeks.end}}</p>
        <p>Weeks left: {{weeks.new}}</p>
        <p>Сurrent age: {{age}}</p>
        <p>Left to live: {{years - age}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    weeks: Object,
    years: Number,
    age: Number
  },
  data() {
    return {
      birth: '',
      death: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.birth, this.death)
    }
  }
}
</script>

<style lang="less" scoped>
  .sidebar {
  }

  .info {
    margin-top: 15px;
  }

  .container {
    background: #fff;
    box-shadow: 0 1px 2px -1px gray;
    border-radius: 5px;
    padding: 30px 30px 15px 30px;

    p {
      margin-bottom: 15px;
    }
  }

  .sidebar-form {
    display: flex;
    flex-direction: column;

    &__date{
      margin: 15px 0;
      padding: 5px;
      outline: none;
      border: none;
      border-bottom: 1px solid  #2c3e50;
    }

    &__submit {
      font-family: 'Raleway', sans-serif;
      margin-top: 15px;
      padding: 5px;
      text-transform: uppercase;
      border: none;
      background: #2c3e50;
      color: #fff;
      outline: none;
      border-radius: 5px;
      box-shadow: 0 2px 4px -2px gray;

      &:hover {
        cursor: pointer;
      }

      &:active {
        box-shadow: 0 0 0 0 gray;
      }
    }
  }
</style>