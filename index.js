let container = 900
let col = 12
let gutter = 20
let col_num = 1

let col_width = container / col - gutter
let col_width_total = (container, col, col_num) => {return container / col * col_num}

console.log("Largura de cada coluna: " + col_width + "px")

while(col_num <= col) {
  if (col_num > 1) {
    console.log(`Largura de ${col_num} colunas: ${col_width_total(container, col, col_num)}px`)
  } else if (col_num == 1) {
    console.log(`Largura de ${col_num} coluna: ${col_width_total(container, col, col_num)}px`)
  }
  col_num++
}