<template>
  <div class="flex flex-col gap-1">
    <label :for="_for" class="w-max font-semibold text-text/80">
      {{ label }}
    </label>

    <input
      :value="modelValue"
      @input="handleInput"
      @blur="v$?.touch"
      :type="type"
      :id="_for"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      class="appearance-none rounded-xl border-2 border-transparent bg-foreground-alt-1 px-[18px] py-1.5 outline-none transition-all focus:border-b-accent"
      :class="v$?.$error ? 'border-b-error focus:border-b-error' : ''"
    />

    <LExpand>
      <div v-if="v$?.$error" class="font-medium text-error">
        {{ v$.$errors[0].$message }}
      </div>
    </LExpand>
  </div>
</template>

<script setup lang="ts">
import { Validation } from "@vuelidate/core";

const emit = defineEmits(["update:modelValue"]);

const {
  modelValue,
  v$,
  _for,
  label,
  placeholder,
  autocomplete = "",
  type = "text",
} = defineProps<{
  modelValue: string;
  v$?: Validation;
  _for: string;
  label: string;
  placeholder: string;
  autocomplete?: string;
  type?: string;
}>();

const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
  v$?.$touch();
};
</script>
