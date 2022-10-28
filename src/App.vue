

<template>
  <div class="bg-Dark-Blue h-screen  mx-auto px-10 flex justify-center items-center ">
    <div
      class="py-12 px-12 bg-Dark-Grayish-Blue rounded-lg relative flex flex-col justify-center items-center text-center h-[600px] max-w-xl">
      <h1 class="text-Neon-Green-pr font-manrope text-xl pb-14 tracking-[.25em]">ADVICE <span class=""> #
          {{ advice_id }}</span></h1>
      <blockquote>

        <q
          class="text-Light-Cyan-pr text-3xl  md:text-4xl font-manrope font-semibold sm:whitespace-normal leading-10  pb-6  ">{{
              advice
          }}</q>

      </blockquote>


      <div class="md:bg-pattern-divider-desk w-full h-[17px]  mt-6 bg-cover "></div>
      <div class="md:hidden bg-pattern-divider-mobi w-full h-[17px]  mt-6 bg-cover "></div>


      <div @click="getAdvice"
        class="bg-Neon-Green-pr w-20 h-20 rounded-full absolute -bottom-[8%] left-[40%] md:-bottom-[7%] md:left-[43%] flex justify-center items-center mt-10">
        <div class="bg-icon-dice h-8 w-8 bg-cover"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref } from "vue"
import axios from "axios"
export default {
  name: 'App',
  setup() {
    const advice = ref("It is easy to sit up and take notice , what's difficult is getting up and taking action.")
    const advice_id = ref(117)



    const getAdvice = async () => {
      const advice_req = await axios.get("https://api.quotable.io/random").then(res => (res = res.data))

      console.log(advice_req)

      advice.value = advice_req.content
      advice_id.value = advice_req.length


    }


    return { advice, getAdvice, advice_id }
  }
}
</script>



