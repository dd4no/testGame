<template>
  <div id="dice-roller">
    <div id="input">
      <h2>Input</h2>
      <p>Roll d2 <button v-on:click='roll(2)'>Click</button></p>      
      <p>Roll d4 <button v-on:click='roll(4)'>Click</button></p>      
      <p>Roll d6 <button v-on:click='roll(6)'>Click</button></p>      
      <p>Roll d8 <button v-on:click='roll(8)'>Click</button></p>      
      <p>Roll d10 <button v-on:click='roll(10)'>Click</button></p>      
      <p>Roll d20 <button v-on:click='roll(20)'>Click</button></p>      
      <p>Roll d100 <button v-on:click='roll(100)'>Click</button></p>      
    </div>
    <div id="output">
      <h2>Output</h2>
      <p v-for = "(item, index) in response" :key = "index"> {{item}}</p>
      {{response}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      response: []
    }
  },
  methods: {
    logToConsole: function () {
      console.log('Hello world');
    },
    roll: function(num) {
      let result = ((Math.floor(1 + (Math.random() * num))));
      this.response.push(result)
    }
  }
}
</script>

<style>
body{
  background: black;
}
#dice-roller {
  color: cyan;
}

#output {
  color: pink;
}

</style>
