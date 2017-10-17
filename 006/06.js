var dataset = [
    {age:16},
    {age:20},
    {age:-13},
    {age:30}
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
        // return 120-Math.abs(data.age)
//        if(data.age>0){
//            return 120-Math.abs(data.age)
//        }else{
//            return 120
//        }
        return 120-Math.max(data.age, 0)
    })
    .style('fill', function(d, i){
        if(d.age>0){
            return 'green'
        }else{
            return 'red'
        }
    })