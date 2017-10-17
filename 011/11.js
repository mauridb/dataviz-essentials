d3.csv('athletes_sochi.csv', function(err, myData){
    if(err) {
        console.log(err)
        return
    }
    
    console.log(myData)
    
    var maxWeight = d3.max(myData, function(d){
        return +d.weight
    })
    
    var mapX = d3.scaleLinear().domain([0, maxWeight]).range([20, 460]) // 0-100kg - svg space
    
    var maxHeight = d3.max(myData, function(d){
        return +d.height
    })
    
    var mapY = d3.scaleLinear().domain([0, maxHeight]).range([460, 20]) // 0-2m - svg space
    
    var groups = d3.select('svg')
        .selectAll('g')
        .data(myData)
        .enter()
        .append('g')
        .attr('transform', function(d, i){
            return `translate(${mapX(d.weight)}, ${mapY(d.height)})`
        })
    
    groups.append('circle')
        .attr('r', 5)
        .style('opacity', .1)
        
    groups.append('text')
        .text(function(d, i){
            return d.name
        })
        .attr('text-anchor', 'middle')
        .style('opacity', 0)
    
    groups.on('mouseenter', function(){
        d3.select(this)
            .select('text')
            .style('opacity', 1)
    })
    
    groups.on('mouseleave', function(){
        d3.select(this)
            .select('text')
            .style('opacity', 0)
    })
    
    var myAxisY = d3.axisRight(mapY)
    
    d3.select('svg')
        .append('g')
        .attr('transform', 'translate(20, 0)')
        .call(myAxisY)
    
    var myAxisX = d3.axisBottom(mapX)
    
    d3.select('svg')
        .append('g')
        .attr('transform', 'translate(0, 460)')
        .call(myAxisX)
})