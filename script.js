const buttonOne = document.getElementById("fooButton");
const buttonTwo = document.getElementById("barButton");
const buttonThree = document.getElementById("fooBarButton");
const body = document.querySelector("main")

buttonOne.addEventListener('click', function () {
  const hTag = document.createElement('h3');
  hTag.textContent = "Foo";
  body.appendChild(hTag);
});

buttonTwo.addEventListener('click', function () {
  const hTag = document.createElement('h3');
  hTag.textContent = "Bar";
  body.appendChild(hTag);
});

buttonThree.addEventListener('click', function () {
  const hTag = document.createElement('h3');
  hTag.textContent = "FooBar";
  body.appendChild(hTag);
});