// --------------------------------------------------
// BÀI TẬP JS – CODE MẪU (comment) + VÙNG USER CODE
// Chỉ sửa trong phần "TODO: User code" mỗi bài.
// Giữ lại các console.log tiêu đề để result.html nhận đúng section.
// --------------------------------------------------

// Dữ liệu mẫu (Raw Data)
const members = [
  { id: 1, memberName: "Đức Vũ", position: "Member", joined: 2023 },
  { id: 2, memberName: "Hoàng Chuột", position: "Leader", joined: 2022 },
  { id: 3, memberName: "Nguyễn Hiếu", position: "Designer", joined: 2022 },
];
// === TODO: User code here ===
// printClubName();
function printClubName() {
  console.log("club: ", club);
  console.log("slogan", slogan);
}
//END

var club = "Ban Web";
let slogan = "Học là làm được";

console.log("Sau khai báo - club:", club);
console.log("Sau khai báo - slogan:", slogan);
console.log("");

console.log("=== BÀI 2: DESTRUCTURING & REST/SPREAD ===");

// === TODO: User code here ===
const member = ({ memberName, position } = members[0]);
const newMember = { ...member, joined: 2025 };
//END

console.log("Destructuring từ members[0]:", memberName, position);
console.log("New Member:", newMember);
console.log("");

console.log("=== BÀI 3: VÒNG LẶP FOR & THIS & ARROW FUNCTION ===");
// === TODO: User code here ===
const webTeam = {
  teamName: "Ban web UTC",
  members,
  show() {
    for (m of this.members) {
      const print = () => {
        console.log(`${this.teamName} - Thành viên: ${m.memberName}`);
      };
      print();
    }
  },
};
webTeam.show();
//END

console.log("=== BÀI 4: ASYNC/AWAIT & FOR...IN ===");

// === TODO: User code here ===
async function getStats() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const user = users[0];
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
}
//END
getStats();
