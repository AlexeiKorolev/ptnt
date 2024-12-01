document.addEventListener('DOMContentLoaded', function() {
    // Your existing code goes here
    document.getElementById('selectFilesBtn').onclick = function() {
        document.getElementById('fileInput').click();
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