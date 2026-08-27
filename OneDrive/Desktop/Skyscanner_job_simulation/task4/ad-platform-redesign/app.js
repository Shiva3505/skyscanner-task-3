// Skyscanner Advertising Platform - Interactive App Logic

let currentAdType = 'text';
let chartInstance = null;

// Tab Switching
function switchTab(tabId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
    btn.getAttribute('onclick').includes(tabId)
  );
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'design2' && !chartInstance) {
    initChart();
  }
}

// Ad Type Selection (Design 1)
function selectAdType(type, element) {
  currentAdType = type;
  document.querySelectorAll('.ad-type-card').forEach(card => card.classList.remove('selected'));
  element.classList.add('selected');

  const previewBadge = document.getElementById('previewBadge');
  const previewMedia = document.getElementById('previewMedia');
  const previewCta = document.getElementById('previewCta');

  if (type === 'text') {
    previewBadge.innerText = 'Sponsored Text Placement';
    previewMedia.style.display = 'none';
    previewCta.innerText = 'View Flights';
  } else if (type === 'image_text') {
    previewBadge.innerText = 'Sponsored Image Banner';
    previewMedia.style.display = 'flex';
    previewMedia.innerHTML = '📷 [ Featured Travel Destination Image ]';
    previewCta.innerText = 'Explore Destination';
  } else if (type === 'video') {
    previewBadge.innerText = 'Sponsored Video Ad';
    previewMedia.style.display = 'flex';
    previewMedia.innerHTML = '▶ [ 15-Sec Video Placement: Airline Experience ]';
    previewCta.innerText = 'Watch & Book';
  }

  updatePreview();
}

// Update Live Preview
function updatePreview() {
  const headline = document.getElementById('adHeadline').value;
  const body = document.getElementById('adBody').value;

  document.getElementById('previewTitle').innerText = headline || 'Campaign Headline';
  document.getElementById('previewBody').innerText = body || 'Ad description copy...';
}

// Handle Ad Publishing Form
function handleFormSubmit(event) {
  event.preventDefault();
  alert(`Campaign published successfully!\nFormat: ${currentAdType.toUpperCase()}\nHeadline: ${document.getElementById('adHeadline').value}`);
}

// Initialize Performance Chart (Design 2)
function initChart() {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Impressions',
          data: [15000, 18200, 21000, 19500, 24000, 28000, 26800],
          borderColor: '#0770E3',
          backgroundColor: 'rgba(7, 112, 227, 0.08)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Clicks',
          data: [900, 1100, 1350, 1200, 1550, 1800, 1620],
          borderColor: '#00a698',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: '#e0e4eb'
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
}

// Select Ad for Analytics Update
function selectAdAnalytics(adName, element) {
  document.querySelectorAll('.ad-item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');

  document.getElementById('chartTitle').innerText = `${adName} - Performance Trend`;

  if (adName.includes('Summer Sale')) {
    document.getElementById('metricImpressions').innerText = '142,500';
    document.getElementById('metricClicks').innerText = '8,420';
    document.getElementById('metricCtr').innerText = '5.91%';
    document.getElementById('metricSpend').innerText = '£1,240.00';
    if (chartInstance) {
      chartInstance.data.datasets[0].data = [15000, 18200, 21000, 19500, 24000, 28000, 26800];
      chartInstance.data.datasets[1].data = [900, 1100, 1350, 1200, 1550, 1800, 1620];
      chartInstance.update();
    }
  } else if (adName.includes('Bali Resort')) {
    document.getElementById('metricImpressions').innerText = '98,200';
    document.getElementById('metricClicks').innerText = '7,150';
    document.getElementById('metricCtr').innerText = '7.28%';
    document.getElementById('metricSpend').innerText = '£950.00';
    if (chartInstance) {
      chartInstance.data.datasets[0].data = [11000, 13000, 14500, 16000, 14000, 15200, 14500];
      chartInstance.data.datasets[1].data = [800, 950, 1100, 1250, 1050, 1150, 1100];
      chartInstance.update();
    }
  } else if (adName.includes('NYC Business')) {
    document.getElementById('metricImpressions').innerText = '64,100';
    document.getElementById('metricClicks').innerText = '4,900';
    document.getElementById('metricCtr').innerText = '7.64%';
    document.getElementById('metricSpend').innerText = '£1,850.00';
    if (chartInstance) {
      chartInstance.data.datasets[0].data = [7000, 8500, 9200, 10100, 9800, 10200, 9300];
      chartInstance.data.datasets[1].data = [550, 680, 720, 810, 790, 800, 750];
      chartInstance.update();
    }
  }
}

// Handle Survey Form Submit (Design 3)
function handleSurveySubmit(event) {
  event.preventDefault();
  const toast = document.getElementById('surveyToast');
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
}
