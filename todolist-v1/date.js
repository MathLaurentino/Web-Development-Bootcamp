module.exports.getDate = function(){

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function (){

    const today = new Date();

    const options = {
        weekday: "long",
    }

    return today.toLocaleDateString("en-US", options);

}

// responsavel por exportar function, dados ou qualquer outra coisa
// module.exports = {
//     getDate,
//     getDay,
//     data: ["Matheus", "Laurentino"]
// }



