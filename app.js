const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
        alert("Something went wrong: " + err)
    }
}

shareButtons.forEach(shareButton =>shareButton.addEventListener('click', copyText));




const allshareButton = document.querySelector('.share-button')


async function copyTexts() {

  
  const alink = this.getAttribute('alink')
  console.log(alink)
  try {
      await navigator.clipboard.writeText(alink)
      alert("Copied the text: " + alink)
  } catch (err) {
      console.error(err)
      alert("Something went wrong: " + err)
  }

}
console.log(allshareButton)

allshareButton.addEventListener('click', copyTexts);

