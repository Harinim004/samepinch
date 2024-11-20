function generateDiv() {
    // Create main1 div
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main1');

    // Create subcontainer div with img
    const subContainerDiv = document.createElement('div');
    subContainerDiv.classList.add('subcontainer');

    const img = document.createElement('img');
    img.id = 'uploadedImage';
    img.classList.add('shared-image');
    img.alt = 'Shared Image';
    img.style.display = 'none';

    subContainerDiv.appendChild(img);
    mainDiv.appendChild(subContainerDiv);

    // Create sub div
    const subDiv = document.createElement('div');
    subDiv.classList.add('sub');

    // Create caption display div with p element
    const captionDisplayDiv = document.createElement('div');
    captionDisplayDiv.id = 'captionDisplay';

    const captionText = document.createElement('p');
    captionText.id = 'displayText';
    captionDisplayDiv.appendChild(captionText);
    subDiv.appendChild(captionDisplayDiv);

    // Create tag display div with p element
    const tagDisplayDiv = document.createElement('div');
    tagDisplayDiv.id = 'tagDisplay';

    const tagText = document.createElement('p');
    tagText.id = 'displayTag';
    tagDisplayDiv.appendChild(tagText);
    subDiv.appendChild(tagDisplayDiv);

    // Append sub div to main div
    mainDiv.appendChild(subDiv);

    // Append mainDiv to the parent container
    document.getElementById('container').appendChild(mainDiv);
  }