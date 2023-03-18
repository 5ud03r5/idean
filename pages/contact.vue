<template>
    <div class="flex container mx-auto w-[1200px] p-10 mt-10 ">
        <div class="w-1/2">
            <h1 class="text-[35px]">We'd love to hear your feedback</h1>
            <p>Thank you for contacting IDEANS team. If you have any questions or suggestions do not hesitate to send
                us a message.</p>
        </div>
        <div class="w-1/3 ml-auto">
            <form @submit.prevent="submitForm" class="flex flex-col space-y-1">
                <UIUniversalLabel :valid="nameValid" :name="'Name'" :text="'cannot be empty'" />
                <UIUniversalInput :name="'Name'" :modelValue="name" @update:modelValue="newValue => name = newValue"
                    :valid="nameValid" :validation="nameValidation" />
                <UIUniversalLabel :valid="emailValid" :name="'Email'" :text="'is not valid.'" />
                <UIUniversalInput :name="'Email'" :modelValue="email" @update:modelValue="newValue => email = newValue"
                    :valid="emailValid" :validation="emailValidation" />
                <UIUniversalLabel :valid="messageValid" :name="'Message'" :text="'cannot be empty.'" />
                <textarea v-model="message"
                    :class="!messageValid ? 'outline-2 outline outline-red-500 focus:outline-red-500' : 'focus:outline-none'"
                    @blur="messageValidation" placeholder="Write something..." rows="6"
                    class="p-2 bg-purple-100 rounded-sm resize-none placeholder:italic"></textarea>
                <button type="submit"
                    :class="isDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'cursor-pointer bg-purple-500 hover:bg-purple-400 text-gray-100'"
                    class="px-3 py-2 ml-auto rounded-md" :disabled="isDisabled">Send</button>
            </form>
        </div>
    </div>
</template>

<script setup>
const email = ref('')
const name = ref('')
const message = ref('')
const emailValid = ref(true)
const nameValid = ref(true)
const messageValid = ref(true)
const isDisabled = ref(true)

const emailValidation = () => {
    if (!email.value.match(/.*\@\w+\.\w{2,10}/)) {
        emailValid.value = false
    }
}

const nameValidation = () => {
    if (name.value.length === 0) {
        nameValid.value = false
    }
}
const messageValidation = () => {
    if (message.value.length === 0) {
        messageValid.value = false
    }
}

watch(email, () => {
    if (email.value.match(/.*\@\w+\.\w{2,10}/)) {
        emailValid.value = true
    }
})

watch(name, () => {
    if (name.value.length > 0) {
        nameValid.value = true
    }
})

watch(message, () => {
    if (message.value.length > 0) {
        messageValid.value = true
    }
})

watch([email, message, name], () => {
    console.log('entered function')
    if (message.value.length > 0 && email.value.match(/.*\@\w+\.\w{2,10}/) && name.value.length > 0) {
        console.log('passedtest')
        isDisabled.value = false
    } else {
        isDisabled.value = true
    }
})

const submitForm = () => {
    if (message.value.length > 0 && email.value.match(/.*\@\w+\.\w{2,10}/) && name.value.length > 0) {
        //... send email
        navigateTo('/')
    } else {

    }
}

</script>