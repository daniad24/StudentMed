<script setup>
import { isMulti } from '../lib/quiz'
import ZoomImage from './ZoomImage.vue'

// `question` trebuie pregătită cu prepareQuestion(); `selected` = indicii bifați din `shuffled`.
const props = defineProps({
  question: { type: Object, required: true },
  selected: { type: Array, required: true },
  checked: { type: Boolean, default: false },
})
const emit = defineEmits(['update:selected'])

function toggle(i) {
  if (props.checked) return
  if (!isMulti(props.question)) return emit('update:selected', [i])
  emit('update:selected', props.selected.includes(i) ? props.selected.filter((x) => x !== i) : [...props.selected, i])
}

function optionClass(opt, i) {
  const picked = props.selected.includes(i)
  if (!props.checked) return picked ? 'border-sky-400 bg-sky-50 text-sky-800' : 'border-gray-200'
  if (opt.correct && picked) return 'border-brand-500 bg-brand-50 text-brand-800'
  if (opt.correct) return 'border-brand-500 border-dashed bg-brand-50 text-brand-800'
  if (picked) return 'border-red-400 bg-red-50 text-red-700 shake'
  return 'border-gray-200 opacity-50'
}
</script>

<template>
  <div>
    <span
      class="chip mb-2 whitespace-normal"
      :class="isMulti(question) ? 'bg-violet-100 text-violet-700' : 'bg-gray-100 text-muted'"
    >
      {{ isMulti(question) ? 'Complement multiplu · bifează toate răspunsurile corecte' : 'Complement simplu · un singur răspuns' }}
    </span>
    <span v-if="question.fromSource" class="chip mb-2 ml-1 whitespace-normal bg-sky-100 text-sky-700">📄 grilă din curs · răspuns din cheia cursului</span>
    <span v-else-if="question.source === 'ai'" class="chip mb-2 ml-1 whitespace-normal bg-amber-100 text-amber-700">🤖 generată de AI · neverificată</span>
    <h1 :key="question.id" class="text-xl font-black leading-snug sm:text-2xl slide-up">{{ question.text }}</h1>

    <ZoomImage v-if="question.image" :src="question.image.src" :alt="question.image.alt" :credit="question.image.credit" />

    <div class="mt-5 space-y-2.5" :role="isMulti(question) ? 'group' : 'radiogroup'">
      <button
        v-for="(opt, i) in question.shuffled"
        :key="question.id + i"
        class="flex w-full items-center gap-3 rounded-2xl border-2 border-b-4 bg-surface p-3.5 text-left font-bold transition-all active:translate-y-[2px]"
        :class="optionClass(opt, i)"
        :role="isMulti(question) ? 'checkbox' : 'radio'"
        :aria-checked="selected.includes(i)"
        :disabled="checked"
        @click="toggle(i)"
      >
        <span
          class="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-current text-sm font-black"
          :class="isMulti(question) ? 'rounded-lg' : 'rounded-full'"
        >
          {{ checked && opt.correct ? '✓' : !checked && isMulti(question) && selected.includes(i) ? '✓' : 'ABCDE'[i] }}
        </span>
        {{ opt.text }}
      </button>
    </div>
  </div>
</template>
