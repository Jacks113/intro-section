window.onload = function(e){
    const navFeatures = document.getElementById("features");

    const featuresArrow = document.getElementById("features-arrow");
    const companyArrow = document.getElementById("company-arrow");

    const navCompany = document.getElementById("company");


     // functions for adding and removing hover for features

     const addHoverNavFeat = function(){
        document.getElementById("features-arrow").src="/images/icon-arrow-up.svg";

        document.getElementsByClassName("basics")[0].classList.remove("overflow-hide");


        document.getElementById("features-drop").style.display="flex";

       
    }
    
    const addHoverNavFeat2 = function(){

        document.getElementsByClassName("basics")[0].classList.toggle("overflow-hide");

        if(document.getElementById("basics").classList.contains ("overflow-hide")) {
            document.getElementsByClassName("navigation-container")[0].style.height="30%";

            document.getElementById("features-drop").style.display="none";
            document.getElementById("features-arrow").src="/images/icon-arrow-down.svg";
        }

        else {
            document.getElementsByClassName("navigation-container")[0].style.height="80%";

            document.getElementById("features-drop").style.display="flex";
            document.getElementById("features-arrow").src="/images/icon-arrow-up.svg";

        }        
    }
    const addHoverCompany2 = function(){

        document.getElementsByClassName("basics")[0].classList.toggle("overflow-hide");

        if(document.getElementById("basics").classList.contains ("overflow-hide")) {
            document.getElementsByClassName("navigation-container")[0].style.height="30%";

            document.getElementById("company-drop").style.display="none";
            document.getElementById("company-arrow").src="/images/icon-arrow-down.svg";
        }

        else {
            document.getElementsByClassName("navigation-container")[0].style.height="80%";

            document.getElementById("company-drop").style.display="flex";
            document.getElementById("company-arrow").src="/images/icon-arrow-up.svg";
        }        
    }
        
    const removeHoverNavFeat = function(){
        document.getElementById("features-arrow").src="/images/icon-arrow-down.svg";

        document.getElementsByClassName("basics")[0].classList.add("overflow-hide");

        document.getElementById("features-drop").style.display="none";

    }

    // functions for adding and removing hover for company
        const addHoverCompany = function(){
            document.getElementById("company-arrow").src="/images/icon-arrow-up.svg";

            document.getElementsByClassName("basics")[0].classList.remove("overflow-hide");


            document.getElementById("company-drop").style.display="flex";

            document.getElementById("company-drop").classList.remove("dropdown-none");
            document.getElementById("company-drop").classList.add("dropdown-show");
            }


        const removeHoverCompany = function(){
            document.getElementById("company-arrow").src="/images/icon-arrow-down.svg";
        
            document.getElementById("company-drop").style.display="none";
        
            document.getElementsByClassName("basics")[0].classList.add("overflow-hide");
        }
  


        //  function for changing event listener based on window size
        const onResize = function(){
            // console.log(window.innerWidth);

            // removing event listeners for hover on features and company in navigation if under 1000px

            if (window.innerWidth <= 700){
                navFeatures.removeEventListener("mouseover", addHoverNavFeat);
                navFeatures.removeEventListener("mouseout", removeHoverNavFeat);

                navCompany.removeEventListener("mouseout", removeHoverCompany);
                navCompany.removeEventListener("mouseover", addHoverCompany);


                navFeatures.addEventListener("click", addHoverNavFeat2);
                navCompany.addEventListener("click", addHoverCompany2);



                document.getElementById("learn").addEventListener("click", function(){
                    window.location.href="#";
                })
                document.getElementById("register").addEventListener("click", function(){
                    window.location.href="#";
                })
                document.getElementById("login").addEventListener("click", function(){
                    window.location.href="#";
                })
            }


            else if (window.innerWidth > 700){
                navFeatures.addEventListener("mouseover", addHoverNavFeat);
                navFeatures.addEventListener("mouseout", removeHoverNavFeat);

                navCompany.addEventListener("mouseout", removeHoverCompany);
                navCompany.addEventListener("mouseover", addHoverCompany);
            }

            
            }
            
    // adding event listeners for hover on features and company in navigation
    navFeatures.addEventListener("mouseover", addHoverNavFeat);
    navFeatures.addEventListener("mouseout", removeHoverNavFeat);

    navCompany.addEventListener("mouseout", removeHoverCompany);
    navCompany.addEventListener("mouseover", addHoverCompany);

    // window resize
        window.onresize = onResize;
    }
    

    

function changeNav(){
        document.getElementById("header").classList.toggle("header-hidden");
        document.getElementById("menu").classList.toggle("menu-open");
}

