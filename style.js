// js funtion element
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

let copyCount = Number(getElement('copy_count').innerText)
const coinBtn = getElement('coin_btn')
const callButton = getElement('call_butoon')
let totalCount = Number(getElement('total_coin').innerText)
const copyButton = getElement('copyBtn')

// heart icon start here

const heartIcon = document.getElementsByClassName('heart_icon')
const heartBtn = getElement('heart_btn').innerText
let countHeartButton = Number(heartBtn)

// heart icon end here

// call button praent

const callBox = getElement('service_box')
callBox.addEventListener('click', function (e) {

  if (e.target.className.includes("copy_button")) {

    const callNumber = e.target.parentNode.parentNode.children[3].innerText
    navigator.clipboard.writeText(callNumber);
    copyCount++;
    document.getElementById('copy_count').innerText = copyCount;
    return alert("Number copied");
  }
  if (e.target.className.includes('call_butoon')) {
    const buttonEvent = e.target
    const cardtitle = buttonEvent.parentNode.parentNode.children[1].innerText
    const callNumber = buttonEvent.parentNode.parentNode.children[3].innerText
    const asideContainer = getElement('history_container')

    totalCount -= 20;
    document.getElementById('total_coin').innerText = totalCount
    if (totalCount <= 0) {
      alert(`❌ You don't have available coins`);
      return;
    }
    const div = document.createElement('div')
    const currentDate = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const currentTime12Hour = currentDate.toLocaleString("en-BD", options);
    div.innerHTML = `
           <div class="flex justify-between items-center bg-[#f5fff6] md:mt-3 w-full p-2 rounded-md">
            <div class="">
              <h2 class="font-semibold">${cardtitle}</h2>
              <h2 class="mt-1 font-semibold">${callNumber}</h2>
            </div>
            <p class="font-semibold">${currentTime12Hour}</p>
          </div>
    `
    asideContainer.appendChild(div);
    return alert(`📞 Calling ${cardtitle}, ${callNumber}...`);
  }
})

// heart icon loop start here

for (let hert of heartIcon) {
  hert.addEventListener('click', function () {
    countHeartButton += 1;
    document.getElementById('heart_btn').innerText = countHeartButton
  })
}

// clear history

document.getElementById('clear_btn').addEventListener('click', function () {
  document.getElementById('history_container').innerHTML = ' '
})


