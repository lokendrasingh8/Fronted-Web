// Q2. String Manipulation Report
// ---------------------------------------------
let productName = " wireless headphones PRO ";


let cleanedName = productName.trim();


cleanedName = cleanedName.toLowerCase(); // "wireless headphones pro"


cleanedName = cleanedName
  .split(" ") // Split into words → ["wireless", "headphones", "pro"]
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
  .join(" "); // Join back into a single string

cleanedName = cleanedName.replace("Pro", "Pro Edition");
console.log("Cleaned Product Title:", cleanedName);
console.log("Title Length:", cleanedName.length);
