const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText // we set innerHTML to just letters
    .split('') 
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
  
})

// element.innerText - returns all text contained by an element
// element.innerHTML - returns all text + html tags <span>a span element</span>