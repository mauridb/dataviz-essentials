d3.csv('athletes_sochi.csv', function(err, myData){
    if(err) {
        console.log(err)
        return
    }
    
    console.log(myData)
    
    var mapX = d3.scaleLinear().domain([0, 120]).range([0, 600]) // 0-100kg - svg space
    var mapY = d3.scaleLinear().domain([0, 2]).range([0, 600]) // 0-2m - svg space
    
    d3.select('svg')
        .selectAll('circle')
        .data(myData)
        .enter()
        .append('circle')
        .attr('r', 3)
        .attr('cx', function(d, i){
            return mapX( d.weight )
        })
        .attr('cy', function(d, i){
            return mapY( d.height )
        })
})