import { readable } from 'svelte/store'

export const owner = readable('sveltejs')
export const repo = readable('kit')
export const branch = readable('master')
export const repoUrl = readable(`https://github.com/sveltejs/kit/edit/master/documentation/docs`)
