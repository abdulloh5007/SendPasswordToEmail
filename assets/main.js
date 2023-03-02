const frm = document.querySelector('.frm')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')
const inp3 = document.querySelector('.inp3')
const inp4 = document.querySelector('.inp4')
const loading = document.querySelector('.loader')
loading.style.display = 'none'

const proverka = document.querySelector('.proverka')
const prover = document.querySelector('.prover')

const body = document.querySelector('body')

// const dataRandom = []
// for (let i = 0; i < 6; i++) {
//   const randomNum = Math.floor(Math.random() * 10)
//   if(!dataRandom.includes(randomNum)){
//     dataRandom.push(randomNum)
//   }
// }

// let test = dataRandom.join()
// console.log(test);

const randomNumber = Math.floor(Math.random() * 100000)
const randomNumberSpace = randomNumber.toString()// .split('').join(' ')

const from = 'abdulloh50007@gmail.com'

inp1.addEventListener('keyup', (e) => {
  const h3 = document.querySelector('.inp1H3')
  if(e.target.value.length < 5){
    h3.hidden = false
    inp1.style.borderBottomColor = 'red'
  }else{
    inp1.style.borderBottomColor = 'blue'
    h3.hidden = true
  }
})

inp3.addEventListener('keyup', (e) => {
  const h3 = document.querySelector('.inp3H3')
  if(e.target.value.length < 12){
    h3.hidden = false
    inp3.style.borderBottomColor = 'red'
  }
  else{
    h3.hidden = true
    inp3.style.borderBottomColor = 'blue'
  }
})

const gmail = []

inp2.addEventListener('keyup', (e) => {
  const h3 = document.querySelector('.inp2H3')
  if(!e.target.value.includes('@')){
    h3.hidden = false
    inp2.style.borderBottomColor = 'red'
  }else{
    h3.hidden = true
    inp2.style.borderBottomColor = 'blue'
  }
  // if(e.target.value.includes('@')){
  //   gmail.push(`${e.target.value}gmail.com`)
  //   inp2.value = gmail[0]
  // }
})

const emailBody = `
<div class="emailBody" style="display: flex; flex-wrap: wrap; flex-direction: column;">
  <b>Your code is</b>
  <p style="border: 1px solid red; margin: 0 auto; padding: 10px;">${randomNumberSpace.split('').join(' ')}</p>
</div>
`

const btn = document.querySelector('.btn')
btn.addEventListener('click', e => {
  setTimeout(() => {
    e.target.disabled = true
    e.target.style.backgroundColor = '#dc143c6e'
    e.target.style.cursor = 'not-allowed'
  }, 001);
  setTimeout(() => {
    e.target.disabled = false
    e.target.style.backgroundColor = 'crimson'
    e.target.style.cursor = 'pointer'
  }, 3000);
  setTimeout(() => {
    frm.style.display = 'none'
    prover.style.display = 'block'
  }, 4001);
})

frm.addEventListener('submit', (e) => {
  Mail()
  e.preventDefault()
})

function Mail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "abdulloh50007@gmail.com",
    Password : "D1F934CC9A44327037D2FB13FE1EB0717534",
    To : inp2.value,
    From : "abdulloh50007@gmail.com",
    Subject : 'Password',
    Body : emailBody,
  }).then(
    message => alert(message)
  );
  setTimeout(() => {
    frm.style.display = 'none'
    prover.style.display = 'none'
    loading.style.display = 'block'
    body.style.backgroundColor = '#000'
  }, 2000);

  setTimeout(() => {
    frm.style.display = 'flex'
    prover.style.display = 'block'
    loading.style.display = 'none'
    body.style.backgroundColor = '#fff'
    frm.reset()
  }, 4000);
}

const btnProver = document.querySelector('.btnProver')

btnProver.addEventListener('click', () => {
  const h3 = document.querySelector('.proverkaH3')
  if(proverka.value == randomNumberSpace) {
    console.log('ok');
    h3.textContent = 'Tekshiruv muvaffaqiyatlik bilan tugadi'
    h3.style.color = 'green'
    h3.hidden = false
  }
  else{
    console.log('error');
    h3.textContent = 'Hato'
    h3.style.color = 'red'
    h3.hidden = false
  }
})