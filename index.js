let container = 900
let col = 12
let gutter = 16
let col_num = 12

let col_width = container / col - gutter
let col_width_total = container / col * col_num

console.log("Largura de cada coluna: " + col_width + "px")
if (col_num > 1) {
  console.log(`Largura de ${col_num} colunas: ${col_width_total}px`)
} else if (col_num == 1) {
  console.log(`Largura de ${col_num} coluna: ${col_width_total}px`)
} else {
  console.log("Digite um número válido de colunas.")
}
