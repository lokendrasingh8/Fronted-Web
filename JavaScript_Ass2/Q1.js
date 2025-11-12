let bonus = 5000;  // Global variable accessible in all scopes
function calculateSalary() {
    // Local variable declaration
    let salary = 40000;         // Local variable only inside this function
    let isPermanent = true;     // Change this to false to see difference
    if (isPermanent) {
        let totalSalary = salary + bonus;
        console.log("Employee is permanent.");
        console.log("Total Salary (with bonus):", totalSalary);
    } else {
        console.log("Employee is not permanent.");
        console.log("Total Salary (no bonus):", salary);
    }
    
    // Demonstrating local vs global scope
    console.log("Inside function - bonus value:", bonus);
}

calculateSalary();
console.log("\nOutside function - global bonus:", bonus);
