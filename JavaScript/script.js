const plans = document.querySelectorAll('.plan')

plans.forEach((plan) => {
    plan.addEventListener('click', () => {
        removeActiveCasses()
        plan.classList.add('active')
    })

}) 

function removeActiveCasses() {
    plans.forEach((plan) => {
          plan.classList.remove('active')
      })

}