getdata();

async function getdata(){
    const response  =   await fetch('/api');
    const data      =   await response.json();

    console.log(data);
    
    for(item of data){
        const root = document.createElement('p');
        const mood = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const image = document.createElement('img');

        mood.textContent = `mood: ${item.mood}`;
        geo.textContent = `${item.lat}°, ${item.lon}°`;
        date.textContent = item.date;
        image.src = item.image;
        image.alt = 'Making silly faces!';

        root.append(mood, geo, date, image);
        document.body.append(root); 
    }
}
