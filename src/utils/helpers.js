export const isLowercaseOnly = string => {
	const lowercaseOnly = /^[a-z]+$/g
	return lowercaseOnly.test(string)
}

export const safeSlug = title => {
	let newTitle = ''

	title = title.toLowerCase()
	for (let i = 0; i < title.length; i++) {
		if (title[i] === ' ') {
			newTitle += '_'
		} else if (!isLowercaseOnly(title[i])) {
			newTitle += ''
		} else {
			newTitle += title[i]
		}
	}

	return newTitle
}
