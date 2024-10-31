document.addEventListener('DOMContentLoaded', function() {
    // Sample claims data (replace with your actual data)
    const claims = [
      { id: 1, parent: null, text: "A device comprising..." },
      { id: 2, parent: 1, text: "The device of claim 1, further comprising..." },
      { id: 3, parent: 1, text: "The device of claim 1, wherein..." },
      { id: 4, parent: 2, text: "The device of claim 2, further including..." },
      // Add more claims as needed
    ];
  
    function buildTree(claims) {
      const tree = document.getElementById('claimsTree');
      const map = {};
  
      claims.forEach(claim => {
        map[claim.id] = { claim, children: [] };
      });
  
      claims.forEach(claim => {
        if (claim.parent !== null) {
          map[claim.parent].children.push(map[claim.id]);
        }
      });
  
      function createTreeNode(node) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = `Claim ${node.claim.id}`;
        span.onclick = (e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          showClaim(node.claim);
        };
        li.appendChild(span);
  
        if (node.children.length > 0) {
          const ul = document.createElement('ul');
          node.children.forEach(child => {
            ul.appendChild(createTreeNode(child));
          });
          li.appendChild(ul);
        }
  
        return li;
      }
  
      claims.filter(claim => claim.parent === null).forEach(rootClaim => {
        tree.appendChild(createTreeNode(map[rootClaim.id]));
      });
    }
  

  
    function populateClaimsList(claims) {
      const claimsList = document.getElementById('claimsList');
      claimsList.innerHTML = ''; // Clear existing claims
      claims.forEach(claim => {
        const div = document.createElement('div');
        div.className = 'claim';
        div.innerHTML = `<h3>Claim ${claim.id}</h3><p>${claim.text}</p>`;
        claimsList.appendChild(div);
      });
    }
  
    function showClaim(claim) {
      const claimsList = document.getElementById('claimsList');
      claimsList.innerHTML = '';
      const div = document.createElement('div');
      div.className = 'claim';
      div.innerHTML = `<h3>Claim ${claim.id}</h3><p>${claim.text}</p>`;
      claimsList.appendChild(div);
    }
  
    // Add this new function to handle showing all claims
    function showAllClaims() {
      populateClaimsList(claims);
    }
  
    buildTree(claims);
    populateClaimsList(claims);
  
    // Add event listener for the "Show All Claims" button
    const showAllClaimsBtn = document.getElementById('showAllClaims');
    showAllClaimsBtn.addEventListener('click', showAllClaims);


    const downloadDraftBtn = document.getElementById('downloadDraft');
  const downloadInsightsBtn = document.getElementById('downloadInsights');
  const pdfViewer = document.getElementById('pdfViewer');

  downloadDraftBtn.addEventListener('click', function() {
    // Add functionality to download draft
    console.log('Downloading draft...');
  });

  downloadInsightsBtn.addEventListener('click', function() {
    // Add functionality to download insights
    console.log('Downloading insights...');
  });

  // Function to load PDF (replace with actual PDF loading logic)
  function loadPDF() {
    // For this example, we'll use PDF.js to render a sample PDF
    pdfjsLib.getDocument('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf').promise.then(function(pdf) {
      pdf.getPage(1).then(function(page) {
        var scale = 1.5;
        var viewport = page.getViewport({scale: scale});

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);

        pdfViewer.appendChild(canvas);
      });
    });
  }

  // Load PDF when screen3 is shown
  function showScreen(screenNumber) {
    // ... (keep your existing showScreen function)
    if (screenNumber === 4) {
      loadPDF();
    }
  }

  });