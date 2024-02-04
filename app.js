const shareButtons = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
    // Prevent the button from navigating to the site
    e.preventDefault();
    const link = this.getAttribute('link');

    try {
        await navigator.clipboard.writeText(link);
        alert("Copied the text: " + link);
    } catch (err) {
        console.error(err);
        alert("Something went wrong: " + err);
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));

const allshareButton = document.querySelector('.share-button');

async function copyTexts() {
    const alink = this.getAttribute('alink');

    try {
        await navigator.clipboard.writeText(alink);
        alert("Copied the text: " + alink);
    } catch (err) {
        console.error(err);
        alert("Something went wrong: " + err);
    }
}

allshareButton.addEventListener('click', copyTexts);
