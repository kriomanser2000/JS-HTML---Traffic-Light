var currentLightIndex = 0;
var lights = document.getElementsByClassName('light');
function changeLight() 
{
    lights[currentLightIndex].classList.remove('active');
    currentLightIndex++;
    if (currentLightIndex >= lights.length) 
    {
        currentLightIndex = 0;
    }
    lights[currentLightIndex].classList.add('active');
    if (currentLightIndex === 0) {
        lights[1].classList.add('inactive');
        lights[2].classList.remove('inactive');
    } 
    else if (currentLightIndex === 1) 
    {
        lights[2].classList.add('inactive');
        lights[0].classList.remove('inactive');
    }
    else 
    {
        lights[0].classList.add('inactive');
        lights[1].classList.remove('inactive');
    }
}