<template>
  <div id="app">
    <FormularioWeb/>
    <SelectDinamico :options="options" :label="SelectDinamico" id="dynamic" v-model="framework"/>
  </div>
</template>

<script>
// import ModificadoresEvento from './components/FormularioWeb.vue'
// import FormularioWeb from './components/FormularioWeb.vue'
// import SelectDinamico from './components/SelectDinamico.vue'


export default {
  name: 'App',
  components: {
    // FormularioWeb,
    // SelectDinamico,
    // ModificadoresEvento,
  },
  data() {
    return {
      options: [
        { name: "Angular", value: "angular"},
        { name: "Vue", value: "vue"},
      ],
      framework: "angular",
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
