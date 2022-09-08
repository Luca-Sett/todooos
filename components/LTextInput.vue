<template>
  <div class="flex flex-col gap-1">
    <label :for="_for" class="w-max font-semibold text-text/80">
      {{ label }}
    </label>

    <input
      :value="modelValue"
      @input="handleInput"
      @blur="v$.touch"
      :type="type"
      :id="_for"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      class="appearance-none rounded-xl border-2 border-transparent bg-foreground-alt px-[18px] py-[6px] outline-none transition-all focus:border-b-accent"
      :class="v$.$error ? 'border-b-error focus:border-b-error' : ''"
    />

    <Transition name="fade">
      <div v-if="v$.$error" class="font-medium text-error">
        {{ v$.$errors[0].$message }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Validation } from "@vuelidate/core";

const emit = defineEmits(["update:modelValue"]);

interface Props {
  modelValue: string;
  v$: Validation;
  _for: string;
  label: string;
  placeholder: string;
  autocomplete?: string;
  type?: string;
}

const {
  modelValue,
  v$,
  _for,
  label,
  placeholder,
  autocomplete = false,
  type = "text",
} = defineProps<Props>();

const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
  v$.$touch();
};
</script>
