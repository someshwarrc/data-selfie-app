function setup() {
    createCanvas(320,240);
    const video =   createCapture(VIDEO);
    video.size(320,240);
    let data;
    if ("geolocation" in navigator) {
    /* geolocation is available */
        const timestamp =   new Date();
        navigator.geolocation.getCurrentPosition(function(position) {
        data = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            date: timestamp.toUTCString()
            }
        }); 
    } else {
            document.body.append('<p>geolocation IS NOT available<p>');
    }   
    document.querySelector('button').addEventListener('click', async function(){
        video.loadPixels();
        const mood  =   document.querySelector('input').value;
        const img   =   video.canvas.toDataURL({});
        data.image = img;
        data.mood  = mood;
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const obj   =   await response.json();
        console.log(obj);
    });
    

}


