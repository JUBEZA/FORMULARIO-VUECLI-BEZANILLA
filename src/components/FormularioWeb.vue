<template>
  <form action="">
    <div>
      <label for="name">Mi nombre</label>
      <input type="text" id="name" v-model="name">
      {{ name }}
  </div>
  <div>
    <label for="legal">Acepto Terminos y Condiciones</label>
    <input type="checkbox" name="legal" id="legal" v-model="legal" >
  </div>
  </form>

</template>


<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      name: "",
      legal: "false"
    };
  }
}
</script>
