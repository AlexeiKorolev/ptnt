import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, connectFirestoreEmulator } from "firebase/firestore";

connectFirestoreEmulator(db, 'localhost', 5500); // For local dev

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmnvuzmkxEQwPqBLTWp5SLAam1QEmGCuI",
    authDomain: "ptnt-5054a.firebaseapp.com",
    projectId: "ptnt-5054a",
    storageBucket: "ptnt-5054a.appspot.com",
    messagingSenderId: "47860532355",
    appId: "1:47860532355:web:9a8b54cddcd050739487b6",
    measurementId: "G-184WLJ9EQB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Example: Add a document
  async function addPrompt(prompt) {
    try {
      // Use `collection` function to specify the Firestore collection
    const promptsCollection = collection(db, 'prompts');

    // Add a new document to the collection
    await addDoc(promptsCollection, {
      prompt: prompt,
      timestamp: new Date(),
    });

            alert('Prompt added successfully!');
            form.reset();
        } catch (error) {
            console.error('Error adding document:', error);
            alert('Failed to add prompt. Check the console for details.');
        }
  }

  // Call this function to test
  addPrompt("This is a test prompt");