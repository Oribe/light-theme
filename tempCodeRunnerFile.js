

let str = `
dracula:
  base:
    - &BG        '#282A36'
    - &FG        '#F8F8F2'
    - &SELECTION '#44475A'
    - &COMMENT   '#6272A4'
    - &CYAN      '#8BE9FD'
    - &GREEN     '#50FA7B'
    - &ORANGE    '#FFB86C'
    - &PINK      '#FF79C6'
    - &PURPLE    '#BD93F9'
    - &RED       '#FF5555'
    - &YELLOW    '#F1FA8C'
  ansi:
    - &COLOR0        '#21222C'
    - &COLOR1        '#FF5555'
    - &COLOR2        '#50FA7B'
    - &COLOR3        '#F1FA8C'
    - &COLOR4        '#BD93F9'
    - &COLOR5        '#FF79C6'
    - &COLOR6        '#8BE9FD'
    - &COLOR7        '#F8F8F2'
    - &COLOR8        '#6272A4'
    - &COLOR9        '#FF6E6E'
    - &COLOR10       '#69FF94'
    - &COLOR11       '#FFFFA5'
    - &COLOR12       '#D6ACFF'
    - &COLOR13       '#FF92DF'
    - &COLOR14       '#A4FFFF'
    - &COLOR15       '#FFFFFF'
  brightOther:
    # Temporary (awaiting fix)
    - &TEMP_QUOTES          '#E9F284'
    - &TEMP_PROPERTY_QUOTES '#8BE9FE'
  other:
    - &LineHighlight '#44475A75'
    - &NonText       '#FFFFFF1A'
    - &WHITE         '#FFFFFF'
    - &TAB_DROP_BG   '#44475A70'
    # UI Variants
    - &BGLighter     '#424450'
    - &BGLight       '#343746' # HSV (230   , 25.71, 27.45)
    - &BGDark        '#21222C' # HSV (234.55, 25   , 17.25)
    - &BGDarker      '#191A21' # HSV (234.55, 25   , 13   )

`

const reg = /(&\w{1,})\s+'(#[0-9A-F]{3,})'/

const match = str.match(new RegExp(reg, 'gi'))

const anyColor = {}

match.forEach(item => {
  item = item.replace(reg, '$1,$2').split(',')
  Reflect.set(anyColor, item[0], item[1])

})

console.log(anyColor)