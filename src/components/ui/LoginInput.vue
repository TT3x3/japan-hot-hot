<template>
    <div class="flex flex-col gap-1 px-4">
        <div class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
            <label :for="inputId" class="inline-block w-24 font-bold text-base-light">{{ labelName }}</label>
            <input :id="inputId" :type="inputType" :value="value" @input="$emit('input', $event.target.value)"
                @focus="clearErrorInfo(inputKey)" class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                :class="{ 'border-hot-red': errorTitle }" :placeholder="`請輸入${labelName}`">
        </div>
        <small v-if="errorTitle" class="text-sm text-end text-hot-red">{{
            errorTitle }}</small>
    </div>
</template>
<script>
export default {
    name: 'CustomInput',
    props: {
        labelName: {
            type: String,
            required: true,
        },
        inputKey: {
            type: String,
            required: true,
        },
        inputType: {
            type: String,
            default: 'text',
        },
        value: {
            type: String,
            required: true,
        },
        errorTitle: {
            type: String,
            required: true,
        },
        clearErrorInfo: {
            type: Function,
            default: () => { },
        },
    },
    data() {
        return {
            inputId: '',
        };
    },
    created() {
        this.inputId = `input-${Math.random().toString(36).substring(2, 8)}`;
    },
    methods: {

    },
}
</script>