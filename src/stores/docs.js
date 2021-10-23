import { writable, readable } from 'svelte/store'

export const owner = readable('sveltejs')
export const project = readable('svelte')
export const path = readable('/site/content')
export const dir = readable('docs')
export const edit_title = readable('edit this section')

export const data = writable(null)
