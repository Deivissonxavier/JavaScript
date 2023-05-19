// Altere apenas o código abaixo desta linha
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
}
// Altere apenas o código acima desta linha