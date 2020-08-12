function startCycle(){
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = -1;
    return function(){
        if (++i !== rainbowColors.length) return rainbowColors[i];
        else return rainbowColors[i = 0];
    }
};
let cycle = startCycle();
let logo = document.querySelector('.logo-heading');
logo.style.cursor = 'pointer';
logo.addEventListener('click', event => {
    event.target.animate({color: cycle()}, {
        duration: 1000,
        easing: 'linear',
        fill: 'forwards'
    });
});

// Stop nav buttons from updating url
let navLinks = document.querySelectorAll('a.nav-link');
navLinks.forEach(el => {
    el.addEventListener('click', event => {
        event.preventDefault();
    });
});


// Give the nav buttons a border on hover
navLinks.forEach(el => {
    let defaultStyle = el.style;
    el.addEventListener('mouseover', event => {
        event.target.style['background-color'] = 'rgba(200, 200, 0, 0.4)';
        event.target.style['border-radius'] = '10px';
    });
    el.addEventListener('mouseout', event => {
        event.target.style = defaultStyle;
    });
});

// Make the words 'Fun Bus' in the intro spin! Fun!
document.querySelector('.intro h2 span').addEventListener('mouseover', event => {
    event.target.animate([{transform: 'rotate(360deg)'}], {
        duration: 500,
        easing: 'ease-in-out'
    });
});

// Make the heading of the different sections spin! Quirky!
document.querySelector('.text-content h2').addEventListener('click', event => {
    event.target.style['transform-origin'] = '0 0';
    event.target.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(2) translate(0)', color: 'yellow'},
        {transform: 'scale(1)'}
    ], 1000);
});

document.querySelectorAll('.content-section img').forEach(el => {
    el.addEventListener('mouseover', event => {
        event.target.animate([{
            filter: 'drop-shadow(10px 10px 10px rgb(120,120,120))',
            transform: 'scale(1.05)'
        }], {
            duration: 250,
            easing: 'linear',
            fill: 'forwards'
        });
    });
    el.addEventListener('mouseout', event => {
        event.target.animate([{
            filter: 'none',
            transform: 'scale(1)'
        }], {
            duration: 250,
            easing: 'linear',
            fill: 'forwards'
        });
    })
});

document.querySelectorAll('.destination').forEach(el => {
    el.style['border-radius'] = '15px';
    el.style.transition = 'border 0.25s';
    el.style.padding = '5px';
    el.addEventListener('mouseenter', event => {
        event.target.style.border = '1px solid rgb(200, 200, 0)'
        event.target.animate([{
            filter: 'drop-shadow(10px 10px 10px rgb(120,120,120))',
            transform: 'scale(1.05)'
        }], {
            duration: 250,
            easing: 'linear',
            fill: 'forwards'
        });
        });
    el.addEventListener('mouseleave', event => {
        event.target.style.border = 'none';
        event.target.animate([{
            filter: 'none)',
            transform: 'scale(1)'
        }], {
            duration: 250,
            easing: 'linear',
            fill: 'forwards'
        });
    });
});
    