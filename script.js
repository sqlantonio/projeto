function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains ("light")) {
        html.classList.remove("light")
    } else{
        html.classList.add("light")
    }
    //podendo ser mais simplificado usando 
    //html.classList.toogle("light")
    //assim fazendo a mesma funcionalidade do if e else

    //pegar a tag image
    const image = document.querySelector("profile img") 
    
    //substituir a imagem
    if(html.classList.contains("light")) {
        //se tiver escrito light altera a imagem
        image.setAttribute("src", "./assets/avatar-light.png")
    } else{
    //mantem a imagem 
        image.setAttribute("src", "./assets/avatar.png")
    }
}