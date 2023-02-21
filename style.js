// H1 Style
var stylesH1 = {
  "font-family": "'Roboto Slab', serif",
  "font-weight": "800",
  size: "36px",
  "line-height": "42px",
  "letter-spacing": "0.065em",
  color: "#F0F0F0",
  "text-align": "center",
  display: "block",
};

var headingOne = document.getElementById("heading1");
Object.assign(headingOne.style, stylesH1);

const elements = document.querySelector("*");
elements.style.boxSizing = "border-box";

// H2 Style
const headerTwo = document.getElementsByTagName("h2");

for (i = 0; i < headerTwo.length; i++) {
  headerTwo[i].style.color = "#F0F0F0";
  headerTwo[i].style.fontFamily = "'Roboto Slab', serif";
  headerTwo[i].style.fontWeight = "700";
  headerTwo[i].style.size = "24px";
  headerTwo[i].style.lineHeight = "28px";
  headerTwo[i].style.letterSpacing = "0.065rem";
}

// H3 Style
const headerThree = document.getElementsByTagName("h3");

for (i = 0; i < headerThree.length; i++) {
  headerThree[i].style.color = "#F0F0F0";
  headerThree[i].style.fontFamily = "'Roboto Slab', serif";
  headerThree[i].style.fontWeight = "400";
  headerThree[i].style.size = "14px";
  headerThree[i].style.lineHeight = "16px";
  headerThree[i].style.letterSpacing = "0.065rem";
}

// H4 Style
const headerFour = document.querySelectorAll("h4");

for (i = 0; i < headerFour.length; i++) {
  headerThree[i].style.color = "#F0F0F0";
  headerFour[i].style.fontFamily = "'Roboto Slab', serif";
  headerFour[i].style.fontWeight = "400";
  headerFour[i].style.size = "12px";
  headerFour[i].style.lineHeight = "15px";
  headerFour[i].style.letterSpacing = "0.065rem";
  headerFour[i].style.margin = "0 0 12px 22px";
}

const leftHeader = document.querySelectorAll(".left-side .the-header");

for (i = 0; i < leftHeader.length; i++) {
  leftHeader[i].style.padding = "24px 12px";
  leftHeader[i].style.color = "#F0F0F0";
  leftHeader[i].style.marginBottom = "4px";
  leftHeader[i].style.backgroundColor = "#323232";
}

const headerSpan = document.querySelectorAll(".left-side .the-header span");

for (i = 0; i < headerSpan.length; i++) {
  headerSpan[i].style.textAlign = "center";
  headerSpan[i].style.display = "block";
}

const headerImage = document.querySelectorAll(".left-side .the-header img");

for (i = 0; i < headerImage.length; i++) {
  headerImage[i].style.transform = "translateY(2px)";
  headerImage[i].style.width = "15px";
  headerImage[i].style.height = "15px";
}

const headerLinks = document.querySelectorAll(".left-side .the-header a");

for (i = 0; i < headerLinks.length; i++) {
  headerLinks[i].style.margin = "12px auto";
  headerLinks[i].style.textDecoration = "none";
  headerLinks[i].style.color = "white";
  headerLinks[i].style.display = "block";
  headerLinks[i].style.textAlign = "center";
}

const downHeader = document.querySelectorAll(".down-header");

for (i = 0; i < downHeader.length; i++) {
  downHeader[i].style.padding = "36px 0 36px 0";
  downHeader[i].style.textAlign = "center";
  downHeader[i].style.color = "#F0F0F0";
  downHeader[i].style.backgroundColor = "#323232";
}

const downHeaderH2 = document.querySelectorAll(".down-header h2");

for (i = 0; i < downHeaderH2.length; i++) {
  downHeaderH2[i].style.borderBottom = "solid 2px white";
  downHeaderH2[i].style.margin = "0 39px 14px 39px";
  downHeaderH2[i].style.paddingBottom = "14px";
}

const leftSideSpan = document.querySelectorAll(".left-side div h3 span");

for (i = 0; i < leftSideSpan.length; i++) {
  leftSideSpan[i].style.padding = "12px 70px";
  leftSideSpan[i].style.margin = "4px 16px";
  leftSideSpan[i].style.boxSizing = "border-box";
  leftSideSpan[i].style.border = "solid 2px white";
  leftSideSpan[i].style.display = "block";
}

const leftSideSpan1 = document.querySelectorAll(
  ".left-side div h3:nth-of-type(1) span"
);

for (i = 0; i < leftSideSpan1.length; i++) {
  leftSideSpan1[i].style.background =
    "linear-gradient(to right, white 70%, black 0%)";
}

const leftSideSpan2 = document.querySelectorAll(
  ".left-side div h3:nth-of-type(2) span"
);

for (i = 0; i < leftSideSpan2.length; i++) {
  leftSideSpan2[i].style.background =
    "linear-gradient(to right, white 30%, black 0%)";
}

const leftSideSpan3 = document.querySelectorAll(
  ".left-side div h3:nth-of-type(3) span"
);

for (i = 0; i < leftSideSpan3.length; i++) {
  leftSideSpan3[i].style.background =
    "linear-gradient(to right, white 60%, black 0%)";
}

