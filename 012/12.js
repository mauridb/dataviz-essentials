// UTILITY FOR DATA GROUP

d3.csv('athletes_sochi.csv', function(err, myData){
    if(err) return
    console.log(myData)
    var byGender = d3.nest()
        .key(function(d, i){
            return d.gender
        })
        .entries(myData)
    console.log(byGender)
})