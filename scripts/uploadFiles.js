document.addEventListener('DOMContentLoaded', function() {
    // Your existing code goes here
    document.getElementById('selectFilesBtn').onclick = async function() {
        //document.getElementById('fileInput').click();
        try {
            // Add a new document to the "prompts" collection in Firestore
            await addDoc(collection(db, 'prompts'), {
              prompt: prompt,
              timestamp: new Date(), // Optionally include a timestamp
            });
        
            alert('Prompt added successfully!');
            form.reset(); // Clear the form
          } catch (error) {
            console.error('Error adding prompt: ', error);
            alert('Failed to add prompt. Check the console for details.');
          }
    };

    document.getElementById('fileInput').onchange = function(event) {
        const files = event.target.files;
        // Display selected files
        const fileList = document.getElementById('fileList');
        fileList.innerHTML = '';
        Array.from(files).forEach(file => {
            const li = document.createElement('li');
            li.textContent = file.name;
            fileList.appendChild(li);
        });
        document.getElementById('uploadBtn').disabled = false; // Enable upload button
    };

    document.getElementById('uploadBtn').onclick = function() {
        const files = document.getElementById('fileInput').files;
        uploadFiles(files);
    };

    function uploadFiles(files) {
        const formData = new FormData();
        Array.from(files).forEach(file => {
            formData.append('files', file);
        });

        fetch('https://upload-file-5n2xpkerfq-uc.a.run.app', { // Replace with your Firebase Function URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include any other necessary headers
            },
            mode: 'no-cors',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., display download links or insights)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});