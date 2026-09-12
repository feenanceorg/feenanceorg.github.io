/* =========================================================
   FEENANCE
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   CONTRACT ADDRESS
   ========================================================= */

const CONTRACT_ADDRESS =
  "0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /*
     -------------------------------------------------------
     CONTRACT ADDRESS
     -------------------------------------------------------
  */

  const contractButton =
    document.getElementById("contractAddress");

  const copyStatus =
    document.getElementById("copyStatus");


  if (contractButton) {

    /*
       Pastikan data-address selalu tersedia.
    */

    const address =
      contractButton.dataset.address ||
      CONTRACT_ADDRESS;


    contractButton.dataset.address =
      address;


    contractButton.textContent =
      address;


    /*
       Klik hanya menyalin ADDRESS.
       "CA:" tidak ikut disalin.
    */

    contractButton.addEventListener(
      "click",
      async () => {

        try {

          await copyText(address);

          showCopied();

        } catch (error) {

          console.error(
            "Unable to copy contract address:",
            error
          );

        }

      }
    );

  }


  /*
     -------------------------------------------------------
     COPY FUNCTION
     -------------------------------------------------------
  */

  async function copyText(text) {

    /*
       Modern Clipboard API
    */

    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {

      await navigator.clipboard.writeText(text);

      return;

    }


    /*
       Fallback untuk browser/local environment
    */

    const textarea =
      document.createElement("textarea");


    textarea.value = text;

    textarea.style.position =
      "fixed";

    textarea.style.left =
      "-9999px";

    textarea.style.top =
      "0";

    textarea.style.opacity =
      "0";


    document.body.appendChild(
      textarea
    );


    textarea.focus();

    textarea.select();


    const successful =
      document.execCommand("copy");


    textarea.remove();


    if (!successful) {

      throw new Error(
        "Copy command failed."
      );

    }

  }


  /*
     -------------------------------------------------------
     COPIED MESSAGE
     -------------------------------------------------------
  */

  function showCopied() {

    if (!copyStatus) {
      return;
    }


    copyStatus.classList.add(
      "show"
    );


    clearTimeout(
      showCopied.timer
    );


    showCopied.timer =
      setTimeout(() => {

        copyStatus.classList.remove(
          "show"
        );

      }, 1500);

  }


  /*
     -------------------------------------------------------
     LINKS
     -------------------------------------------------------
     
     Masukkan URL asli di sini nanti.
     
     Contoh:
     
     const UNISWAP_URL =
       "https://...";
     
     -------------------------------------------------------
  */


  const UNISWAP_URL = "";

  const PONSFAM_URL = "";

  const X_URL = "";

  const TELEGRAM_URL = "";

  const GITHUB_URL = "";


  /*
     -------------------------------------------------------
     SET LINKS
     -------------------------------------------------------
  */

  setLink(
    "uniswapLink",
    UNISWAP_URL
  );

  setLink(
    "ponsfamLink",
    PONSFAM_URL
  );

  setLink(
    "xLink",
    X_URL
  );

  setLink(
    "telegramLink",
    TELEGRAM_URL
  );

  setLink(
    "githubLink",
    GITHUB_URL
  );


  /*
     -------------------------------------------------------
     LINK HELPER
     -------------------------------------------------------
  */

  function setLink(
    elementId,
    url
  ) {

    const element =
      document.getElementById(
        elementId
      );


    if (!element) {
      return;
    }


    /*
       Kalau URL belum diisi,
       jangan arahkan ke "#".
    */

    if (
      !url ||
      url.trim() === ""
    ) {

      element.addEventListener(
        "click",
        (event) => {

          event.preventDefault();

        }
      );

      return;

    }


    element.href =
      url;

  }

});