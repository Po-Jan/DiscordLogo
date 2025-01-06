function downloadSVG() {
    const svg = document.getElementById('custom-svg');
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'custom-image.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPNG() {
    const svg = document.getElementById('custom-svg');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set canvas size to match the SVG's width and height attributes (if available)
    const width = parseInt(svg.getAttribute('width')) || 500;  // Fallback if no width is set
    const height = parseInt(svg.getAttribute('height')) || 500;  // Fallback if no height is set

    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = function() {
        context.clearRect(0, 0, width, height);  // Clear any existing canvas content
        context.drawImage(img, 0, 0);

        // Release the object URL after drawing the image
        URL.revokeObjectURL(url);

        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');  // Change to PNG format if you want PNG
        link.download = 'custom-image.png';  // Change filename extension to .png
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    img.src = url;  // Set image source to the SVG Blob URL
}
