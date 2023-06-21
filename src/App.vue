<template>
  <div id="app">
    <FormularioWeb/>
    <SelectDinamico :options="[]"/>
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue'
import SelectDinamico from './components/SelectDinamico.vue'


export default {
  name: 'App',
  components: {
    FormularioWeb,
    SelectDinamico,
  },
  data() {
    return {
      options: [
        { name: "Angular", value: "angular"},
        { name: "Vue", value: "vue"},
      ],
      value: "angular",
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-small{
  widht: 6em;
}
</style>
