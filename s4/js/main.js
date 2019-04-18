var someOtherVar;

var someVar = "Some text";
var foo = true;
var someNumber = 9;
var someFloat = 3.1416;
var animalsArray = [
    "Perro",
    "Gato",
    "Araña",
    "León"
]
var someMatrix = [
    [
        "Perro",
        "Gato",
        "Araña",
        "León"
    ],
    [
        "Mesa",
        "Silla",
        "Cama"
    ]
]

var studentObject = {
    name: "Eleonor",
    lastName: "Peralta Rivera",
    address: "Some Address",
    phoneNumber: "5454888548"
}

var studentsList = [{
    name: "Eleonor",
    lastName: "Peralta Rivera",
    address: "Some Address",
    phoneNumber: "5454888548"
}, {
    name: "Javier",
    personalData: {
        lastName: "Medina Bautista",
        address: "Some Address",
        phoneNumber: "5454888548",
    },

    hobbies: [
        "Videojuegos",
        "Cine",
        "Basketball"
    ],

}]

var purposesDb = firebase.database();
var purposesReference = firebase.database().ref('purposesCollection/')
var usersReference = firebase.database().ref('usersCollections/');
var purposesContent;


function twoNumberAddtition(number1, number2) {
    return number1 + number2;
}

function twoNumberSubstraction(number1, number2) {
    return number1 - number2;
}

function compareTwoNumbers(number1, number2) {
    debugger
    if (number1 > number2) {
        alert("El primer número es mayor")
    } else if (number1 == number2) {
        alert("los números son iguales")
    } else {
        alert("El primer número es menor")
    }
}

//= /*asignacion*/
//== /*comparación*/
//=== /*extrema comparación*/
//< /*Menor qué*/
//> /*Mayor que*/
//<= /*menor o igual que */
//>= /*mayor o igual que*/
//!= /*diferente*/
//! /*negacion*/
//!true
//!false

var animalsArray = [
    "Perro", /*índice 0*/
    "Gato", /*índice 1*/
    "Araña", /*indice 2*/
    "León" /*indice 3*/
]

var someElement = $("#some-id");

//$("#")
//$(".")
//$("tagname")
//$(".some-class:eq()")
//$("#some-id .some-class")
//$("#some-id.some-class")
//$("#some-id:hover")
//someElement.hide();


//$(selector).val() /*extraer un valor*/
//$(selector).val(some value) /*asignar un valor*/

function getFormData() {
    var projectObject = {};

    var projectName = $("#project-name").val(); /*getter*/
    var projectDescription = $("#project-description").val();
    var customerMail = $("#customer-mail").val();
    var customerPhone = $("#customer-phone").val();
    var customerName = $("#customer-name").val();

    projectObject.projectName = projectName;
    projectObject.projectDescription = projectDescription;
    projectObject.customerMail = customerMail;
    projectObject.customerPhone = customerPhone;
    projectObject.customerName = customerName;
    console.log(projectObject);
    $("input").val("");
    $("textarea").text("");
    purposesReference.push(projectObject)
}

$("#submit-button").on("click", function() {
    getFormData()
})

$("#get-purposes").on("click",function(){
	getPurposes();
})

var projectArray = [];

var projectPurposeHtml = `<div class="col-lg-3">
								<div class="card my-2">
									<div class="card-body">
										<h5 class="card-title">Desarrollo de sitio web</h5>
										<h6 class="card-subtitle mb-2 text-muted">Israel Salinas Martínez</h6>
										<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias distinctio debitis officia, impedit, quas libero architecto vel in quis illum beatae. Maxime laborum exercitationem, sapiente.</p>
										<p>israel@kodemia.mx</p>
										<p>5543788096</p>
										<p>Habilidades requeridas: <span class="badge badge-pill badge-primary">HTML</span><span class="badge badge-pill badge-primary">CSS</span><span class="badge badge-pill badge-primary">JS</span></p>
										<!--a href="#" class="card-link">Card link</a>
										<a href="#" class="card-link">Another link</a-->
									</div>
								</div>
							</div>`

function getPurposes() {
    
    console.log(purposesContent)
    $("#purposes-wrapper").empty();
    /*Object.values(purposesContent).forEach(function(value){
        console.log(value);
        projectArray.push(value);
    });*/
    $.each(purposesContent,function(key,value){
        console.log(value);
        var projectName = value.projectName;
        var projectDescription = value.projectDescription;
        var customerName = value.customerName;
        var customerPhone = value.customerPhone;
        var customerMail = value.customerMail;

        var projectPurposeHtml = `<div class="col-lg-3">
                                <div class="card my-2">
                                    <div class="card-body">
                                        <h5 class="card-title">${projectName}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${customerName}</h6>
                                        <p class="card-text">${projectDescription}</p>
                                        <p>${customerMail}</p>
                                        <p>${customerPhone}</p>
                                    </div>
                                </div>
                            </div>`

        $("#purposes-wrapper").append(projectPurposeHtml);
    })
}




purposesReference.on('value', function(snapshot) {
    console.log(snapshot.val());
    purposesContent = snapshot.val();
    getPurposes();
});

/*var newPurposal = {
    projectName: "New name",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, dolores consequuntur voluptatem, cupiditate, dicta est consequatur quis ipsa quasi fuga obcaecati soluta corrupti assumenda unde odio recusandae facere molestiae?",
    customerMail: "new@kodemia.mx",
    customerPhone: "5545789645",
    customerName: "new"
}*/


