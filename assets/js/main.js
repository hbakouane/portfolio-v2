let navbar = document.querySelector('#navbar')
let contactForm = document.querySelector('#contactForm')

let handleNavbarOnScroll = () => {
    document.addEventListener('scroll', event => {
        if (window.scrollY > 150) {
            navbar.classList.add('blurred')
            navbar.parentElement.parentElement.classList.remove('bg-white', 'bg-dark')
        } else {
            navbar.classList.remove('blurred')
            navbar.parentElement.parentElement.classList.add('bg-white')
        }
    })
}

let switchToPreviousTestimonial = btn => {
    let target = btn.getAttribute('target')
    let activeTestimonial = document.querySelector('.testimonial.active')
    let key = activeTestimonial.getAttribute('data-key')
    let nextBtn = document.querySelector('.testmonial-btn[target="next"]')

    if (previousTestimonial = document.querySelector('.testimonial[data-key="' + (parseInt(key) - 1) + '"]')) {
        activeTestimonial.classList.remove('active')
        previousTestimonial.classList.add('active')
        btn.classList.remove('disabled', 'border-0')
        nextBtn.classList.remove('disabled', 'border-0')
    } else {
        btn.classList.add('disabled', 'border-0')
        nextBtn.classList.remove('disabled', 'border-0')
    }
}

let switchToNextTestimonial = btn => {
    let target = btn.getAttribute('target')
    let activeTestimonial = document.querySelector('.testimonial.active')
    let key = activeTestimonial.getAttribute('data-key')
    let previousBtn = document.querySelector('.testmonial-btn[target="previous"]')

    if (nextTestimonial = document.querySelector('.testimonial[data-key="' + (parseInt(key) + 1) + '"]')) {
        activeTestimonial.classList.remove('active')
        nextTestimonial.classList.add('active')
        btn.classList.remove('disabled', 'border-0')
        previousBtn.classList.remove('disabled', 'border-0')
    } else {
        btn.classList.add('disabled', 'border-0')
        previousBtn.classList.remove('disabled', 'border-0')
    }
}

let switchMode = (switchToMode = 'dark', changeMode = false) => {
    let elements = document.querySelectorAll('*')
    let logo = navbar.querySelector('.logo')
    
    elements.forEach(el => {
        let classes = { // class => replacement
            'bg-white': 'bg-dark',
            'bg-light': 'bg-dark-light',
            'bg-gray': 'bg-dark-light',
            'bg-main': 'bg-main-dark',
            'btn-main': 'btn-main-dark',
            'text-main': 'text-main-dark',
            'text-dark': 'text-white',
        }
        
        if (switchToMode === 'light') {
            Object.keys(classes).forEach((className, index) => {
                el.classList.contains(Object.values(classes)[index])
                ? el.classList.replace(Object.values(classes)[index], className)
                : null
            })

            logo.src = './assets/images/logo.png'
            
            localStorage.setItem('mode', 'light')
        } else {
            Object.keys(classes).forEach((className, index) => {
                el.classList.contains(className)
                    ? el.classList.replace(className, Object.values(classes)[index])
                    : null
            })

            logo.src = './assets/images/logo-dark.png'

            localStorage.setItem('mode', 'dark')
        }
    })
}

localStorage.getItem('mode') === 'dark'
    ? switchMode('dark')
    : null

contactForm.addEventListener('submit', event => {
    event.preventDefault()
    alert('Do your magic')
})

handleNavbarOnScroll()
