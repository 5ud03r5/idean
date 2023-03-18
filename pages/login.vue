<template>
    <div class="container px-10 mx-auto mt-20">
        <div class="flex flex-col items-center justify-center p-10 mx-auto mb-10 bg-purple-400 shadow-xl rounded-xl w-max">
            <IconsLogo class="w-32 h-32 p-2 bg-purple-200 rounded-full"></IconsLogo>
            <h1 class="text-[35px] font-bold mb-t">Login</h1>

            <form class="flex flex-col w-[400px] mt-6 space-y-3">
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
                    class="px-4 py-3 mt-2 ml-auto text-gray-100 bg-purple-800 rounded-md w-max hover:bg-purple-700">Login</button>
            </form>

            <button @click="auth.signInWithOAuth({ provider: 'github', options: { redirectTo: url } })"
                class="flex justify-center w-[400px] px-3 py-2 mt-10 text-gray-100 bg-purple-800 rounded-sm y-2 hover:bg-purple-700">
                <IconsGithub class="w-6 h-6 fill-gray-100" /> <span class="ml-1"> Login with Github</span>
            </button>
        </div>


    </div>
</template>

<script setup>
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()
const url = ref(process.env !== undefined ? process.env.REDIRECT_URL : 'http://localhost:3000/app/profile')
const login = ref('')
const password = ref('')
const loginValid = ref(true)
const passwordValid = ref(true)

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