<template>
    <div class="mt-20 md:mx-auto md:container">
        <div class="flex flex-col items-center justify-center p-10 mx-auto mb-10 bg-white shadow-xl rounded-xl w-max">
            <IconsLogo class="p-2 bg-purple-200 rounded-full max-md:w-16 max-md:h-16 md:w-32 md:h-32"></IconsLogo>
            <h1 class="text-[35px] font-bold mb-t">Login</h1>
            <h2 class="max-md:hidden">Currently only github login is supported</h2>
            <form class="flex flex-col md:w-[400px] mt-6 space-y-3">
                <div class="flex flex-col">
                    <UIUniversalLabel :name="'Login'" :text="'cannot be empty.'" :valid="loginValid" />
                    <UIUniversalInput :name="'Login'" :modelValue="login" @update:modelValue="newValue => login = newValue"
                        :valid="loginValid" :validation="loginValidation" />
                </div>
                <div class="flex flex-col">
                    <UIUniversalLabel :name="'Password'" :text="'cannot be empty.'" :valid="passwordValid" />
                    <UIUniversalInput type="password" :name="'Password'" :modelValue="password"
                        @update:modelValue="newValue => password = newValue" :valid="passwordValid"
                        :validation="passwordValidation" />
                </div>

                <button
                    class="mt-2 text-gray-100 bg-purple-800 rounded-md md:py-3 md:px-4 max-md:py-2 md:ml-auto md:w-max hover:bg-purple-700">Login</button>
            </form>

            <button
                @click="auth.signInWithOAuth({ provider: 'github', options: { redirectTo: config.public.REDIRECT_URL } })"
                class="flex justify-center md:w-[400px] px-3 py-2 mt-10 text-gray-100 bg-purple-800 rounded-sm y-2 hover:bg-purple-700">
                <IconsGithub class="w-6 h-6 fill-gray-100" /> <span class="ml-1"> Continue with Github</span>
            </button>
        </div>


    </div>
</template>

<script setup>
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()
const login = ref('')
const password = ref('')
const loginValid = ref(true)
const passwordValid = ref(true)
const config = useRuntimeConfig()

watchEffect(() => {
    if (user.value) {
        navigateTo('/app/profile')
    }
})

const loginValidation = () => {
    if (login.value.length === 0) {
        loginValid.value = false
    }
}
const passwordValidation = () => {
    if (password.value.length === 0) {
        passwordValid.value = false
    }
}




</script>