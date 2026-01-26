// --------------------------------------------------
// BÀI TẬP JS – CODE MẪU (comment) + VÙNG USER CODE
// Chỉ sửa trong phần "TODO: User code" mỗi bài.
// Giữ lại các console.log tiêu đề để result.html nhận đúng section.
// --------------------------------------------------

// Dữ liệu mẫu (Raw Data)
const members = [
  { id: 1, name: "Đức Vũ", position: "Member", joined: 2023 },
  { id: 2, name: "Hoàng Chuột", position: "Leader", joined: 2022 },
  { id: 3, name: "Nguyễn Hiếu", position: "Designer", joined: 2022 },
];

// ==================================================
// BÀI 1: HOISTING & SCOPE
// CODE MẪU (tham khảo, không chạy):
// printClubName();
// function printClubName() {
//   console.log(club);   // undefined (var hoisting)
//   // console.log(slogan); // ReferenceError (TDZ của const)
// }
// var club = "UTC IT Club";
// const slogan = "Học là làm được";
// ==================================================

// === TODO: User code here ===
printClubName();
function printClubName() {
  //   console.log("Club: ", club);
  //   console.log("Biến: ", slogan);
}

var club = "Ban Web";
let slogan = "Học là làm được";

console.log("Sau khi khai báo - club:", club);
console.log("Sau khi khai báo - slogan:", slogan);
console.log("");

// ==================================================
// BÀI 2: DESTRUCTURING & SPREAD
// CODE MẪU (tham khảo, không chạy):
// const { name, position } = members[0];
// const newMember = { ...members[1], joined: 2025 };
// ==================================================
console.log("=== BÀI 2: DESTRUCTURING & REST/SPREAD ===");

// === TODO: User code here ===
const { memberName, position } = members[0];
const newMember = { ...members[1], joined: 2025 };

console.log("Destructuring từ members[0]:", memberName, position);
console.log("New Member:", newMember);
console.log("");

// ==================================================
// BÀI 3: FOR...OF & THIS & ARROW FUNCTION
// CODE MẪU (tham khảo, không chạy):
// const webTeam = {
//   teamName: "Ban Web UTC",
//   members,
//   show() {
//     for (const m of this.members) {
//       const print = () => console.log(`${this.teamName} - Thành viên: ${m.name}`);
//       print();
//     }
//   },
// };
// webTeam.show();
// ==================================================
console.log("=== BÀI 3: VÒNG LẶP FOR & THIS & ARROW FUNCTION ===");

const webTeam = {
  teamName: "Ban Web UTC",
  members,
  show() {
    // === TODO: User code here ===
    // for (const m of this.members) {
    //   const print = () =>
    //     console.log(`${this.teamName} - Thành viên: ${m.name}`);
    //   print();
    // }
  },
};
webTeam.show();

// ==================================================
// CODE MẪU (tham khảo, không chạy):
// async function getStats() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   const user = users[0];
//   for (const key in user) {
//     console.log(key, user[key]);
//   }
// }
// getStats();
// ==================================================
console.log("=== BÀI 4: ASYNC/AWAIT & FOR...IN ===");

// === TODO: User code here ===
// async function getStats() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log("✓ Đã lấy users, duyệt user đầu tiên bằng for...in:");
//   const user = users[0];
//   for (const key in user) {
//     console.log(`  ${key}: ${user[key]}`);
//   }
// }
getStats();
