const button1 = document.querySelector("#send1")
const button2 = document.querySelector("#send2")
const button3 = document.querySelector("#send3")
const button4 = document.querySelector("#send4")

button1.addEventListener("click", function () {
    const inputTime = document.querySelector(".input1")
    const sec = Number(inputTime.value)
    
    if (!sec) {
      setAnswer("Tempo inválido", false)
      return
    }

    const result = secToMin(sec)
    const msg = `${sec} segundos equivale a ${result} minutos`
    setAnswer(msg, true)
});

button2.addEventListener("click", function () {
  const inputTime = document.querySelector(".input2")
  const min = Number(inputTime.value)

  if (!min) {
    setAnswer("Tempo inválido", false)
    return
  }

  const result = minToSec(min)
  const msg = `${min} minutos equivale a ${result} segundos`
  setAnswer(msg, true)
})

button3.addEventListener("click", function () {
  const inputTime = document.querySelector(".input3")
  const min = Number(inputTime.value)

  if (!min) {
    setAnswer("Tempo inválido", false)
    return
  }

  const result = minToHrs(min)
  const msg = `${min} minutos equivale a ${result} horas`
  setAnswer(msg, true)
})

button4.addEventListener("click", function () {
  const inputTime = document.querySelector(".input4")
  const hrs = Number(inputTime.value)

  if (!hrs) {
    setAnswer("Tempo inválido", false)
    return
  }

  const result = hrsToMin(hrs)
  const msg = `${hrs} horas equivale a ${result} minutos`
  setAnswer(msg, true)
})

function secToMin(sec) {
  const result = sec / 60
  return result.toFixed(2).replace(/[.,]00$/, "")
}

function minToSec(min) {
  const result = min * 60
  return result.toFixed(2).replace(/[.,]00$/, "")
}

function minToHrs(min) {
  const result = min / 60
  return result.toFixed(2).replace(/[.,]00$/, "")
}

function hrsToMin(hrs) {
  const result = hrs * 60
  return result.toFixed(2).replace(/[.,]00$/, "")
}

function setP() {
  const p = document.createElement("p")
  p.classList.add("result")
  return p
}

function setAnswer(msg, isValid) {
  const answer = document.querySelector(".answer")
  answer.innerHTML = " "

  const p = setP()

  if (isValid) {
    p.classList.add("p-answer")
  } else {
    p.classList.add("bad")
  }
  p.innerHTML = msg
  answer.appendChild(p)
}

/*
function secToMin() {
  button1.addEventListener('click', () => {
    const inputTime = document.querySelector(".input1")
    const sec = Number(inputTime.value)

    if (!sec) {
      const invalid = '<p class="js">Tempo inválido.</p>'
      button1.insertAdjacentHTML('afterend', invalid)
      return
    } else {
      const result = sec / 60
      const valid = `<p class="js">${sec} segundos equivale a ${result} minutos</p>`
      button1.insertAdjacentHTML("afterend", valid)
      console.log(result)
    }
    console.log(sec)
  })


}

secToMin()
*/



