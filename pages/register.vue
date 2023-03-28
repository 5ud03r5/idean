<template>
    <div class="mt-20 md:mx-auto md:container">
        <div class="flex flex-col items-center justify-center p-10 mx-auto mb-10 bg-white shadow-xl rounded-xl w-max">
            <IconsLogo class="p-2 bg-purple-200 rounded-full max-md:w-16 max-md:h-16 md:w-32 md:h-32"></IconsLogo>
            <h1 class="text-[35px] font-bold mb-t">Sign up</h1>
            <form class="flex flex-col md:w-[400px] mt-6 space-y-3" @submit.prevent="register">
                <div class="flex flex-col">
                    <UIUniversalLabel :name="'Username'" :text="'cannot be empty.'" :valid="loginValid" />
                    <UIUniversalInput :name="'username'" :modelValue="login"
                        @update:modelValue="newValue => login = newValue" :valid="loginValid"
                        :validation="loginValidation" />
                </div>
                <div class="flex flex-col">
                    <UIUniversalLabel :name="'Email'" :text="'is not valid.'" :valid="emailValid" />
                    <UIUniversalInput :name="'email'" :modelValue="email" @update:modelValue="newValue => email = newValue"
                        :valid="emailValid" :validation="emailValidation" />
                </div>
                <div class="flex flex-col">
                    <UIUniversalLabel :name="'Password'" :text="'cannot be empty.'" :valid="passwordValid" />
                    <UIUniversalInput type="password" :name="'password'" :modelValue="password"
                        @update:modelValue="newValue => password = newValue" :valid="passwordValid"
                        :validation="passwordValidation" />

                </div>
                <div class="flex flex-col">
                    <UIUniversalLabel :name="'Confirmation password'" :text="'does not match.'" :valid="confirmValid" />
                    <UIUniversalInput type="password" :name="'confirmation password'" :modelValue="confirm"
                        @update:modelValue="newValue => confirm = newValue" :valid="confirmValid"
                        :validation="confirmValidation" />

                </div>

                <button type="submit"
                    class="mt-2 text-gray-100 bg-purple-800 rounded-md md:py-3 md:px-4 max-md:py-2 md:ml-auto md:w-max hover:bg-purple-700">Sign
                    up</button>
            </form>
            <NuxtLink to="/login" class="mt-5">Already have an account? Sign in!</NuxtLink>


        </div>


    </div>
</template>

<script setup>
const user = useSupabaseUser()
const client = useSupabaseAuthClient()
const login = ref('')
const password = ref('')
const confirm = ref('')
const email = ref('')
const emailValid = ref(true)
const confirmValid = ref(true)
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
    } else {
        loginValid.value = true
    }
}
const passwordValidation = () => {
    if (password.value.length === 0) {
        passwordValid.value = false
    } else {
        passwordValid.value = true
    }
}

const confirmValidation = () => {
    if (confirm.value === password.value && password.value.length > 0) {
        confirmValid.value = true
    } else {
        confirmValid.value = false
    }
}

const emailValidation = () => {
    if (!email.value.match(/.*\@.*\.\w{1,}/)) {
        emailValid.value = false
    } else {
        emailValid.value = true
    }
}

const register = async () => {
    console.log('kekw')
    if (email.value.match(/.*\@.*\.\w{1,}/) && confirm.value === password.value && password.value.length > 0 && login.value.length > 0) {
        console.log('done')
        const { data, error } = await client.auth.signUp({
            email: email.value, password: password.value, options: { data: { user_name: login.value, email: email.value, avatar_url: 'https://pic.onlinewebfonts.com/svg/img_87237.png' } }
        })
        console.log(data, error)
    }
}
</script>