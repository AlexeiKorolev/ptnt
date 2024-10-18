const fileInput = document.getElementById('fileInput');
const folderInput = document.getElementById('folderInput');
const selectFilesBtn = document.getElementById('selectFilesBtn');
const selectFolderBtn = document.getElementById('selectFolderBtn');
const uploadBtn = document.getElementById('uploadBtn');
const fileList = document.getElementById('fileList');

let questions = {
    "background": [
        "What field is the invention primarily in?",
        "Can the invention be used or applied in other fields?",
        "What was the state of the art before the invention?",
        "What is the key problem the invention solves?",
        "What articles, newsletters, whitepapers, issued patents, or other documents do you have that show how things worked before your invention?",
        "Does any document make a claim that your invention would never work?",
        "Does any document show the problem as being insurmountable?",
        "How would the industry respond if the problem got solved?"
    ],
    "summary_of_invention": [
        "What is the invention?",
        "What is the essence or the magic in the invention?",
        "What was the key hurdle you had to solve in making the invention work?",
        "Why would someone pay to own/use your invention?",
        "What would you use as the main image in a brochure for a product using your invention?",
        "How would you recognize if your competitors used this invention?",
        "What are the technical advantages in using your invention?",
        "How could your company or other companies benefit commercially from using your invention?"
    ],
    "detailed_description": [
        "If available, provide drawings of the product or invention.",
        "Provide block diagrams, functional diagrams, or schematics.",
        "Provide a document on the theory of operation if available.",
        "Provide flowcharts or data flow diagrams.",
        "Please provide any system architecture documents.",
        "What tools did you use in making the invention (software, design, etc.)?",
        "What problems did you have in making the invention?",
        "How did you overcome these problems? In other words, did you come up with any inventive improvements in the process of making the original invention work?",
        "Provide any examples of the invention working.",
        "Have you simulated the invention, and do you have simulation results?",
        "Do you have any charts/graphs/results showing how the invention performs?"
    ],
    "claims_help": [
        "Who are your competitors that are likely to want to use the invention?",
        "How could I tell if they started using the invention?",
        "What kind of product would it show up in?",
        "How would that product be used?",
        "How would that product be sold and delivered to the customer?",
        "Who else might want to use this invention?"
    ]
};


function generateSections() {
    const sections = [
      "Background",
      "Summary of Invention",
      "Detailed Description",
      "Claims Help"
    ];
  
    const sectionsList = document.getElementById('sectionsList');
    sections.forEach(section => {
      const li = document.createElement('li');
      li.textContent = section;
      li.addEventListener('click', () => {
        // You can add functionality here to show/hide content based on the selected section
        console.log(`Selected section: ${section}`);
      });
      sectionsList.appendChild(li);
    });
  }
  
  // Call the function to generate sections when the page loads
  document.addEventListener('DOMContentLoaded', generateSections);

let selectedFiles = [];

selectFilesBtn.addEventListener('click', () => fileInput.click());
selectFolderBtn.addEventListener('click', () => folderInput.click());

fileInput.addEventListener('change', handleFileSelection);
folderInput.addEventListener('change', handleFileSelection);

function handleFileSelection(event) {
  selectedFiles = Array.from(event.target.files);
  updateFileList();
  uploadBtn.disabled = selectedFiles.length === 0;
}

function updateFileList() {
  fileList.innerHTML = selectedFiles.map(file => `<div>${file.name}</div>`).join('');
}

uploadBtn.addEventListener('click', () => {
  // Implement your upload logic here
  console.log('Uploading files:', selectedFiles);
  // You would typically use FormData and fetch() or XMLHttpRequest to send files to a server
  alert('Upload functionality would be implemented here.');
});



function updateTabs(step) {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const screen4 = document.getElementById('screen4');

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        if (index < step) {
            tab.classList.add('active'); // Add active class for completed tabs
        } else {
            tab.classList.remove('active'); // Remove active class for future tabs
        }
    });

    if (step == 1) {
        screen1.classList.remove("disabled");
        screen2.classList.add("disabled");
        screen3.classList.add("disabled");
        screen4.classList.add("disabled");
        // STEP 1
    }else if (step == 2) {
        screen1.classList.add("disabled");
        screen2.classList.remove("disabled");
        screen3.classList.add("disabled");
        screen4.classList.add("disabled");
        
    }else if (step == 3) {
        screen1.classList.add("disabled");
        screen2.classList.add("disabled");
        screen3.classList.remove("disabled");
        screen4.classList.add("disabled");


    }else if (step == 4) {
        screen1.classList.add("disabled");
        screen2.classList.add("disabled");
        screen3.classList.remove("disabled");
        screen4.classList.add("disabled");

    }
}
