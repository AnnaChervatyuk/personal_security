
const dataSource = [{
  date: '01-02-2022',
  resolvedTask: 5,
  completedTaskDigital: 6,
  completedTaskPersonal: 8,
  completedTaskFinance: 3
}, {
  date: '01-03-2022',
  resolvedTask: 6,
  completedTaskDigital: 0,
  completedTaskPersonal: 11,
}, {
  date: '01-04-2022',
  resolvedTask: 12,
  completedTaskPersonal: 6,
  completedTaskFinance:8
}, {
  date: '01-05-2022',
  resolvedTask: 2,
  completedTaskDigital: 7,
  completedTaskPersonal: 15,
  completedTaskFinance:2
}, {
  date: '01-06-2022',
  resolvedTask: 12,
  completedTaskPersonal: 6,
  completedTaskFinance:8
}, {
  date: '01-07-2022',
  resolvedTask: 2,
  completedTaskDigital: 7,
  completedTaskPersonal: 15,
  completedTaskFinance:2
}, {
  date: '01-08-2022'
}, {
  date: '01-09-2022'
}, {
  date: '01-10-2022'
}, {
  date: '01-11-2022'
}, {
  date: '01-12-2022'
}, {
  date: '01-13-2022'
}, {
  date: '01-14-2022'
}, {
  date: '01-15-2022'
}, {
  date: '01-16-2022',
  resolvedTask: 2,
  completedTaskDigital: 7,
  completedTaskPersonal: 15,
  completedTaskFinance:2
}, {
  date: '01-17-2022'
}, {
  date: '01-18-2022'
}, {
  date: '01-19-2022'
}, {
  date: '01-20-2022'
}, {
  date: '01-21-2022'
}, {
  date: '01-22-2022'
}, {
  date: '01-23-2022'
}, {
  date: '01-24-2022'
}, {
  date: '01-25-2022',
  resolvedTask: 2,
  completedTaskDigital: 7,
  completedTaskPersonal: 15,
  completedTaskFinance:2
}, {
  date: '01-26-2022'
}, {
  date: '01-27-2022'
}, {
  date: '01-28-2022'
}, {
  date: '01-29-2022'
}, {
  date: '01-30-2022'
}, {
  date: '01-31-2022'
}, {
  date: '02-01-2022'
}, {
  date: '02-02-2022'
}, {
  date: '02-03-2022',
  resolvedTask: 2,
  completedTaskDigital: 7,
  completedTaskPersonal: 15,
  completedTaskFinance:2
}, {
  date: '02-04-2022'
}, {
  date: '02-05-2022'
}, {
  date: '02-06-2022'
}, {
  date: '02-07-2022'
}, {
  date: '02-08-2022'
}, {
  date: '02-09-2022',
  resolvedTask: 6,
  completedTaskDigital: 0,
  completedTaskPersonal: 11,
}, {
  date: '02-10-2022',
  resolvedTask: 6,
  completedTaskDigital: 0,
  completedTaskPersonal: 11,
}, {
  date: '02-11-2022',
  resolvedTask: 6,
  completedTaskDigital: 0,
  completedTaskPersonal: 11,
}, {
  date: '02-12-2022',
  resolvedTask: 2,
  completedTaskDigital: 7,
  completedTaskPersonal: 15,
  completedTaskFinance:2
}];

$(() => {
$('#teamChart').dxChart({
  dataSource: dataSource,
  commonSeriesSettings: {
    argumentType: 'datetime',
    aggregationInterval: 'day',
    valueMarginsEnabled: true,
    argumentField: 'date',
    type: 'stackedBar',
    point: {
      hoverMode: 'allArgumentPoints',
    },
  },
  series: [
    { valueField: 'resolvedTask', name: 'Выполнено заданий', color:"#2E2E38", barWidth: '20'},
    { valueField: 'completedTaskDigital', name: 'Цифровая безопасность', color:"#0EA767", barWidth: '20' },
    { valueField: 'completedTaskPersonal', name: 'Личная безопасность',  color:"#605DF9", barWidth: '20' },
    { valueField: 'completedTaskFinance', name: 'Финансовая безопасность', color: "#29C5F6", barWidth: '20'}
  ],

  argumentAxis: {
    visualRange: {
      length: 30
    },

    label: {
      customizeText: (arg) => {return new Date(arg.value).getDate()}
    },
    tick: {
      color:'transparent'
    },
    tickInterval: { days: 1 },
    color:'transparent',
  },

  scrollBar: {
    visible: true,
  },
  zoomAndPan: {
    argumentAxis: 'both',
  },
  legend: {
    visible: false,
  },
  valueAxis: {
    tick: {
      color:'transparent'
    },
    color: 'transparent',
    grid: {
      color:'#aeaeb21a'
    },
  },
  panes: {
    backgroundColor: "#F9F9FB",
  },
  tooltip: {
    enabled: true,
    location: 'edge',
    border: {
      color: '#F3F3F6',

    },
    cornerRadius: 10,
    shadow: {
      offsetX: 5,
      color: 'rgba(0, 0, 0, 0.04)',
      offsetY: 5,
    },
    arrowLength: 0,
    contentTemplate(info, container) {
      const contentItems = ["<div class='teamChart_tooltip'>",
      `<div class='teamChart_tooltip_item teamChart_tooltip_title tooltip_resolvedTask'><span class='tooltip_item-title'>Выполнено заданий</span><span class='tooltip_item-value'>${info.point.data.resolvedTask ? info.point.data.resolvedTask : '—'}</span></div>`,
        "<div class='teamChart_tooltip_title tooltip_completedTask'><span class='tooltip_item-title'>Пройдено занятий</span>",
        `<div class='teamChart_tooltip_item teamChart_tooltip_name tooltip_completedTask-digital'><span class=''>Цифровая безопасность</span><span class='tooltip_item-value'>${info.point.data.completedTaskDigital ? info.point.data.completedTaskDigital : '—'}</span></div>`,
        `<div class='teamChart_tooltip_item teamChart_tooltip_name tooltip_completedTask-personal'><span class=''>Личная безопасность</span><span class='tooltip_item-value'>${info.point.data.completedTaskPersonal ? info.point.data.completedTaskPersonal : '—'}</span></div>`,
        `<div class='teamChart_tooltip_item teamChart_tooltip_name tooltip_completedTask-finance'><span class=''>Финансовая безопасность</span><span class='tooltip_item-value'>${info.point.data.completedTaskFinance ? info.point.data.completedTaskFinance : '—'}</span></div>`,
     '</div></div>'];
      const content = $(contentItems.join(''));
      content.appendTo(container);
},
  },
}).dxChart('instance');
});


