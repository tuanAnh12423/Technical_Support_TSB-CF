const videos = [
    { name: "Comfee - Máy Lạnh - Đấu nối dây nguồn", link: "https://www.youtube.com/watch?v=g7FtvedReiQ" },
    { name: "TOSHIBA - Máy giặt - Vệ Sinh Van Cấp", link: "https://www.youtube.com/watch?v=hPso-fFRQEc" },
    { name: "Comfee - Máy lạnh - Chọn Follow Me", link: "https://www.youtube.com/watch?v=tC4UFMBUCdQ" },
    { name: "TOSHIBA - Tủ Đông - Lắp Bánh xe, Tay Cầm", link: "https://www.youtube.com/watch?v=Jay7QyPV1C4" }
  ];
  
  const searchInput = document.getElementById("search");
  const resultsDiv = document.getElementById("results");
  
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = ""; // Xóa kết quả cũ
  
    const filteredVideos = videos.filter(video => video.name.toLowerCase().includes(query));
    filteredVideos.forEach(video => {
      const link = document.createElement("a");
      link.href = video.link;
      link.target = "_blank";
      link.textContent = video.name;
      resultsDiv.appendChild(link);
    });
  });