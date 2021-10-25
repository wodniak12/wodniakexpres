const update = document.querySelector('#update-button')
fetch(endpoint, options)

update.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darth Vadar',
        quote: 'I find your lack of faith disturbing.'
      })
    })
  })
  const data = {
    name: 'Darth Vadar',
    quote: 'I find your lack of faith disturbing.'
  } 