window.onload = function(e){
    const navFeatures = document.getElementById("features");
    const navCompany = document.getElementById("company");
    const hiddenCompany = document.getElementById("hiddenCompany");
    const hiddenFeatures = document.getElementById("hiddenFeatures");


    navFeatures.addEventListener("click", function(){
        hiddenFeatures.classList.toggle("hide");
        hiddenFeatures.classList.toggle("showFlex");

        hiddenCompany.classList.add("hide");
        hiddenCompany.classList.remove("showFlex");
    })

    navCompany.addEventListener("click", function(){

        hiddenFeatures.classList.add("hide");
        hiddenFeatures.classList.remove("showFlex");

        hiddenCompany.classList.toggle("hide");
        hiddenCompany.classList.toggle("showFlex");
    })
}