const body = document.body
const onlyMain = document.createElement('main');
document.body.appendChild(onlyMain);
onlyMain.className = 'only-main';

const leftSidediv = document.createElement('div');
onlyMain.append(leftSidediv);
leftSidediv.className = 'left-side';

const theHeader = document.createElement('header');
leftSidediv.append(theHeader)
theHeader.className = 'the-header';

const hexagon = document.createElement('div');
theHeader.append(hexagon)
hexagon.className = 'hex';
createImg('CV2.png', '', hexagon);

makeElm('h1', 'Marian Cosma', theHeader);
makeElm('span', 'Frontend developer', theHeader);

let email = document.createElement('a');
createImg('mail.png','', email);
let linkEmail = document.createTextNode("adrian_cosma97@yahoo.ro");
email.appendChild(linkEmail);
email.title = "MyEmail";
email.href = "mailto:adrian_cosma97@yahoo.ro";
theHeader.append(email);
email.className = 'email';

const spanWhiteloc = document.createElement('span');
theHeader.append(spanWhiteloc)
spanWhiteloc.className = 'white';
createImg('loc white.png', 'Cluj-Napoca', spanWhiteloc);
makeElm('text', 'Cluj-Napoca', spanWhiteloc);

let phone = document.createElement('a');
createImg('phone.png', '', phone);
let linkPhone = document.createTextNode("0764978575");
phone.appendChild(linkPhone);
phone.title = "PhoneNumber";
phone.href = "tel:0764978575";
theHeader.append(phone);


const downHeader = document.createElement('div');
downHeader.className = 'down-header';
leftSidediv.append(downHeader);

makeElm('h2', 'Skills', downHeader);

const skills = ['JAVASCRIPT', 'HTML', 'CSS', 'PHOTOSHOP', 'AFTER EFFECTS', 'WORDPRESS']; 
makeList(skills, downHeader)  // come back here

const rightSide = document.createElement('div');
rightSide.className = 'right-side';
onlyMain.append(rightSide);

makeElm('h2', 'OBJECTIVE', rightSide);
makeElm('p', 'Looking for an opportunity to grow front-end developmnet skills in an innovative environment.', rightSide);
makeElm('h2', 'EXPERIENCE', rightSide);
makeElm('p', 'Physical Therapist', rightSide);

let ptJob = document.createElement('a');
let ptLinktext = document.createTextNode("Kinetic");
ptJob.appendChild(ptLinktext);
ptJob.title = "Kinetic";
ptJob.href = "https://www.kinetic.ro/";
rightSide.append(ptJob);

// makeElm('span', '', rightSide);
// createImg('calendar.png', '03/2022 - Present', rightSide);

const spanCalendartwo = document.createElement("span");
rightSide.append(spanCalendartwo);

const imgCalendartwo = document.createElement("img");
imgCalendartwo.src = "calendar.png";
imgCalendartwo.innerText = '03/2022 - Present';
spanCalendartwo.appendChild(imgCalendartwo);

const spanLocblack = document.createElement("span");
rightSide.append(spanLocblack);

const imgLocblack = document.createElement("img");
imgLocblack.src = "loc black.png";
imgLocblack.innerText = 'Galati NR.6, parter, Cluj-Napoca';
spanLocblack.appendChild(imgLocblack);

makeElm('p', 'Helping patients to recover from injury and live to their fullest potential', rightSide);
makeElm('h2', 'EDUCATION', rightSide);
makeElm('h4', 'BA: Physical therapy and special motricity', rightSide);

let university = document.createElement('a');
let uLinktext = document.createTextNode("Babes-Bolyai University");
university.appendChild(uLinktext);
university.title = "Babes-Bolyai University";
university.href = "https://sport.ubbcluj.ro/";
rightSide.append(university);

// makeElm('span', '', rightSide);
// createImg('calendar.png', '2017-2020', rightSide);

const spanCalendar = document.createElement("span");
rightSide.append(spanCalendar);

const imgCalendar = document.createElement("img");
imgCalendar.src = "calendar.png";
spanCalendar.appendChild(imgCalendar);

makeElm('h2', 'LANGUAGES', rightSide);
makeElm('h4', 'ROMANIAN', rightSide);
makeElm('p', 'MOTHER LANGUAGE', rightSide);
makeElm('h4', 'ENGLISH', rightSide);
makeElm('p', 'SECOND LANGUAGE', rightSide);
makeElm('p', 'Intermediate', rightSide);

const icons = document.querySelectorAll("span img:nth-of-type(1) , span img:nth-of-type(3)");
for( i = 0; i < icons.length; i++) {
  icons[i].style.transform = 'translateY(2px)';
  icons[i].style.width = '15px';
  icons[i].style.height = '15px';
}

const iconsTwo = document.querySelectorAll("span img:nth-of-type(2)");
for( i = 0; i < iconsTwo.length; i++) {
  iconsTwo[i].style.marginLeft = '31px';
  iconsTwo[i].style.width = '15px';
  iconsTwo[i].style.height = '15px';
}

function makeElm (type, text, target) {
    const elm = document.createElement(type)
    elm.innerText = text
    target.appendChild(elm)
  }

  function createImg (src, text, target) {
    const img = document.createElement('img')
    img.src = src
    img.innerText = text
    target.appendChild(img)
  }

  function addClass (type, text, target) {
    const addClass = document.createAttribute(type)
    addClass.innerText = text
    target.appendChild(addClass)
  }

  function makeList (items = [], target, noText) {
    const h3 = document.createElement('h3')
    items.forEach(item => {
      const span = document.createElement('span')
      span.innerText = noText ? '' : item
      h3.appendChild(span)
    })
    target.appendChild(h3)
  }