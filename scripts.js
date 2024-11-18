document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        // add projects here
        // be sure each project has a title and description
    ];

    const projectSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);
        
        projectSection.appendChild(projectDiv);
    });
}); 
