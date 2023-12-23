// Example JavaScript for handling search functionality
function search() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results

  // Mock data for demonstration
  const videos = [
    { title: 'How to Send an Email', url: 'videos/how_to_send_an_email.mp4' },
    // Add more video data as needed
  ];

  videos.forEach(video => {
    if (video.title.toLowerCase().includes(searchTerm)) {
      const videoElement = document.createElement('div');
      videoElement.innerHTML = `<h3>${video.title}</h3><video src="${video.url}" controls></video>`;
      resultsContainer.appendChild(videoElement);
    }
  });

  // Similar logic for blogs can be added
}
