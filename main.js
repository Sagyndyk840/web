/*SCROLL BAR*/ 
    function scrollTo(element) {
        window.scroll({
        left: 0, 
        top: element.offsetTop, 
        behavior: 'smooth'
      })
    }
    
    var buttonAbout = document.querySelector('#buttonAbout');
    var sectionTwoId = document.querySelector('#sectionTwoId');
    
    buttonAbout.addEventListener('click', () => {
        scrollTo(sectionTwoId);
    })
    
    var buttonOur = document.querySelector('#buttonOur');
    var sectionFourId = document.querySelector('#sectionFourId');
    
    buttonOur.addEventListener('click', () => {
      scrollTo(sectionFourId);
    })
    var buttonContact = document.querySelector('#buttonContact');
    var footerId = document.querySelector('#footerId');
    
    buttonContact.addEventListener('click', () => {
      scrollTo(footerId);
    })




    /* SIDE BAR I DONT KNOW ENFINITY*/

    let SideBAr = undefined;


    var helloUSer=prompt("HEllO WHAT IS YOU NAME");
    var howAreYouUser=helloUSer;
    var nice = ("HELLO ");
    var ok= nice  + howAreYouUser;

    alert(ok)

    /*var mas =[5,10,45,1,6]
    var choose = prompt(" ВЫБЕРИ ЧИСЛО " )
    var happen = choose+mas;
    alert (happen)*/



    /*  Дразнилька Игра */

    var t=undefined;
    var t=undefined;
    var t=undefined;

    var t=undefined;
    var t=undefined;
    var t=undefined;

    var haha=undefined;
    /*alert(haha)*/