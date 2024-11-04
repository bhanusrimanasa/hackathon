document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById('search-bar');
    const projects = document.querySelectorAll('.project-grid .card');

    searchBar.addEventListener('input', () => {
        const searchText = searchBar.value.trim().toLowerCase();
        projects.forEach(project => {
            const title = project.querySelector('h3').innerText.toLowerCase();
            project.style.display = title.includes(searchText) ? 'block' : 'none';
        });
    });
});
