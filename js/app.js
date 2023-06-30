window.addEventListener("scroll" , e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)

})
gsap.registerPlugin(scrollTrigger, scrollSmoother)
scrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})