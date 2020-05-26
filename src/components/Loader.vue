<template>
    <div class="container loader">
        <div class="lds-dual-ring">

        </div>
    </div>
</template>

<style scoped>
   .lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #E3B013 transparent #E3B013 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
    /* margin-top: 10rem; */
    width: 100px;
    margin: 15rem auto;
}

</style>