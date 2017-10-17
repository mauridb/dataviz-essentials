// UTILITY FOR DATA GROUP

d3.csv('athletes_sochi.csv', function(err, myData){
    if(err) return
    console.log(myData)
    var byCountries = d3.nest()
        .key(function(d, i){
            return d.country
        })
        .key(function(d, i){
            return d.gender
        })
        .sortKeys(d3.ascending)
        .entries(myData)
    
    byCountries.sort(function(a, b){
        return d3.ascending(a.key, b.key)
    })
    
    console.log(byCountries)
})