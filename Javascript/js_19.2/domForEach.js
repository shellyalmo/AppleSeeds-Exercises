const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
const names = [];
const ids = [];
users.forEach((user) => {
  names.push(user.firstName + " " + user.lastName);
  ids.push(user.id);
});
const newOl = document.createElement("ol");
for (let i = 0; i < names.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = names[i];
  li.setAttribute("data-id", ids[i]);
  newOl.appendChild(li);
}
document.body.appendChild(newOl);

// 2. Remove the bullet points of the ordered list with JavaScript.
newOl.style.listStyleType = "none";

// 3. Create a custom data attribute called “data-id” and attach the id value to each li. -DONE
