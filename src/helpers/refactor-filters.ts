type MapFunction<T, U> = (array: T[], func: (value: T) => U) => U[];

const map: MapFunction<number, number> = (array, func) => {
  return array.map(func);
};

// Função de transformação para duplicar um número
const double = (num: number): number => {
  return num * 2;
};

// Array de números de entrada
const numbers = [1, 2, 3, 4, 5];

// Utilizando a função map para duplicar os números
const doubledNumbers = map(numbers, double);
console.log(doubledNumbers); // Saída: [2, 4, 6, 8, 10]
