import marked from 'marked'
import * as shiki from 'shiki'

export function markdownToHtml(markdown) {
  return new Promise((resolve, reject) => {

	  const markedOptions = {
	    highlight: (code, lang, callback) => {
	      shiki.getHighlighter({ theme: 'material-lighter' })
	        .then(highlighter => {
	          const result = highlighter.codeToHtml(code, lang)
	          callback(null, result)
	        })
	        .catch(error => callback(error))
	    },
	  }
	  
	  const markedCallback = (err, html) => {
	    if (err) return reject(err)
	    resolve(html)
	  }

    return marked(markdown, markedOptions, markedCallback)
  })
}
