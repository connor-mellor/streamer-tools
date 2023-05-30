// Selectors
const tagsContainer = document.querySelector('#tags');
const convertedTagsContainer = document.querySelector('#converted-tags');

const handleConversion = () => (
  convertedTagsContainer.value = 
    tagsContainer
      .value.split(' ')
      .map(hashtag => 
        hashtag.replace(/[^a-zA-Z]/g, '').toLowerCase()
      )
      .join(' ')
);

tagsContainer.addEventListener('input', handleConversion);