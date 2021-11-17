<template>
  <div class="px-20 font-rubik hidden md:block">
    <div class="bg-green-light w-full rounded-xl px-10 py-10">
      <div class="flex gap-x-5">
        <div class="flex-1">
          <div class="mb-5">
            <img src="../assets/image/logo-elemes.png" alt="logo-elemes" class="w-40">
          </div>
          <div>
            <p class="text-sm text-gray-400">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
              Kecamatan Setiabudi, Kota Jakarta Selatan,
              Daerah Khusus Ibukota Jakarta 12950
            </p>
          </div>
          <div class="mt-5 flex flex-row gap-x-3">
            <div class="rounded-full bg-white hover:bg-green-primary text-green-primary hover:text-white w-7 h-7 flex items-center justify-center transition ease-in-out duration-300">
              <font-awesome-icon :icon="['far', 'envelope']" class="text-xs" />
            </div>
            <div class="rounded-full bg-white hover:bg-green-primary text-green-primary hover:text-white w-7 h-7 flex items-center justify-center transition ease-in-out duration-300">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-xs" />
            </div>
            <div class="rounded-full bg-white hover:bg-green-primary text-green-primary hover:text-white w-7 h-7 flex items-center justify-center transition ease-in-out duration-300">
              <font-awesome-icon :icon="['fab', 'instagram']" class="text-xs" />
            </div>
          </div>
        </div>
        <div class="px-16">
          <p class="text-lg font-bold">Categories</p>
          <div class="text-sm text-gray-400 mt-5">
            <p class="my-2">Cupcake</p>
            <p class="my-2">Kebab</p>
            <p class="my-2">Salmon</p>
            <p class="my-2">Doughnut</p>
          </div>
        </div>
        <div class="px-16">
          <p class="text-lg font-bold">About Us</p>
          <div class="text-sm text-gray-400 mt-5">
            <p class="my-2">About Us</p>
            <p class="my-2">FAQ</p>
            <p class="my-2">Report Problem</p>
          </div>
        </div>
        <div class="flex-1">
           <p class="text-lg font-bold">Newsletter</p>
            <div class="text-sm text-gray-400 mt-5">
              <p class="my-2">Get now free 50% discount for all products on your first order.</p>
              <div class="flex flex-row my-5">
                <input type="text" class="bg-white border rounded-l-xl border-gray-300 border-r-0 w-48 py-2 px-3" placeholder="Your Email Address">
                <button type="button" class="bg-green-primary hover:bg-green-hover transition rounded-r-xl py-2 px-3 text-white">Send</button>
              </div>
              <div class="flex flex-row gap-x-2 mt-3">
                <div>
                  <font-awesome-icon :icon="['far', 'envelope']" class="text-normal text-green-primary" />
                </div>
                <p>elemesid@gmail.com</p>
              </div>
              <div class="flex flex-row gap-x-2 mt-3">
                <div>
                  <font-awesome-icon :icon="['fas', 'phone']" class="text-normal text-green-primary" />
                </div>
                <p> 0888 1111 2222 </p>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-10 mb-5">
      <p class="text-xs font-light text-gray-300 uppercase">© 2021 Elemes id. All rights reserved</p>
    </div>
  </div>
</template>
