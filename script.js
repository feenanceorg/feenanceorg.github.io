/* =========================================
   FEENANCE
   The Fun Side of Finance
========================================= */


/* =========================================
   CONFIGURATION
========================================= */

/*
 * GANTI NILAI INI DENGAN SMART CONTRACT
 * ADDRESS FEENANCE YANG SEBENARNYA.
 *
 * CA HANYA DITULIS DI SINI.
 */

const CONTRACT_ADDRESS = "0xFB7710Bc08fE297d648b2617B8c1e25129D1a2F5";


/*
 * SOCIAL / BUY LINKS
 *
 * Ganti URL di bawah dengan URL asli.
 */

const TELEGRAM_URL = "#";

const X_URL = "#";

const UNISWAP_URL = "#";

const PONSFAMILY_URL = "#";


/* =========================================
   ELEMENTS
========================================= */

const contractElement =
    document.getElementById("contract-address");

const copyButton =
    document.getElementById("copy-ca");

const copyText =
    document.getElementById("copy-text");

const toast =
    document.getElementById("toast");

const telegramLink =
    document.getElementById("telegram-link");

const xLink =
    document.getElementById("x-link");

const uniswapLink =
    document.getElementById("uniswap-link");

const ponsfamilyLink =
    document.getElementById("ponsfamily-link");


/* =========================================
   INSERT CONTRACT ADDRESS
========================================= */

if (contractElement) {
    contractElement.textContent = CONTRACT_ADDRESS;
}


/* =========================================
   INSERT LINKS
========================================= */

if (telegramLink) {
    telegramLink.href = TELEGRAM_URL;
}

if (xLink) {
    xLink.href = X_URL;
}

if (uniswapLink) {
    uniswapLink.href = UNISWAP_URL;
}

if (ponsfamilyLink) {
    ponsfamilyLink.href = PONSFAMILY_URL;
}


/* =========================================
   COPY CONTRACT ADDRESS
========================================= */

async function copyContractAddress() {

    try {

        await navigator.clipboard.writeText(
            CONTRACT_ADDRESS
        );

        showCopiedState();

    } catch (error) {

        /*
         * Fallback untuk browser yang tidak
         * mengizinkan Clipboard API.
         */

        fallbackCopy();

    }
}


/* =========================================
   FALLBACK COPY
========================================= */

function fallbackCopy() {

    const temporaryInput =
        document.createElement("textarea");

    temporaryInput.value =
        CONTRACT_ADDRESS;

    temporaryInput.style.position =
        "fixed";

    temporaryInput.style.opacity =
        "0";

    document.body.appendChild(
        temporaryInput
    );

    temporaryInput.focus();

    temporaryInput.select();

    try {

        document.execCommand("copy");

        showCopiedState();

    } catch (error) {

        showToast("Copy failed");

    }

    document.body.removeChild(
        temporaryInput
    );
}


/* =========================================
   COPIED STATE
========================================= */

function showCopiedState() {

    if (copyText) {
        copyText.textContent = "✓ COPIED";
    }

    showToast("Copied!");

    setTimeout(() => {

        if (copyText) {
            copyText.textContent = "COPY CA";
        }

    }, 1800);
}


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.feenanceToastTimer
    );

    window.feenanceToastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 1600);
}


/* =========================================
   CLICK EVENTS
========================================= */

if (copyButton) {

    copyButton.addEventListener(
        "click",
        copyContractAddress
    );

}


if (contractElement) {

    contractElement.addEventListener(
        "click",
        copyContractAddress
    );

}