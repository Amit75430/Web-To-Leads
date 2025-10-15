//get the value from user for lead date as it's custom field and populate the value into the field of lead date o that records.

function beforesubmit(){
    let outputdata= document.querySelector(".outputdata");   // how to access the html element into js
    let inputdata= document.querySelector(".inputdata");
    console.log("inputdata.value:", inputdata.value);// string --> date(en_IN for check Locale- in anounmous window(system.debug(UserInfo.getLocale());)

    let formattedDate= new Date(inputdata.value).toLocaleDateString("en-IN");
    outputdata.value= formattedDate;
}