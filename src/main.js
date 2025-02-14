document.querySelector(".contact-btn").addEventListener("click", function () {
  const dialog = document.querySelector("#contactDialog");
  dialog.showModal(); // 显示对话框
});

document.querySelector("#closeDialog").addEventListener("click", function () {
  const dialog = document.querySelector("#contactDialog");
  dialog.close(); // 关闭对话框
});
