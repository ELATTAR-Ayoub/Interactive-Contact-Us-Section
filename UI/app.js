

document.querySelector('body').addEventListener('mousemove', eyeBall);
const circle_cursor = document.getElementById('circle-cursor');
const allEyes = document.querySelectorAll(".eye");
const middle_eye = document.getElementById('middle-eye')
const blushed_lines = document.getElementById('blushed-lines')
const power_switch_contact = document.getElementById('power-switch');
const power_switch_contact_input = document.getElementById('power-switch-input');
const contact_fake_container = document.getElementById('contact-fake-container');
const real_contact_container = document.getElementById('real-contact-container');



middle_eye.addEventListener('mouseover', eyeBleshStarts);
middle_eye.addEventListener('mouseleave', eyeBleshEnds);
eyeBleshEnds();
middle_eye.addEventListener('click', lightUpContactSWitch);
power_switch_contact_input.addEventListener('click', showRealContainer);




function eyeBall() {
    allEyes.forEach(function (allEyes) {
        let x = (allEyes.getBoundingClientRect().left) + (allEyes.clientWidth / 2);
        let y = (allEyes.getBoundingClientRect().top) + (allEyes.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        allEyes.style.transform = "rotate(" + rotation + "deg)"

    });
}

// function eyeClose() {
//     eye.style.backgroundColor = "#1e1e1e";
// }

function eyeBleshStarts() {
    if (blushed_lines.style.visibility == 'hidden') {
        blushed_lines.style.visibility = 'visible';
        blushed_lines.style.animation = "blushed-opacity 2s alternate ease-in-out";
    }
}

function eyeBleshEnds() {
    if (blushed_lines.style.visibility != 'hidden') {
        blushed_lines.style.visibility = 'hidden';
        blushed_lines.style.animation == "none";
    }
}

function lightUpContactSWitch() {
    if (power_switch_contact.style.visibility == 'hidden') {
        power_switch_contact.style.visibility = 'visible';
    } else {
        power_switch_contact.style.visibility = 'hidden';
    }
}

function showRealContainer() {
    if (power_switch_contact_input.checked == true) {
        contact_fake_container.style.clipPath = 'circle(80px at 50% 90%)';
        ring.style.display = 'none';
    }
    else {
        contact_fake_container.style.clipPath = 'circle(150% at 50% 90%)';
    }

}
