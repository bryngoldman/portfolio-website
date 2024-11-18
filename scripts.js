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

document.addEventListener('DOMContentLoaded', () => {
    const pages = ["about", "home"];

    const navigationBar = document.getElementById('navigation');
    const list = document.createElement('ul');

    pages.forEach(page => {
        const href = `./pages/${page}.html`
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = href;
        link.text = page;
        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    navigationBar.appendChild(list);
});
