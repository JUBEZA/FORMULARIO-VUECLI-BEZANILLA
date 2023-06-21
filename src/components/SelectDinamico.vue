<template>
  <div>
    <label :for="id">{{label}} select dinamico</label>
    <select :id="id" @input="inputHandler">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
  export default{
    name: "selectDinámico",
    props: {
      id:{
        type: String,
        required: true,
      },
      label:  {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: true
      },
      value:{
        type: String,
        required: false,
      }
    },
    methods: {
      inputHandler(event) {
        this.$emit("input", event.target.value);
      },
    },
  };
</script>