const leftSideSpan4 = document.querySelectorAll(
  ".left-side div h3:nth-of-type(4) span"
);

for (i = 0; i < leftSideSpan4.length; i++) {
  leftSideSpan4[i].style.background =
    "linear-gradient(to right, white 40%, black 0%)";
}

const leftSideSpan5 = document.querySelectorAll(
  ".left-side div h3:nth-of-type(5) span"
);

for (i = 0; i < leftSideSpan5.length; i++) {
  leftSideSpan5[i].style.background =
    "linear-gradient(to right, white 60%, black 0%)";
}

const main = document.querySelectorAll("#only-main");

for (i = 0; i < main.length; i++) {
  main[i].style.alignItems = "center";
  main[i].style.display = "flex";
  main[i].style.flexDirection = "row";
}

const rightSideh2 = document.querySelectorAll(".right-side h2");

for (i = 0; i < rightSideh2.length; i++) {
  rightSideh2[i].style.color = "black";
  rightSideh2[i].style.borderBottom = "solid 2px black";
  rightSideh2[i].style.margin = "24px 0px 24px 22px";
  rightSideh2[i].style.paddingBottom = "14px";
}

const rightSideparagraph1 = document.querySelectorAll(
  ".right-side p:nth-of-type(1)"
);

for (i = 0; i < rightSideparagraph1.length; i++) {
  rightSideparagraph1[i].style.margin = "0 0 24px 22px";
}

const rightSideparagraph2 = document.querySelectorAll(
  ".right-side p:nth-of-type(2)"
);

for (i = 0; i < rightSideparagraph2.length; i++) {
  rightSideparagraph2[i].style.margin = "0 39px 12px 22px";
}

const rightSideparagraph3 = document.querySelectorAll(
  ".right-side p:nth-of-type(3)"
);

for (i = 0; i < rightSideparagraph3.length; i++) {
  rightSideparagraph3[i].style.margin = "12px 0 24px 40px";
}

const rightSideparagraph4 = document.querySelectorAll(
  ".right-side p:nth-of-type(4)"
);

for (i = 0; i < rightSideparagraph4.length; i++) {
  rightSideparagraph4[i].style.margin = "0 0 24px 22px";
}

const rightSideparagraph5 = document.querySelectorAll(
  ".right-side p:nth-of-type(5)"
);

for (i = 0; i < rightSideparagraph5.length; i++) {
  rightSideparagraph5[i].style.margin = "0 0 12px 22px";
}

const rightSideparagraph6 = document.querySelectorAll(
  ".right-side p:nth-of-type(6)"
);

for (i = 0; i < rightSideparagraph6.length; i++) {
  rightSideparagraph6[i].style.margin = "0 0 0 40px";
}

const rightSidelink = document.querySelectorAll(".right-side a");

for (i = 0; i < rightSidelink.length; i++) {
  rightSidelink[i].style.margin = "0 0 6px 22px";
}

const rightSidespan = document.querySelectorAll(".right-side span");

for (i = 0; i < rightSidespan.length; i++) {
  rightSidespan[i].style.margin = "0 0 12px 6px";
  rightSidespan[i].style.color = "black";
}

const rightSidespanImage = document.querySelectorAll(
  ".right-side span img:nth-of-type(1), span img:nth-of-type(3)"
);

for (i = 0; i < rightSidespanImage.length; i++) {
  rightSidespanImage[i].style.width = "15px";
  rightSidespanImage[i].style.height = "15px";
  rightSidespanImage[i].style.marginLeft = "22px";
}

const rightSidespanImage2 = document.querySelectorAll(
  ".right-side span img:nth-of-type(2)"
);

for (i = 0; i < rightSidespanImage2.length; i++) {
  rightSidespanImage2[i].style.width = "15px";
  rightSidespanImage2[i].style.height = "15px";
  rightSidespanImage2[i].style.marginLeft = "31px";
}

const hexagon = document.querySelectorAll(".hex");

for (i = 0; i < hexagon.length; i++) {
  hexagon[i].style.marginBottom = "100px";
  hexagon[i].style.width = "208px";
  hexagon[i].style.height = "120px";
  hexagon[i].style.backgroundColor = "white";
  hexagon[i].style.position = "relative";
}

const hexagonBefore = document.querySelectorAll(".hex:before, .hex:after");

for (i = 0; i < hexagonBefore.length; i++) {
  hexagonBefore[i].style.content = "";
  hexagonBefore[i].style.borderLeft = "104px solid transparent";
  hexagonBefore[i].style.borderRight = "104px solid transparent";
  hexagonBefore[i].style.position = "absolute";
  hexagonBefore[i].style.top = "-59px";
  hexagonBefore[i].style.borderBottom = "60px solid white";
  hexagonBefore[i].style.bottom = "-59px";
  hexagonBefore[i].style.borderTop = "60px solid white";
}

const hexagonImage = document.querySelectorAll(".hex img");

for (i = 0; i < hexagonImage.length; i++) {
  hexagonImage[i].style.display = "flex";
  hexagonImage[i].style.overflow = "hidden";
  hexagonImage[i].style.width = "150px";
  hexagonImage[i].style.height = "150px";
}
