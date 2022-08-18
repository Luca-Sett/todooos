<template>
  <div class="flex flex-col gap-1">
    <label :for="_for" class="font-bold text-pale-white w-max">
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
      :class="v$.$error ? 'ring-2 ring-error focus:ring-error' : ''"
    />

    <div class="text-error h-6">
      <Transition name="fade">
        <div v-if="v$.$error">
          {{ v$.$errors[0].$message }}
        </div>
      </Transition>
    </div>
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
  type = "text",
  autocomplete = false,
} = defineProps<Props>();

const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
  v$.$touch();
};
</script>
