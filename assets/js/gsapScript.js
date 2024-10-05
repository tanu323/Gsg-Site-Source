var tl = gsap.timeline({
    repeat: -1
});

tl.to(".imagecontainer", {
    width: "100%",
    ease: "expo.inOut",
    stagger: 3
}, 'flag')
    .to(".headingmainImg h1", {
        ease: "expo.inOut",
        stagger: 3,
        top: 0
    }, 'flag')
    .to(".textmainImg p", {
        ease: "expo.inOut",
        stagger: 3,
        top: 0
    }, 'flag')
    .to(".headingmainImg h1", {
        delay: 3,
        ease: "expo.inOut",
        stagger: 3,
        top: "-50%"
    }, 'flag')
    .to(".textmainImg p", {
        delay: 3,
        ease: "expo.inOut",
        stagger: 3,
        top: "-150%"
    }, 'flag')