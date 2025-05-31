// Script simulasi status pada admin.html
document.addEventListener("DOMContentLoaded", function () {
  const prosesButtons = document.querySelectorAll(".btn-warning");
  const tanggapiButtons = document.querySelectorAll(".btn-success");

  prosesButtons.forEach((btn) =>
    btn.addEventListener("click", function () {
      const badge = this.closest("tr").querySelector(".badge");
      badge.className = "badge bg-warning";
      badge.textContent = "Diproses";
    })
  );

  tanggapiButtons.forEach((btn) =>
    btn.addEventListener("click", function () {
      const badge = this.closest("tr").querySelector(".badge");
      badge.className = "badge bg-success";
      badge.textContent = "Ditanggapi";
    })
  );

  // Validasi dan simulasi kirim formulir aspirasi
  const formAspirasi = document.querySelector("form[action='']");
  if (formAspirasi) {
    formAspirasi.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Aspirasi berhasil dikirim (simulasi).");
      this.reset();
    });
  }
});