$(() => {
$('#memberChart').dxChart({
  dataSource: dataSource,
  commonSeriesSettings: {
    argumentType: 'datetime',
    aggregationInterval: 'day',
    valueMarginsEnabled: true,
    argumentField: 'date',
    type: 'stackedBar',
    point: {
      hoverMode: 'allArgumentPoints',
    },
  },
  series: [
    { valueField: 'resolvedTask', name: 'Выполнено заданий', color:"#2E2E38", barWidth: '20'},
    { valueField: 'completedTaskDigital', name: 'Цифровая безопасность', color:"#0EA767", barWidth: '20' },
    { valueField: 'completedTaskPersonal', name: 'Личная безопасность',  color:"#605DF9", barWidth: '20' },
    { valueField: 'completedTaskFinance', name: 'Финансовая безопасность', color: "#29C5F6", barWidth: '20'}
  ],

  argumentAxis: {
    visualRange: {
      length: 30
    },

    label: {
      customizeText: (arg) => {return new Date(arg.value).getDate()}
    },
    tick: {
      color:'transparent'
    },
    tickInterval: { days: 1 },
    color:'transparent',
  },

  scrollBar: {
    visible: true,
  },
  zoomAndPan: {
    argumentAxis: 'both',
  },
  legend: {
    visible: false,
  },
  valueAxis: {
    tick: {
      color:'transparent'
    },
    color: 'transparent',
    grid: {
      color:'#aeaeb21a'
    },
  },
  panes: {
    backgroundColor: "#F9F9FB",
  },
  tooltip: {
    enabled: true,
    location: 'edge',
    border: {
      color: '#F3F3F6',

    },
    cornerRadius: 10,
    shadow: {
      offsetX: 5,
      color: 'rgba(0, 0, 0, 0.04)',
      offsetY: 5,
    },
    arrowLength: 0,
    contentTemplate(info, container) {
      const contentItems = ["<div class='teamChart_tooltip'>",
      `<div class='teamChart_tooltip_item teamChart_tooltip_title tooltip_resolvedTask'><span class='tooltip_item-title'>Выполнено заданий</span><span class='tooltip_item-value'>${info.point.data.resolvedTask ? info.point.data.resolvedTask : '—'}</span></div>`,
        "<div class='teamChart_tooltip_title tooltip_completedTask'><span class='tooltip_item-title'>Пройдено занятий</span>",
        `<div class='teamChart_tooltip_item teamChart_tooltip_name tooltip_completedTask-digital'><span class=''>Цифровая безопасность</span><span class='tooltip_item-value'>${info.point.data.completedTaskDigital ? info.point.data.completedTaskDigital : '—'}</span></div>`,
        `<div class='teamChart_tooltip_item teamChart_tooltip_name tooltip_completedTask-personal'><span class=''>Личная безопасность</span><span class='tooltip_item-value'>${info.point.data.completedTaskPersonal ? info.point.data.completedTaskPersonal : '—'}</span></div>`,
        `<div class='teamChart_tooltip_item teamChart_tooltip_name tooltip_completedTask-finance'><span class=''>Финансовая безопасность</span><span class='tooltip_item-value'>${info.point.data.completedTaskFinance ? info.point.data.completedTaskFinance : '—'}</span></div>`,
     '</div></div>'];
      const content = $(contentItems.join(''));
      content.appendTo(container);
},
  },
}).dxChart('instance');
});
