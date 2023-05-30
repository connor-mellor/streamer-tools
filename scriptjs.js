const pane = document.querySelector('.tile-container');
const tileTemplate = document.getElementById('tile');

const widgets = [
    {
        name: "Tags Converter",
        href: "/widgets/TagsConverter/index.html"
    },
    {
        name: "Other stuff",
        href: "/test"
    },
];

widgets.forEach(widget => {
    const tile = tileTemplate.cloneNode(true)
        .content.querySelector('.tile');
    const nameElement = tile.querySelector('a > p');
    const hrefElement = tile.querySelector('a')
    
    nameElement.innerText = widget.name;    
    hrefElement.href = widget.href;
    pane.appendChild(tile);
})