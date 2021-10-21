# SASS Pro
It has some functions, mixins, and other stuff to help you.

Feel free to contribute❤.

## Docs

### Files

#### variables
Contains 2 map, `$screens` and `$colors` that you can customize from the `config.sass` file.

#### config
You can add, edit, remove the predefined configs and variables.

### Tools

#### Functions

##### `type-check($value)`
Some functions to check the type of the `$value`.
- `is-str($value)`
- `is-bool($value)`
- `is-num($value)`
- `is-map($value)`
- `is-list($value)`
- `is-color($value)`
- `is-null($value)`
- `is-empty-str($value)`
$value: type: any

##### `tw-spacing($unit)`
Multiplies the number with `.25` to give you a (TailwindCSS)[https://github.com/tailwindlabs/tailwindcss] based `rem` value.
$unit: type: number

##### `print-important($bool)`
Whatever to print `!important` string or not.
$bool: type: boolean

##### `px-to-rem($value)`
Converts `px` to `rem`

##### `rem-to-px($value)`
Converts `rem` to `px`
