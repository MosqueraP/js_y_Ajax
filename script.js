// 1. Detectar si la cadena es un palíndromo
function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value.toLowerCase();
    const cleanedInput = input.replace(/[^a-z0-9]/gi, ''); // Quitar espacios y caracteres no alfanuméricos
    const reversed = cleanedInput.split('').reverse().join('');
    const result = cleanedInput === reversed ? 'Es un palíndromo.' : 'No es un palíndromo.';
    document.getElementById('palindromeResult').textContent = result;
  }
  
//   2. Determinar el número mayor
function findLargerNumber() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('numberResult').textContent = 'Por favor, ingresa ambos números.';
    } else if (num1 === num2) {
      document.getElementById('numberResult').textContent = 'Ambos números son iguales.';
    } else {
      const larger = num1 > num2 ? num1 : num2;
      document.getElementById('numberResult').textContent = `El número mayor es ${larger}.`;
    }
  }

// 3. Mostrar las vocales que aparecen en la frase
function findVowels() {
    const input = document.getElementById('vowelInput').value.toLowerCase();
    const vowels = input.match(/[aeiouáéíóúü]/g);
    const result = vowels ? `Las vocales en la frase son: ${[...new Set(vowels)].join(', ')}.` : 'No se encontraron vocales.';
    document.getElementById('vowelResult').textContent = result;
  }

  

// 4. Contar cuántas veces aparece cada vocal
function countVowels() {
    const input = document.getElementById('vowelCountInput').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  
    for (const char of input) {
      if (vowels.includes(char)) {
        counts[char]++;
      }
    }
  
    const result = Object.entries(counts)
      .map(([vowel, count]) => `${vowel.toUpperCase()}: ${count}`)
      .join(', ');
    document.getElementById('vowelCountResult').textContent = `Conteo de vocales: ${result}.`;
  }

  