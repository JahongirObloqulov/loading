const index = document.querySelectorAll(".index");
for (let i = 0; i < index.length; i++) {
  const myTimeout = setTimeout(myGreeting, 2500);
  function myGreeting() {
    index[i].style.color = "red";
  }
  const myTimeout2 = setTimeout(myGreeting2, 5000);
  function myGreeting2() {
    index[i].style.color = "yellow";
  }
  const myTimeout3 = setTimeout(myGreeting3, 7500);
  function myGreeting3() {
    index[i].style.color = "chocolate";
  }
  const myTimeout4 = setTimeout(myGreeting4, 10000);
  function myGreeting4() {
    index[i].style.color = "green";
  }
}
