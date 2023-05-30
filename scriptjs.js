const pane = document.querySelector('.tile-container');
const tileTemplate = document.getElementById('tile');

const widgets = [
    {
        name: "Tags Converter",
        href: "./widgets/TagsConverter/index.html"
    }
];

widgets.forEach(widget => {
    const tile = tileTemplate.cloneNode(true)
        .content.querySelector('a');
    const nameElement = tile.querySelector('div > p');
    const hrefElement = tile;
    
    nameElement.innerText = widget.name;    
    hrefElement.href = widget.href;
    pane.appendChild(tile);
})