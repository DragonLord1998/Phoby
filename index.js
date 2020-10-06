
 async function moby(){
 api_key = 'HO2yjAGJ6RGnxwN1Ltrw1g=='   
 gamename = document.getElementById('name').value;
 let response = await fetch('https://api.mobygames.com/v1/games?api_key=HO2yjAGJ6RGnxwN1Ltrw1g==&title='+gamename+"&limit=5");
 let data = await response.json();
 
 display(data.games)
 
}

    function display(x){
        for(i=0;i<x.length;i++){
        description(x[i])
        image(x[i])
        }
        
    }

    function description(x){
        g = document.getElementById('results');
        let casing = document.createElement('div')
        casing.setAttribute("class","des")

        let desc = document.createElement('p');
        desc.innerHTML = x.description;
        g.appendChild(casing);
        casing.appendChild(desc);
        
    }

    function image(x){
        g = document.getElementById('results');
        let img = document.createElement('img');
        img.setAttribute('src',x.sample_cover.image)
        img.setAttribute('class', 'imag')
        g.appendChild(img);
        
    }