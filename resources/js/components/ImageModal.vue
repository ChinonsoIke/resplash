<template>
    <div class="min-w-screen h-screen animated fadeIn faster  xs:px-6 md:px-0 fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
   	    <div class="absolute bg-black opacity-50 inset-0 z-0" @click="hideMod"></div>
        <div class="w-full p-2 max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <!--content-->
            <div class="">
                <!--body-->
                <div>
                    <slot/>
                </div>
                <!--footer-->
                <div class="p-2 mt-2 text-center space-x-4 md:block">
                    <button @click="hideMod" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                        Cancel
                    </button>
                    <a :href="imgLink" target="_blank" style="background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )" class="mb-2 md:mb-0 bg-blue-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-700">Download</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgLink'],

    methods: {
        hideMod(){
            console.log('for here?');
            Event.$emit('hideModal');
        },
    }
    
}
</script>