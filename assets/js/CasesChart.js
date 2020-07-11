$(function(){
var IChart = document.getElementById('IChart').getContext('2d');

  // Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#f2f2f2';

var doughnut_I = new Chart(IChart, {
  type:'doughnut', // creating a doughnut chart
  data:{
    labels:['Barwon South West', 'Gippsland', 'Grampians', 'Hume', 'Loddon Mallee'],
    datasets:[{
      label:'Influenza',
      data:[
        177,
        156,
        63,
        74,
        80
      ],
      risk:[' High Risk Zone', ' High Risk Zone', ' Low Risk Zone', ' Medium Risk Zone', ' Medium Risk Zone'],
      backgroundColor:[
        'rgba(205, 27, 45, 0.9)',
        'rgba(205, 27, 45, 0.9)',
        'rgba(0, 153, 0, 0.9)',
        'rgba(255, 128, 0, 0.9)',
        'rgba(255, 128, 0, 0.9)',
      ],
      borderWidth:1,
      borderColor:'#e6e6e6',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data){
          return data.labels[tooltipItem[0].index];
        },
        label: function(tooltipItem, data){
          var label = data.datasets[0].risk[tooltipItem.index];
          console.log(tooltipItem.index);
          return label;
        }
    }
  },
  legend:{
      display:true,
      position:'right',
      labels:{
        fontSize:12,
        boxWidth: 12
      }
  },
  title:{
      display:true,
      text:'Observed incidence of Influenza Infection in 2017.',
      fontSize:17,
      position: 'bottom',
      padding: 15
  },

    layout:{
      padding:{
        left:0,
        right:0,
        bottom:30,
        top:20
      }
    }
  }
});

// creating chart for whooping cough
var PChart = document.getElementById('PChart').getContext('2d');

var doughnut_P = new Chart(PChart, {
  type:'doughnut', 
  data:{
    labels:['Barwon South West', 'Gippsland', 'Grampians', 'Hume', 'Loddon Mallee'],
    datasets:[{
      label:'Pertussis',
      data:[
        13,
        7,
        10,
        8,
        20
      ],
      risk:[' Medium Risk Zone', ' Low Risk Zone', ' Medium Risk Zone', ' Low Risk Zone', ' High Risk Zone'],
      backgroundColor:[
        'rgba(255, 128, 0, 0.9)',
        'rgba(0, 153, 0, 0.9)',
        'rgba(255, 153, 51, 0.9)',
        'rgba(0, 153, 0, 0.9)',
        'rgba(205, 27, 45, 0.9)'
      ],

      borderWidth:1,
      borderColor:'#e6e6e6',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data){
          return data.labels[tooltipItem[0].index];
        },
        label: function(tooltipItem, data){
          var label = data.datasets[0].risk[tooltipItem.index];
          console.log(tooltipItem.index);
          return label;
        }
    }
  },
  legend:{
      display:true,
      position:'right',
      labels:{
        fontSize:12,
        boxWidth: 12
      }
  },
  title:{
      display:true,
      text:'Observed incidence of Pertussis Infection in 2017.',
      fontSize:17,
      position: 'bottom',
      padding: 15
  },

    layout:{
      padding:{
        left:0,
        right:0,
        bottom:30,
        top:20
      }
    }
  }
});

// creating chart for campylobacter
var CChart = document.getElementById('CChart').getContext('2d');

var doughnut_C = new Chart(CChart, {
  type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Barwon South West', 'Gippsland', 'Grampians', 'Hume', 'Loddon Mallee'],
    datasets:[{
      label:'Campylobacter',
      data:[
        19,
        18,
        8,
        25,
        12
      ],
      risk:[' Medium Risk Zone', ' Medium Risk Zone', ' Low Risk Zone', ' High Risk Zone', ' Low Risk Zone'],
      backgroundColor:[
        'rgba(255, 153, 51, 0.9)',
        'rgba(255, 153, 51, 0.9)',
        'rgba(0, 153, 0, 0.9)',
        'rgba(205, 27, 45, 0.9)',
        'rgba(0, 153, 0, 0.9)',
      ],

      borderWidth:1,
      borderColor:'#e6e6e6',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data){
          return data.labels[tooltipItem[0].index];
        },
        label: function(tooltipItem, data){
          var label = data.datasets[0].risk[tooltipItem.index];
          console.log(tooltipItem.index);
          return label;
        }
    }
  },
  legend:{
      display:true,
      position:'right',
      labels:{
        fontSize:12,
        boxWidth: 12
      }
  },
  title:{
      display:true,
      text:'Observed incidence of Campylobacter Infection in 2017.',
      fontSize:17,
      position: 'bottom',
      padding: 15
  },

    layout:{
      padding:{
        left:0,
        right:0,
        bottom:30,
        top:20
      }
    }
  }
});
});
