document.addEventListener('DOMContentLoaded', () => {

    const ctxOverview = document.getElementById('websiteOverviewChart').getContext('2d');
    new Chart(ctxOverview, {
        type: 'bar',
        data: {
            labels: ['Mar', '5-Mar', '6-Mar', '7-Mar', '8-Mar', '9-Mar', '10-Mar', '11-Mar', '12-Mar', '13-Mar', '14-Mar', '15-Mar', '16-Mar', '17-Mar'],
            datasets: [
                {
                    label: 'New Users',
                    data: [250, 280, 300, 320, 350, 400, 380, 350, 330, 310, 290, 270, 250, 240],
                    backgroundColor: '#42A5F5',
                    yAxisID: 'y'
                },
                {
                    label: 'Sessions',
                    data: [380, 420, 450, 480, 520, 580, 550, 510, 490, 470, 440, 410, 390, 380],
                    type: 'line',
                    borderColor: '#FF6F00',
                    backgroundColor: 'transparent',
                    pointRadius: 4,
                    pointBackgroundColor: '#FF6F00',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    tension: 0.4,
                    fill: false,
                    yAxisID: 'y',
                    order: 1
                },
                {
                    label: 'Users',
                    data: [300, 340, 360, 380, 410, 450, 430, 400, 390, 370, 350, 330, 310, 300],
                    type: 'line',
                    borderColor: '#42A5F5',
                    backgroundColor: 'transparent',
                    pointRadius: 4,
                    pointBackgroundColor: '#42A5F5',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    tension: 0.4,
                    fill: false,
                    yAxisID: 'y',
                    order: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    type: 'linear',
                    position: 'left',
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    const ctxLanding = document.getElementById('landingPageChart').getContext('2d');
    new Chart(ctxLanding, {
        type: 'doughnut',
        data: {
            labels: ['Home', 'Contact', 'Marketing-Research', 'Marketing', 'Seo-Tipe', 'Offline-Marketing', 'Content-Writing', 'Marketing Service', 'About-us', 'Website-Analytics'],
            datasets: [{
                label: 'Landing Page Traffic',
                data: [1025, 990, 580, 260, 200, 180, 170, 155, 150, 115],
                backgroundColor: [
                    '#42A5F5',
                    '#1976D2',
                    '#5D4037',
                    '#00897B',
                    '#388E3C',
                    '#689F38',
                    '#FF6F00',
                    '#E64A19',
                    '#E91E63',
                    '#8D6E63'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(0);
                            return `${label}: ${value}/${percentage}%`;
                        }
                    }
                }
            }
        }
    });

    const ctxTime = document.getElementById('timeOnSiteChart').getContext('2d');
    new Chart(ctxTime, {
        type: 'line',
        data: {
            labels: ['Mar', '5-Mar', '6-Mar', '7-Mar', '8-Mar', '9-Mar', '10-Mar', '11-Mar', '12-Mar', '13-Mar', '14-Mar', '15-Mar', '16-Mar', '17-Mar'],
            datasets: [{
                label: 'Time on Site',
                data: [12.5, 13.2, 14.1, 13.8, 14.5, 15.2, 14.8, 14.3, 13.9, 13.5, 13.1, 12.8, 12.4, 12.2],
                fill: true,
                backgroundColor: 'rgba(255, 111, 0, 0.3)',
                borderColor: 'rgb(255, 111, 0)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { 
                    display: false 
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    const ctxExit = document.getElementById('exitPageChart').getContext('2d');
    new Chart(ctxExit, {
        type: 'doughnut',
        data: {
            labels: ['Agencies', 'Other', '640', 'Business/cut', '/Agencies cut', '/Agencies se', 'Pricing/Agen', '/Agencies/so', '/Es/Agencies', '/Pt/Agencies'],
            datasets: [{
                label: 'Exit Page',
                data: [929, 627, 640, 387, 285, 230, 152, 145, 142, 129],
                backgroundColor: [
                    '#42A5F5',
                    '#5D4037',
                    '#00897B',
                    '#1976D2',
                    '#388E3C',
                    '#689F38',
                    '#E91E63',
                    '#E64A19',
                    '#FF6F00',
                    '#8D6E63'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(0);
                            return `${label}: ${value}/${percentage}%`;
                        }
                    }
                }
            }
        }
    });

    const ctxDepth = document.getElementById('pageDepthChart').getContext('2d');
    new Chart(ctxDepth, {
        type: 'bar',
        data: {
            labels: ['Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21', 'Jan-22', 'Feb-22', 'Mar-22', 'Apr-22'],
            datasets: [{
                label: 'Page Depth',
                data: [1.8, 1.9, 2.0, 2.1, 1.9, 2.2, 2.0, 2.1, 2.0, 2.1, 2.0, 2.2, 2.1],
                backgroundColor: '#0288D1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { 
                    display: false 
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 1.5,
                    max: 2.5,
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    const ctxBounce = document.getElementById('bounceRateChart').getContext('2d');
    new Chart(ctxBounce, {
        type: 'line',
        data: {
            labels: ['Mar', '5-Mar', '6-Mar', '7-Mar', '8-Mar', '9-Mar', '10-Mar', '11-Mar', '12-Mar', '13-Mar', '14-Mar', '15-Mar', '16-Mar', '17-Mar'],
            datasets: [{
                label: 'Bounce Rate',
                data: [29.5, 29.2, 28.8, 28.5, 28.2, 28.0, 28.3, 28.5, 28.7, 28.9, 29.1, 28.8, 28.6, 28.65],
                fill: false,
                borderColor: 'rgb(255, 111, 0)',
                backgroundColor: 'transparent',
                pointRadius: 4,
                pointBackgroundColor: 'rgb(255, 111, 0)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { 
                    display: false 
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 27,
                    max: 30,
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

});