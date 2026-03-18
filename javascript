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
