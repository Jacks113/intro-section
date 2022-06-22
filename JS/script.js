window.onload = function(e){
    const navFeatures = document.getElementById("features");

    const featuresArrow = document.getElementById("features-arrow");
    const companyArrow = document.getElementById("company-arrow");

    const navCompany = document.getElementById("company");

    window.addEventListener("resize", function(){

        if (window.innerWidth < 700){
            this.document.getElementById("features").addEventListener("click", function(){
                alert("Clicked features")
            })
        }
       
    })


    navFeatures.addEventListener("mouseover", function(){
        document.getElementById("features-arrow").src="/images/icon-arrow-up.svg";
        document.getElementsByClassName("basics")[0].classList.remove("overflow-hide");
    })
    
    navFeatures.addEventListener("mouseout", function(){
        document.getElementById("features-arrow").src="/images/icon-arrow-down.svg";
        document.getElementsByClassName("basics")[0].classList.add("overflow-hide");
    })
    
    
    navCompany.addEventListener("mouseover", function(){
        document.getElementById("company-arrow").src="/images/icon-arrow-up.svg";
        document.getElementsByClassName("basics")[0].classList.remove("overflow-hide");
    })
    
    navCompany.addEventListener("mouseout", function(){
        document.getElementById("company-arrow").src="/images/icon-arrow-down.svg";
        document.getElementsByClassName("basics")[0].classList.add("overflow-hide");
    })
    
}

function changeNav(){
        document.getElementById("header").classList.toggle("header-hidden");
        document.getElementById("menu").classList.toggle("menu-open");
}

