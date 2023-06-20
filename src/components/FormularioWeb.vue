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

    <h4>Selecciona tu curso</h4>
    <div>
      <label for="prueba">Pintura</label>
      <input type="checkbox" value="pintura" id="pintura" v-model="checks">
    </div>

    <div>
      <label for="prueba">Fotografía</label>
      <input type="checkbox" value="fotografia" id="fotografía" v-model="checks">
    </div>

    <div>
      <label for="prueba">Música</label>
      <input type="checkbox" value="musica" id="musica" v-model="checks">
    </div>

    <div>
      <label for="prueba">Teatro</label>
      <input type="checkbox" value="teatro" id="teatro" v-model="checks">
    </div>

    <div>
        <label for="country">selecciona tu pais</label>
        <select  id="country" v-model="country">
          <option value="ar">Argentina</option>
          <option value="br">Brasil</option>
          <option value="ch">Chile</option>
          <option value="mx">Mexico</option>
        </select>
    </div>

    <div>
        <label for="multiCountry">selecciona tuS paises</label>
        <select  id="multiCountry" v-model="multiCountry" multiple>
          <option value="ar">Argentina</option>
          <option value="br">Brasil</option>
          <option value="ch">Chile</option>
          <option value="mx">Mexico</option>
        </select>
    </div>

  </form>

</template>


<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      name: "",
      legal: "false",
      checks: [],
      country: "ch",
      multiCountry: []
    };
  }
}
</script>
