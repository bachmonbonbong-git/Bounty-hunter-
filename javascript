let userPoints = parseInt(localStorage.getItem("points")) || 0;

function updatePoints(amount) {
  userPoints += amount;
  localStorage.setItem("points", userPoints);
}form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!title.value || !desc.value || !reward.value) {
    alert("❌ Phải nhập đầy đủ nhiệm vụ + mô tả + bounty!");
    return;
  }

  const newPost = {
    title: title.value,
    desc: desc.value,
    reward: reward.value,
    user: user.value || "Ẩn danh"
  };

  posts.unshift(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));

  form.reset();
  renderPosts();
});
function buyItem(cost) {
  if (userPoints >= cost) {
    userPoints -= cost;
    localStorage.setItem("points", userPoints);
    alert("Mua thành công!");
  } else {
    alert("Không đủ bounty!");
  }
}
function likePost(i) {
  posts[i].likes = (posts[i].likes || 0) + 1;
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}
function getRank(points) {
  if (points > 500) return "🔥 Bounty King";
  if (points > 200) return "⚡ Pro Hunter";
  return "🟢 Beginner";
}
function buy(cost) {
  if (points < cost) {
    alert("Không đủ bounty!");
    return;
  }
  points -= cost;
  localStorage.setItem("points", points);
  alert("Mua thành công!");
}
points += parseInt(reward.value);
localStorage.setItem("points", points);let points = parseInt(localStorage.getItem("points")) || 0;
function addPoints(amount) {
  points += amount;
  localStorage.setItem("points", points);
}
function removePoints(amount) {
  if (points < amount) {
    alert("Không đủ bounty!");
    return false;
  }
  points -= amount;
  localStorage.setItem("points", points);
  return true;
}
function acceptTask(i) {
  let reward = parseInt(posts[i].reward);

  if (confirm("Hoàn thành nhiệm vụ này?")) {
    addPoints(reward);
    alert("+ " + reward + " bounty!");
  }
}
let users = JSON.parse(localStorage.getItem("users")) || [];
function updateLeaderboard(name, score) {
  let user = users.find(u => u.name === name);

  if (user) {
    user.score = score;
  } else {
    users.push({name: name, score: score});
  }

  localStorage.setItem("users", JSON.stringify(users));
}
users.sort((a,b)=>b.score-a.score);

users.forEach(u=>{"Server #" + server
  console.log(u.name + ": " + u.score);
});
function trade(cost) {
  if (removePoints(cost)) {
    alert("Trade thành công!");
  }
}
let friends = JSON.parse(localStorage.getItem("friends")) || [];

function addFriend(name) {
  friends.push(name);
  localStorage.setItem("friends", JSON.stringify(friends));
}
let server = Math.floor(Math.random() * 1000);
let level = parseInt(localStorage.getItem("level")) || 1;
let xp = parseInt(localStorage.getItem("xp")) || 0;
let xpNeeded = level * 100;
function acceptTask(i) {
  let reward = parseInt(posts[i].reward);

  addPoints(reward);
  addXP(reward); // 👈 thêm dòng này

  alert("+ " + reward + " bounty!");
}
function addXP(amount) {
  xp += amount;

  while (xp >= xpNeeded) {
    xp -= xpNeeded;
    level++;
    xpNeeded = level * 100;

    alert("🎉 Level Up! LV " + level);
  }

  localStorage.setItem("xp", xp);
  localStorage.setItem("level", level);
}
document.body.innerHTML += `
  <p>⭐ LV: ${level}</p>
  <p>XP: ${xp} / ${xpNeeded}</p>
`;
let percent = (xp / xpNeeded) * 100;
document.getElementById("xpbar").style.width = percent + "%";
if (level == 10) {
  alert("🔥 Unlock: Pro Hunter!");
}
xpNeeded = level * 150;
const ranks = [
  "Noob","Bronze","Silver","Gold","Ruby","Emerald","Diamond",
  "Normal","Good","Tiger","Lion","Small Hunter","Pro Hunter",
  "Bounty Hunter","Knight","Protect","Divine","Angel","Godly",
  "Celestial","God","Secret Player","Big Game Hunter","Fighter",
  "Chaos","Beast","Monster","Deadly","Big Knight","The Best Hunter",
  "OG Player","OG Hunter","Unstoppable","Real-Nonstop","Winner","King"
];
function getRank(level) {
  let index = Math.floor((level - 1) / 10);

  if (index >= ranks.length) index = ranks.length - 1;

  return ranks[index];
}
let currentRank = getRank(level);

document.body.innerHTML += `
  <p>⭐ LV: ${level}</p>
  <p>🏆 Rank: ${currentRank}</p>
`;
let oldRank = getRank(level);

while (xp >= xpNeeded) {
  xp -= xpNeeded;
  level++;
  xpNeeded = level * 100;

  let newRank = getRank(level);

  if (newRank !== oldRank) {
    alert("🔥 Rank Up! " + newRank);
  }

  oldRank = newRank;
}
function getRankColor(rank) {
  if (rank.includes("Noob")) return "gray";
  if (rank.includes("Bronze")) return "#cd7f32";
  if (rank.includes("Silver")) return "silver";
  if (rank.includes("Gold")) return "gold";
  if (rank.includes("Diamond")) return "cyan";
  if (rank.includes("God")) return "red";
  return "white";
}
let color = getRankColor(currentRank);

document.body.innerHTML += `
  <p style="color:${color}">🏆 ${currentRank}</p>
`;
