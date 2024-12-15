let currentPage = 0;
const pages = document.querySelectorAll(".note-page");
const texts = [
  "Hiiiiiiiiii pata hai tumse zada me excited tha 😅 birthday ke liye mene bhut kuch socha like shayri drawing and agib agib chizein bhi😅 but kuch samjh nahi aa raha tha, tho web page banane ke bareme socha but isme bhi kuch samjh nhi aa raha tha mene extraordinary bhi try kiya but nahi ho pa raha tha isliya simple he bana paya 😔 i wish tumhe ye acha lage and kuch bhi utla pulta mt sochna samjhi choti bachi ",
  "Madam Your Eyes 👀🔥 kitni yrr words nahi mil rahe kya bolu 😅 like Ufff!!! ekdum sharp kisi ko bhi possess kar sakti hai. Lips bhi tasty hai sorry😅 but such me perfect shaped as i say everytime 😁. Madam You Are Perfect According To Me baki logo kuch bhi bole jo hai so hai, and kabhi khud ke bare me ulta pulta ya bura mt bolna ok Madam me tho accha hii bolunga 😌 because you are 😎 or or aage dekho  ",
  "Thank you for being born 😁😂. Thank you for coming in my life😌. Thank you mera pagalpn🥴 jhalne ke liye. Thank you meri zid Stubbornness😅 ko handle karne ke liye or koi nhi kar sakta. Thank you mujhe samjha ne ke liye. Thank you mujhe hasa😁 ne ke liye. Thank you meri agib agib baat sune ke liye. Thank You mera mood sahi karne ke liye jabhi off hota tha. Bhuuttttt sara Thank You SHUKRIYE😁",
  "Oye madam listen, tum bhut strong ho samjhi i know sometime hard hota sb handle karna but still tum kar leti ho such me never think 'me hi kyu' if kuch bhi ho tho mujhe batana me pakka tho nahi but i will try my best to solve it and ahsan wagare mt sochna samjhi it's my choice samjhi tum bhut zada sochti ho thoda iss sar ke andar jo hai usko aaram do and aapna dhyan rakha karo samjhi khana khaya karo ittu si hoo and tention mt liya karo sb thik ho jayega choti bachi 😁 I just want tum kabhi na ro o hamesha happy raho. "
];

function typeText(pageIndex) {
  const typingElement = pages[pageIndex].querySelector("p");
  let index = 0;

  function type() {
    if (index < texts[pageIndex].length) {
      typingElement.textContent += texts[pageIndex].charAt(index);
      index++;
      setTimeout(type, 100); // Adjust typing speed here
    }
  }

  typingElement.textContent = ""; // Clear previous content
  type(); // Start typing effect
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("hidden"); // Hide current page
    currentPage++;
    pages[currentPage].classList.remove("hidden"); // Show next page
    typeText(currentPage); // Trigger typing effect for new page
  }
}

// Initialize the typing effect for the first page on load
document.addEventListener("DOMContentLoaded", () => {
  typeText(currentPage);
});
