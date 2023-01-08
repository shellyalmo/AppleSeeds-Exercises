function datePrinter() {
  const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const dayOfMonth = new Date().getDate();
  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear();
  console.log(`Today is ${dayOfWeek} the ${dayOfMonth} of ${month} ${year}`);
  return 1
}
datePrinter();
