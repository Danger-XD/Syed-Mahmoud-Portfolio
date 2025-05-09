document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".downCv-btn").addEventListener("click", function () {
    const cvPath = "assets/Syed Mahmoud Sobhani___CV.pdf"; // Change the path to your CV file
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Syed Mahmoud Sobhani_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
