<template>
  <div>


    <div class="card flex justify-content-center">
        <InputText type="text" v-model="value" />
    </div>
<!-- {{ theme }} -->
    <br>

    <button label="Change Theme"  @click="toggleTheme">change theme</button>
    <!-- <button label="Change Theme" class="p-mr-2" @click="changeTheme">change theme</button> -->
  </div>
</template>

<script>

import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';

export default {
  
  setup () {


    const currentTheme = ref('md-light');

    const PrimeVue = usePrimeVue();




    const toggleTheme = () => {
    // What is next theme? (2nd parameter)
    let nextTheme = 'md-light';
    if (currentTheme.value === 'md-light') nextTheme = 'md-dark';
    else if (currentTheme.value === 'md-dark') nextTheme = 'md-light';

    // 1. Current theme name
    // 2. Next theme name
    // 3. id of <link>, what reference to where set theme css file --> fix, single id to <link>
    PrimeVue.changeTheme(currentTheme.value, nextTheme, 'md-light', () => {});    

    // So current theme now:
    currentTheme.value = nextTheme;
}





    const value = ref(null);


    // const theme = ref("nova-light");

    //     const themeOptions = [
    //       { label: "Nova Light", value: "nova-light" },
    //       { label: "Nova Dark", value: "nova-dark" },
    //     ];

    //     const changeTheme = () => {
    //       if (theme.value === "nova-light") {
    //         theme.value = "nova-dark";
    //       } else {
    //         theme.value = "nova-light";
    //       }
    //     };
    

    return {value,toggleTheme
      //  theme, themeOptions, changeTheme
      }
  }
}
</script>

<style lang="scss" scoped>

</style>