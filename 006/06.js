var dataset = [
    {age:16},
    {age:20},
    {age:-13},
]

console.log(dataset)

d3.select('svg')
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('width', 30)
    .attr('height', function(data, index){
        return Math.abs(data.age)
    })
    .attr('x', function(data, index){
        return index*32
    })
    .attr('y', function(data, index){
        return 120-Math.abs(data.age)
    })
    .style('fill', function(d, i){
        if(d.age>0){
            return 'green'
        }else{
            return 'red'
        }
    })