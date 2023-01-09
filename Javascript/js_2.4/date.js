function datePrinter() {
  const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const dayOfMonth = new Date().getDate();
  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear();
  return `Today is ${dayOfWeek} the ${dayOfMonth} of ${month} ${year}`;

}
console.log(datePrinter());
