function downloadSVG() {
    const svg = document.getElementById('custom-svg');
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'discordLogo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPNG() {
    const svg = document.getElementById('custom-svg');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const width = parseInt(svg.getAttribute('width')) || 500; 
    const height = parseInt(svg.getAttribute('height')) || 500; 

    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = function() {
        context.clearRect(0, 0, width, height);  
        context.drawImage(img, 0, 0);

 
        URL.revokeObjectURL(url);


        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png'); 
        link.download = 'discordLogo.png'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    img.src = url;  
}
